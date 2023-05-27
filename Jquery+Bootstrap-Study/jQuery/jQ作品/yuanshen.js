$(function () {

    //觉得写的是JSON对象// 原生数组，通过saveDate加到了本地存储,load()渲染
    var yuanshenUp = [{

        "src": './img/阿贝多.jpg',
        "Name": '阿贝多',
        "shuxing": 0, //火是10,雷11，风12，冰13，水14.
        "xing": 5,
    }, {

        "src": './img/巴尔.jpeg',
        "Name": '巴尔',
        "shuxing": 11,
        "xing": 5,
    }, {

        "src": './img/芭芭拉.jpeg',
        "Name": '芭芭拉',
        "shuxing": 14,
        "xing": 4,
    }, {

        "src": './img/北斗.jpeg',
        "Name": '北斗',
        "shuxing": 11,
        "xing": 4,
    }, {

        "src": './img/菲谢尔.jpeg',
        "Name": '菲谢尔',
        "shuxing": 11,
        "xing": 4,
    }, {

        "src": './img/甘雨.jpg',
        "Name": '甘雨',
        "shuxing": 13,
        "xing": 5,
    }, {

        "src": './img/胡桃.jpg',
        "Name": '胡桃',
        "shuxing": 10,
        "xing": 5,
    }, {

        "src": './img/可莉.jpeg',
        "Name": '可莉',
        "shuxing": 10,
        "xing": 5,
    }, {

        "src": './img/刻晴.jpeg',
        "Name": '刻晴',
        "shuxing": 11,
        "xing": 5,
    }, {

        "src": './img/空.jpeg',
        "Name": '空',
        "shuxing": 12,
        "xing": 5,
    }, {

        "src": './img/莫娜.jpg',
        "Name": '莫娜',
        "shuxing": 14,
        "xing": 5,
    }, {

        "src": './img/诺埃尔.jpg',
        "Name": '诺埃尔',
        "shuxing": 0,
        "xing": 4,
    }, {

        "src": './img/琴.jpeg',
        "Name": '琴',
        "shuxing": 12,
        "xing": 5,
    }, {

        "src": './img/神里凌华.jpeg',
        "Name": '神里凌华',
        "shuxing": 13,
        "xing": 5,
    }, {

        "src": './img/温蒂.jpeg',
        "Name": '温蒂',
        "shuxing": 12,
        "xing": 5,
    }, {

        "src": './img/魈.jpg',
        "Name": '魈',
        "shuxing": 12,
        "xing": 5,
    }, {

        "src": './img/烟菲.jpg',
        "Name": '烟菲',
        "shuxing": 10,
        "xing": 4,
    }, {

        "src": './img/莹.jpeg',
        "Name": '莹',
        "shuxing": 12,
        "xing": 5,
    }, {

        "src": './img/尤拉.jpg',
        "Name": '尤拉',
        "shuxing": 13,
        "xing": 5,
    }, {

        "src": './img/钟离.jpg',
        "Name": '钟离',
        "shuxing": 0,
        "xing": 5,
    }];
    // saveDate(yuanshenUp); //导致只加载渲染数组里的,简单说是重值       
    load();
    // 读取本地存储的数据
    function getDate() {
        var date = localStorage.getItem("yuanshenUp");//获取数组内容
        if (date != null) {
            return JSON.parse(date);//转化为JS对象
        } else {
            return [];
        }
    }
    // // 保存本地存储
    function saveDate(date) {
        // 把数组转化为字符串形式，存到本地存储
        localStorage.setItem("yuanshenUp", JSON.stringify(date));
    }

    // 渲染加载数据
    function load() {
        var date = getDate();
        // console.log(date);
        // 遍历前清空数据
        $(".nei-box ul").empty();
        // 遍历数据
        $.each(date, function (i, n) {
            $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
        })
    }
    // 重置
    $("#chongzhi").click(function(){
        saveDate(yuanshenUp);
        load();
        dianya();
    })
    // 封装了点击小圆点渲染页面的方法
    function dianya() {
        var dade = $(".active").attr("date-index");
        if (dade == 1) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {
                // console.log(n);
                // console.log(111);
                var abc = $(n).attr("xing");
                if (abc == 5) {
                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
            // localStorage.setItem("date", JSON.stringify(date));

        } else if (dade == 2) {

            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {
                // console.log(n);
                // console.log(111);
                var abc = $(n).attr("xing");
                if (abc == 4) {
                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }
            })
            // $("yuanshenUp").empty();
            // yuanshenUp = date;
            // console.log(date);
            // saveDate(date);
            // load();
        } else if (dade == 3) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 10) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 4) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 11) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 5) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 12) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 6) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 13) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 7) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 14) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 8) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {

                let abc = $(n).attr("shuxing");
                if (abc == 15) {

                    $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
                }

            })
        } else if (dade == 0) {
            var date = getDate();
            // console.log(date);
            // 遍历前清空数据
            $(".nei-box ul").empty();

            // 遍历数据
            $.each(date, function (i, n) {
                $(".nei-box ul").prepend("<li> <img src=" + n.src + "  id=" + i + "> <i>" + n.Name + "</i></li>")
            })
        }
    }
    // 小圆点显示蓝蓝
    var points = $(".point");
    $(".point").on("click", function () {
        var th = this;

        $.each(points, function (i, n) {

            if (th == n) {
                // $(th).css("background-position", " 0 -37px");
                $(th).addClass("active");
                dianya();
            } else {
                // $(this).css("background-position", "-37px 0 ");
                //    console.log(11);
                $(this).removeClass("active");
            }

        })
    })

    // 头像框
    $("#file").on("change", function () {
        myFile = document.querySelector("#file").files[0];
        img = new Image();
        reader = new FileReader(); // 读取文件资源
        if (myFile) {
            reader.readAsDataURL(myFile); //将上传图片转成base64地址
        } else {
            img.src = " ";
        }
        reader.onload = function () {
            img.src = reader.result;
            $("#lookimg").attr("src", img.src);
        };
    })

    // 增加
    $("#test").click(function () {
        let local = getDate();
        if ($("#name").val() == "" || $("#file").val() == "") {
            alert("图片和名字不能为空！");
        } else {
            //添加元素 
            local.push({
                // src: $(".tx").src,
                "src": img.src,
                "Name": $("#name").val(),
                "shuxing": $("#shuxing").val(),
                "xing": $("#xingxi").val()
            });

            // 保存
            saveDate(local);
            // 渲染页面
            load();
            dianya();
        }

    })

    // 删除和修改
    $(".nei-box ul").on("click", "img", function () { //事件委托
        console.log(6666666666)
        // console.log($(this).parent());
        // $("#gaiModal").modal('show');
        // 添加小背景筐表示选中
        $(this).parent().css("background-color", "#bdc2e2");
        $(this).parent().siblings().css("background-color", "");
        // 获取本地存储
        var date = getDate();
        // 获取ID属性
        var index = $(this).attr("id");
        // console.log(index);

        // 删除
        $("#shanchu1").on("click", function () {
            // alert(111);
            if (date != "" && date != "ALL") {
                date.splice(index, 1);
                saveDate(date); //保存数据
                load(); //重新渲染页面
                index = '200';
            }
            dianya(); //再次渲染当前小圆点所在，所有的xiaoli
        })


        // 修改

        // 获取一下，自动输入
        var thisname = $(this).siblings("i").text();
        // console.log(thisname);
        let clickImg = $(this).attr("src");
        $("#changelookimg").attr("src", clickImg);

        // 显示模态框
        $("#xiugai").on("click", function () {
            $("#gaiModal").modal('show');

            // 更改头像框
            $("#changefile").on("change", function () {
                changeFile = document.querySelector("#changefile").files[0];
                changeimg = new Image();
                changereader = new FileReader(); // 读取文件资源
                if (changeFile) {
                    changereader.readAsDataURL(changeFile); //将上传图片转成base64地址
                } else {
                    changeimg.src = " ";
                }
                changereader.onload = function () {
                    changeimg.src = changereader.result;
                    $("#changelookimg").attr("src", changeimg.src);
                }
                saveDate(date);
                load();
                dianya();
            })
            // console.log(date);      
            $.each(date, function (i, n) {
                if (n.Name == thisname) {
                    // console.log(thisname);
                    $("#changename").val(n.Name);
                    $("#changeshuxing").val(n.shuxing);
                    $("#changexingxi").val(n.xing);
                    const that = this;
                    // console.log(that);
                    $("#changetest").click(function () {
                        // console.log(11122);
                        newname = $("#changename").val();
                        newshuxing = $("#changeshuxing").val();
                        newxingxi = $("#changexingxi").val();
                        that.Name = newname;
                        that.shuxing = newshuxing;
                        that.xing = newxingxi
                        // this.id = "unddefind";
                        // var thatimg = $("#changelookimg").attr("src");
                        // $(that).attr("src",thatimg);
                        if (that.src) {
                            var thatimg = $("#changelookimg").attr("src");
                            $(that).attr("src", thatimg);
                        }
                        saveDate(date);
                        load();

                    })
                    saveDate(date);
                    load();
                }
                saveDate(date);
                load();
                dianya(); //再次渲染当前小圆点所在，所有的xiaoli
            })
            $("#changetest").click(function () {
                dianya(); //再次渲染当前小圆点所在，所有的xiaoli
            })
        })


    })


    // 查找搜索
    $("#find").on("keydown", function (e) {
        var date = getDate();

        if (e.keyCode == 13) {

            if ($("#find").val() == "") {
                alert("输入的UP名不能为空");
            } else {
                $.each(date, function (i, n) {
                    // console.log($("#find").val());
                    if ($("#find").val() == n.Name) {
                        $(".nei-box ul").empty();
                        $(".nei-box ul").prepend("<li> <img src=" + n.src + "><p>" + n.Name + "</p></li>");
                    }
                })
            }
        }
    })

})