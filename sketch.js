var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(1000,800,50,50);
  car.shapeColor="yellow"
  car.velocityY=-4;
  wall=createSprite(1000,200,10,200);
  wall.shapeColor="blue"
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
Bounceoff(car,wall);


  
  drawSprites();
}

