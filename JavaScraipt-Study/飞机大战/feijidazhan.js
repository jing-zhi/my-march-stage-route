var mainObj=document.getElementById("main");
var smallPlaneArray=[];//敌机数组
var bulletArray=[];//子弹数组

var leftBtn=false;
var upBtn=false;
var rightBtn=false;
var downBtn=false;
var bulletBtn=false;    

var killNum=document.getElementById("killNum");
var killScore=document.getElementById("killScore");

var starMusic=document.getElementById("starMusic");
var zdMusic=document.getElementById("zdMusic");
console.log(11);
starMusic.play();

// 声明初始化飞机
var player=new playerPlaneProto("./feiji-img/me1.png",50,780,10);
var creatSmallPlaneTimer=setInterval(creatSmallPlane,1000);//创造小飞机
var smallPlaneMoveTimer=setInterval(smallPlaneMove,50);//小飞机移动
var ctrlbulletTimer=setInterval(ctrlbullet,150);//每隔150毫秒判断是否创造子弹
var ctrlPlayTimer=setInterval(ctrlPlay,50);//每隔50毫秒判断是否按下键盘、
var bulletMoveTimer=setInterval(bulletMove,30);//子弹移动
var crashCheckTimer=setInterval(crashCheck,50);//是否碰撞

var stop=document.getElementById("stop");
//暂停
function myStopGame(){
    stop.style.display="block";
    clearInterval(creatSmallPlaneTimer);
    clearInterval(smallPlaneMoveTimer);
    clearInterval(ctrlbulletTimer);
    clearInterval(ctrlPlayTimer);
    clearInterval(bulletMoveTimer);
    clearInterval(crashCheckTimer);
    zdMusic.pause();
    starMusic.pause();
}
//继续
function continueGame(){
    stop.style.display="none";
    creatSmallPlaneTimer=setInterval(creatSmallPlane,1000);//创造小飞机
    smallPlaneMoveTimer=setInterval(smallPlaneMove,50);//小飞机移动
    ctrlbulletTimer=setInterval(ctrlbullet,150);//每隔150毫秒判断是否创造子弹
    ctrlPlayTimer=setInterval(ctrlPlay,50);//每隔50毫秒判断是否按下键盘、
    bulletMoveTimer=setInterval(bulletMove,30);//子弹移动
    crashCheckTimer=setInterval(crashCheck,50);//是否碰撞
    zdMusic.play();
    starMusic.play();
}
//新游戏
function newGame(){
    stop.style.display="none";
    mainObj.removeChild(player.imgNode);
    player=null;
    for(var i = 0;i<smallPlaneArray.length;i++){
        mainObj.removeChild(smallPlaneArray[i].imgNode);
    }
    smallPlaneArray.splice(0,smallPlaneArray.length);
    // for(var i = 0;i<bulletArray.length;i++){
    //     mainObj.removeChild(bulletArray.imgNode);
    // }
    // bulletArray.splice(0,bulletArray.length);
    killNum.innerHTML=0;
    killScore.innerHTML=0;
    creatSmallPlaneTimer=setInterval(creatSmallPlane,1000);//创造小飞机
    smallPlaneMoveTimer=setInterval(smallPlaneMove,50);//小飞机移动
    ctrlbulletTimer=setInterval(ctrlbullet,150);//每隔150毫秒判断是否创造子弹
    ctrlPlayTimer=setInterval(ctrlPlay,50);//每隔50毫秒判断是否按下键盘、
    bulletMoveTimer=setInterval(bulletMove,30);//子弹移动
    crashCheckTimer=setInterval(crashCheck,50);//是否碰撞
    zdMusic.play();
    starMusic.play();
    player=new playerPlaneProto("./feiji-img/me1.png",50,780,10);
}
// 创造敌机
function SmallPlaneProto(imgSrc,x,y,speed){
    this.imgNode=document.createElement("img");
    this.imgSrc=imgSrc;
    this.x=x;
    this.y=y;
    this.isDead=false;
    this.exTime=9;
    this.speed=speed;
    this.init=function(){
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position="absolute";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.style.top=this.y+"px";
        mainObj.appendChild(this.imgNode);
    }
    this.init();
    this.move=function(){
        this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+"px";
    }
}

// new SmallPlaneProto("./feiji-img/enemy1.png",0,0,0);
function creatSmallPlane(){
    var smallPlane=new SmallPlaneProto("./feiji-img/enemy1.png",parseInt
    (Math.random()*566),-parseInt(Math.random()*100+40),parseInt(Math.random()*7)+1);
    smallPlaneArray.push(smallPlane);
}


// 敌机移动
function smallPlaneMove(){
    for(var i=0;i<smallPlaneArray.length;i++){
        if(smallPlaneArray[i].isDead==false){
            smallPlaneArray[i].move();
            if(parseInt(smallPlaneArray[i].imgNode.style.top)>876){
                mainObj.removeChild(smallPlaneArray[i].imgNode);
                smallPlaneArray.splice(i,1);
            }
        }else{
            smallPlaneArray[i].move();
            smallPlaneArray[i].exTime--;
            if (smallPlaneArray[i].exTime==0) {
                
                mainObj.removeChild(smallPlaneArray[i].imgNode);
                smallPlaneArray.splice(i,1);
            }
        }
        
    }
}


// 我的飞机
function playerPlaneProto(imgSrc,x,y,speed){
    this.imgNode=document.createElement("img");
    this.imgSrc=imgSrc;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.init=function(){
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position="absolute";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.style.top=this.y+"px";
        mainObj.appendChild(this.imgNode);
    }
    this.init();
    this.moveLeft=function(){
        // 根据按下的按钮判断移动方向
        if(this.imgNode.style.left=="0px"){
            console.log(123);
            this.imgNode.style.left="0px";
        }else{
            this.imgNode.style.left=parseInt(this.imgNode.style.left)-this.speed+"px";
        }
    }
    this.moveRight=function(){
        // 根据按下的按钮判断移动方向
        if(this.imgNode.style.left=="500px"){
            // console.log(124);
            this.imgNode.style.left="500px";
            // console.log(125);
        }else{
            this.imgNode.style.left=parseInt(this.imgNode.style.left)+this.speed+"px";
        }
    }
    this.moveUp=function(){
        // 根据按下的按钮判断移动方向
        if(this.imgNode.style.top=="0px"){
            this.imgNode.style.top="0px";
        }else{
             this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+"px";
        }
        // this.imgNode.style.top-=100;
    }
    this.moveDown=function(){
        // 根据按下的按钮判断移动方向
        if(this.imgNode.style.top=="780px"){
            this.imgNode.style.top="780px";
        }else{
             this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+"px";
        }
    }
    this.shoot=function(){
        // 根据按键，判断是否发射子弹
        var newBullet=new bulletProto("feiji-img/bullet1.png",parseInt
        (this.imgNode.style.left)+50,parseInt(this.imgNode.style.top)-11,10);
        bulletArray.push(newBullet);
    }
}   

// 按键控制移动事件
document.body.onkeydown=function(){
    var e=window.event||arguments[0];
    // console.log(e);
    if(e.keyCode==37){
        leftBtn=true;
        // console.log(112);
    }
    if(e.keyCode==38){
        upBtn=true;
        // console.log(113);
    }
    if(e.keyCode==39){
        rightBtn=true;
    }
    if(e.keyCode==40){
        downBtn=true;
    }
   
}

document.body.onkeypress=function(){
    var e=window.event||arguments[0];
    if(e.keyCode==32){
        bulletBtn=true;
        zdMusic.play();
    }
}

document.body.onkeyup=function(){
    var e=window.event||arguments[0];
    // console.log(e);
    if(e.keyCode==37){
        leftBtn=false;
        // console.log(112);
    }
    if(e.keyCode==38){
        upBtn=false;
        // console.log(113);
    }
    if(e.keyCode==39){
        rightBtn=false;
    }
    if(e.keyCode==40){
        downBtn=false;
    }
    if(e.keyCode==32){
        bulletBtn=false;
        // player.shoot();
    }
}
function ctrlbullet(){
    if(bulletBtn==true){
        player.shoot();
    }
}
function ctrlPlay() {
    if(leftBtn==true){
        player.moveLeft();
    }
    if(upBtn==true){
        player.moveUp();
    }
    if(rightBtn==true){
        player.moveRight();
    }
    if(downBtn==true){
        player.moveDown();
    }

}


// 子弹类
function bulletProto(imgSrc,x,y,speed){
    this.imgNode=document.createElement("img");
    this.imgSrc=imgSrc;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.init=function(){
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position="absolute";
        this.imgNode.style.left=this.x+"px";
        this.imgNode.style.top=this.y+"px";
        mainObj.appendChild(this.imgNode);
    }
    this.init();
    this.move=function(){
        this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+"px";
    }
}
// 子弹移动
function bulletMove(){
    for(var i = 0;i<bulletArray.length;i++){
        bulletArray[i].move();
        if (parseInt(bulletArray[i].imgNode.style.top)<=-20){
            mainObj.removeChild(bulletArray[i].imgNode);
            bulletArray.splice(i,1);
        }
    }
}


// 碰撞子弹消失
// console.log(124);
function crashCheck(){
    
    for(var i=0;i<smallPlaneArray.length;i++){
        for(var j = 0;j<bulletArray.length;j++){
            console.log(123);
            // 子弹左边
            var btLeft=parseInt(bulletArray[j].imgNode.style.left);
            // 子弹顶部
            var btTop=parseInt(bulletArray[j].imgNode.style.top);
            // 敌机左边
            var djLeft=parseInt(smallPlaneArray[i].imgNode.style.left);
            // 敌机顶部
            var djTop=parseInt(smallPlaneArray[i].imgNode.style.top);
            // console.log(213);
            // console.log(btLeft);
            if (smallPlaneArray[i].isDead==false) {
                if(btLeft>=djLeft&&btLeft<=djLeft+52&&btTop>=djTop&&btTop<=djTop+51){
                    // 销毁子弹
                    bulletArray[j].imgNode.style.top = -10+"px";
                    // mainObj.removeChild(bulletArray[j].imgNode);
                    // bulletArray.slice(j,1);
                    smallPlaneArray[i].imgNode.src="feiji-img/enemy1_down1.gif";
                    smallPlaneArray[i].isDead=true;

                    killNum.innerHTML=parseInt(killNum.innerHTML)+1;
                    killScore.innerHTML=parseInt(killScore.innerHTML)+5;
                }
            }
            
        }
    }
}
