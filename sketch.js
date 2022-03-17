var backGround1,backGround2,backGround3,backGround4;
var Jack,Jill;
gameState="Start"
function preload(){

HallWayImage1 = loadImage("Images/Hallway_1.png")
jackImg = loadImage("Images/ManStanding.png")
jackAnima = loadAnimation("Images/man_running1.png","Images/man_running2.png","Images/man_running3.png","Images/man_running4.png","Images/man_running5.png")
fireImg = loadAnimation("Images/Fire_1.png","Images/Fire_2.png","Images/Fire_3.png",)
}

function setup() {
  createCanvas(800,400);
 
  backGround1=createSprite(400,200,canvas.width,canvas.height)
backGround1.addImage(HallWayImage1)
backGround1.scale=1.3
//backGround1.debug=true



backGround3=createSprite(2020,200,canvas.width,canvas.height)
backGround3.addImage(HallWayImage1)
backGround3.scale=1.3
//backGround3.debug=true

base = createSprite(400,340,1000,100)
base.visible=false

Jack = createSprite(200,288,20,20)
Jack.addAnimation("JackStanding",jackImg)
Jack.scale=1.8
Jack.velocityY=3
}

function draw() {
  background(255,255,255);  

if(backGround3.x===400){

  backGround1.x=1210;
 
}
if(Jack.y>270 && keyDown("SPACE")){
Jack.velocityY=-15
}
Jack.velocityY=Jack.velocityY+0.5
if(backGround1.x===400){
  backGround3.x=1210;
  
}
//Jack.debug=true
Jack.setCollider("rectangle",0,0,30,20)
//console.log(Jack.y)
Jack.collide(base)

if(backGround1.velocityX===-3){
  base.y=326
}  

  if(keyDown("RIGHT")){
    gameState="Play"
    running();
  }
  createFire();
  drawSprites();
  text("Press Right arrow to Start",40,40)
  text("Press Spacebar To Jump",600,40)

}
function running(){

  Jack.addAnimation("JackStanding",jackAnima)
 Jack.scale=0.4
 
  backGround1.velocityX=-3


  backGround3.velocityX=-3
  //backGround4.velocityX=-3
 

}
function createFire(){
  if(backGround1.velocityX===-3 && frameCount%110===0){
    fire = createSprite(1020,350,20,20);
    fire.velocityX=-3
fire.addAnimation("firImage",fireImg)
  }
 
}