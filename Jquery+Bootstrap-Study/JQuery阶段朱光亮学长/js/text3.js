$(function(){
    load();
    //读取数据
    function getDate(){
        var Data=localStorage.getItem('weapons');
        if(Data!==null){
            return JSON.parse(Data);
        }else{
           return [];
        }
    }
    // 保存数据
    function saveDate(e){
        localStorage.setItem('weapons',JSON.stringify(e));
    }
    //渲染
    function load(){
        var data=getDate();
        $('#foot>ul').empty();
        $.each(data,function(i,n){
            $('#'+n.weapontype).append(
            "<li id=a"+i+"><img src=\"../images/"+n.weapontype+".png\">"+
                "<p>"+n.Nombre+"</p>"+
                "<i id=btn"+i+">卸下</i>"+
                "<a id=atn"+i+">修改</a>"+
                "</li>");
        });
        series(0);
    }
    // 点击每一个库后,为每一个库中的武器注册点击事件:点击底部的小图片显示相应的武器属性
    function out(e){
        if($("#"+e+">li").length>0){
            $("#"+e).on('click','li',function(){
                var x=$(this).attr('id').substring(1,100);
                var date=getDate();
                $('#weapon').text(date[x].Nombre);
                $('#rightimg').attr('src',date[x].photos);
                var matn=(date[x].hurt)*3;
                if(matn<=300){
                    $('#harm').css("width",matn);
                }
                else if(matn>300){
                    matn=300;
                    $('#harm').css('width',matn);
                }
                var present=[date[x].free,date[x].fodder,
                    date[x].hortation,date[x].hurt,date[x].speed];
                for(var i=0;i<present.length;i++){
                    $('#present>li').eq(i).find('a').text(present[i]);
                }
                // load();
            });
        }
    }
    // 选择图片
    $('#photos,#photos1').on('change',function(){
        var file=this.files[0];
        var reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            var obj=new Object();
            obj.src=this.result;
            obj.key="图片地址";
            $('#img').attr('src',obj.src);
            $('#img2').attr('src',obj.src);
        };
    });
    $('#flase').on('click',function(){
        $('#blackmu').hide().next().hide();
       
    });
    $('#flasetwo').on('click',function(){
        $('#blackmu').hide().next().next().hide();
    });
    $('#open').on('click',function(){
        $('#blackmu').show().next().show();
    });
    // 保存武器
    $('#close').on('click',function(){
        if(re==2){
            alert('有重名或者命名为空,不能存储!');
             window.location.reload();
        }else if(re==1||re==0){
            $('#blackmu').hide().next().hide();
            var native=getDate();
            native.push({
                weapontype: $('#weaponlist').get(0).selectedIndex,
                Nombre:$('#Nombre').val(),
                free:$('#free').val(),
                fodder:$('#fodder').val(),
                hortation:$('#hortation').val(),
                hurt:$('#hurt').val(),
                speed:$('#speed').val(),
                photos:$('#img').attr('src')
            });
            for(var i=0;i<native.length;i++){
                $('#'+i).empty();
            }
            $('#0').empty();
            saveDate(native);
            load();
            // 清空表单内容
            var inputs=$('#dd>input');
            for(var u=0;u<inputs.length;u++){
                inputs.eq(u).val("");
            }
            $('#weaponlist>option').eq(0).attr('selected','selected');
            $('#img').attr('src',"");
        }
    });

    // 判断是否重名
    $('#Nombre').on('change',function(){
        repeat($(this).val());
    });
    $('#Nombre1').on('change',function(){
        repeat($(this).val());
    });
    var re=0;
    function repeat(e){
        var date=getDate();
            for(var i=0;i<date.length;i++){
                var x=date[i].Nombre;
                if(e==x||e==null){
                    re=2;
                }
                else if(x!=e&&i==e.length-1){
                    re=1;
                }
            }  
    }
    // 点击显示标记
    $('#uls').on('click','li',function(){
        var lis=$(this).index();
        $("#"+lis).attr('class','current').siblings('ul').removeAttr('class');
        $(this).css('border-bottom','4px whitesmoke solid').siblings('li').css('border-bottom','none');
        series(lis);
    });
    function series(e){
        showfirst(e);
        out(e);
        clear(e);
        bluepencil(e);
    }
    function dispay(e){
         var date=getDate();
         $('#weapon').text(date[e].Nombre);
            $('#rightimg').attr('src',date[e].photos);
            var matn=(date[e].hurt)*3;
            if(matn<=300){
                $('#harm').css("width",matn);
            }
            else if(matn>300){
                matn=300;
                $('#harm').css('width',matn);
            }
            var present=[date[e].free,date[e].fodder,
                date[e].hortation,date[e].hurt,date[e].speed];
            for(var i=0;i<present.length;i++){
                $('#present>li').eq(i).find('a').text(present[i]);
            }
    }
    // 点击哪个库显示哪个库的第一个武器
    function showfirst(e){
        if($("#"+e+">li").length>0){
            var x=$("#"+e).find('li').eq(0).attr('id').substring(1,100);
            dispay(x);
        }
    }
    // 删除操作
    function clear(e){
        if($("#"+e+">li").length>0){
            $("#"+e).on('click','li>i',function(f){
              var btn=$(this).attr('id').substring(3,100);
              var x=getDate();
              x.splice(btn,1);
              saveDate(x);
              parent.location.reload()
              load();
              f.stoppropagation();
            });
        }
        // load();
    }
    //修改操作   
    function bluepencil(e){
        if($("#"+e+">li").length>0){
            $("#"+e).on('click','li>a',function(){
                $('#blackmu').show().next().next().show();
                var atn=$(this).attr('id').substring(3,100);
                var date=getDate();
                $('#weaponlist1>option').eq(date[atn].weapontype).attr('selected','selected');
                $('#Nombre1').val(date[atn].Nombre);
                $('#img2').attr('src',date[atn].photos);
                var back=[date[atn].Nombre,date[atn].free,date[atn].fodder,
                date[atn].hortation,date[atn].hurt,date[atn].speed];
                for(var i=0;i<back.length;i++){
                    $('#xx').find('input').eq(i).val(back[i]);
                }
                // 保存修改的武器,点击修改武器按钮
                $('#close1').on('click',function(){
                    if(re==2){
                        alert('有重名或者命名为空,不能修改!');
                        window.location.reload();
                    }else if(re==1||re==0){
                        $('#blackmu').hide().next().next().hide();
                        date[atn].weapontype=$('#weaponlist1').get(0).selectedIndex;
                        date[atn].Nombre=$('#Nombre1').val();
                        date[atn].free=$('#free1').val();
                        date[atn].fodder=$('#fodder1').val();
                        date[atn].hortation=$('#hortation1').val();
                        date[atn].hurt=$('#hurt1').val();
                        date[atn].speed=$('#speed1').val();
                        date[atn].photos=$('#img2').attr('src');
                        saveDate(date);
                        load();
                    } 
                })
            });
        }
    }
    // 查找的操作 
    $('#find').on('keydown',function(e){
        var date=getDate();
        if(e.keyCode==13){
            for(var i=0;i<date.length;i++){
                if($(this).val()==date[i].Nombre){
                    dispay(i);
                }
                else{
                    alert('没有该武器');
                    $(this).val("");
                    break;
                }
            }
        }
    })
});