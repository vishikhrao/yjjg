var helicopter,helicopterImg;
var bg,bgImg;

function preload(){
  helicopterImg=loadAnimation("assets/helicopter.gif");
  bgImg=loadImage("assets/background.png");
}
function setup() {
  createCanvas(800,400);
  bg=createSprite(800,200,200,200);
  bg.addImage("abcd",bgImg);
  bg.scale=2.5;
  bg.velocityX=-1;
  bg.x=bg.width/2;
  
  //creating helicopter
 helicopter=createSprite(150, 200, 50, 50);
 helicopter.addAnimation("abc",helicopterImg);
 helicopter.scale=0.7;
}

function draw() {
  background("aqua");  
  text(mouseX+","+mouseY,mouseX,mouseY);
  if(bg.x<0){
 // bg.x=400;
  bg.x=bg.width/2;

  }
  drawSprites();
}