// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide(1000,"linear",function(){alert("hider()方法完成了")
//         });
//     })
// })


// $(document).ready(function() {
//     $("button").click(function(){
//         var div = $("div");
//         div.animate({width:'300px',opacity:'0.5'},"slow")
//     })
    
// })


$(document).ready(function(){
    $("button").click(function(){
        $("p").css("color","red")
        .slideUp(2000)
        .slideDown(2000);
    })

    $(".abc").contextmenu(function(e){
        e.preventDefault()
        alert(111);
        
    })
})