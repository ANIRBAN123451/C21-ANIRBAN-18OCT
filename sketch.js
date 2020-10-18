var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  rect1 = createSprite(100, 200, 50, 80);
  rect1.shapeColor = "green";
  rect2 = createSprite(300, 100, 50, 80);
  rect2.shapeColor = "blue";
  rect2.velocityY=4;
  rect3 = createSprite(300, 600, 50, 80);
  rect3.shapeColor = "blue";
  rect3.velocityY=-4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(touching(movingRect,rect1)){
    movingRect.shapeColor = "yellow";
    rect1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  bouncing(rect2,rect3);
  drawSprites();
}
