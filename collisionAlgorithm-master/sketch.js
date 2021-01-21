var fixedRect, movingRect;
var a, b, c, d;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -3;
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a = createSprite(100, 200, 50, 50);
  a.shapeColor = "green";
 a.velocityX = 3;
  b = createSprite(200, 100, 50, 50);
  b.shapeColor = "green";
  c = createSprite(300, 100, 50, 50);
  c.shapeColor = "green";
  d = createSprite(400, 100, 50, 50);
  d.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
 if (Istouching(b, movingRect)){
  movingRect.shapeColor = "red";
  b.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
 b.shapeColor = "green";
}
 


bounceOff(a, fixedRect);
  drawSprites();
}

function Istouching(object1, object2){
 
 
  if (object1.x -  object2.x <  object2.width/2 + object1.width/2
    &&  object2.x - object1.x <  object2.width/2 + object1.width/2
    && object1.y -  object2.y <  object2.height/2 + object1.height/2
    && object2.y - object1.y <  object2.height/2 + object1.height/2) {
 
      return true;
}
else {
 return false;
}
}

function bounceOff(object1, object2){

  if (object1.x -  object2.x <  object2.width/2 + object1.width/2
    &&  object2.x - object1.x <  object2.width/2 + object1.width/2
  ){

     object1.velocityX = object1.velocityX*(-1);
     object2.velocityX = object2.velocityX*(-1);
}

if(object1.y -  object2.y <  object2.height/2 + object1.height/2
  && object2.y - object1.y <  object2.height/2 + object1.height/2){

    object1.velocityY = object1.velocityY*(-1);
     object2.velocityY = object2.velocityY*(-1);
  }

}