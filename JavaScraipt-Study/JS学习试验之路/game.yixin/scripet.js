window.onload = function(){
    
  var sub = document.getElementById("sub");
  var txt = document.getElementsByClassName("txt");
  var phone = document.getElementById("phone");
  var demo = document.getElementById("demo")
    phone.onblur = function(){
        if(phone.nodeValue.length == 0)
        document.getElementById("demo").innerHTML="该部分不能为空"

    }
    console.log("该部分不能为空")
}
    





