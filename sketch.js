var rect1, rect2;
var speed, weight, deformation;
function setup() {
  createCanvas(1600,400);
  rect1=createSprite(1500, 200, 60, height/2);
  rect2=createSprite(200,200,25,25);
  rect1.shapeColor="black";
  rect2.shapeColor="white";
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  deformation=(0.5*weight*speed*speed)/22500;

}

function draw() {
  background(255,255,255);
  rect2.velocityX=speed;
  collisionDetection();
  drawSprites();
}
function collisionDetection(){
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2&&rect1.y-rect2.y<rect1.height/2+rect2.height/2){
    rect2.velocityX=0;
    if(deformation<=100){
    rect2.shapeColor="green";
    }
    else if(deformation>100&&deformation<=180){
    rect2.shapeColor="yellow";
    }
    else if(deformation>180){
      rect2.shapeColor="red";
    }
  }
  else{
    rect2.shapeColor="white";
}
}