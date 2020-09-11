var fixedRect, movingRect;
var crate1,crate2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  crate1 =createSprite(100,150,80,40);
  crate1.shapeColor="yellow";
  crate2 =createSprite(120,250,80,40);
  crate2.shapeColor="yellow";


  movingRect.debug = true;

  crate1.velocityY = +2;
  crate2.velocityY = -2;
}

function draw() {
  background(0,0,0);  

  bounceOff(crate1,crate2);  
  
  drawSprites();
}













