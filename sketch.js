var fixedRect, movingRect;

function setup()
{
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor='green';
}
function draw()
{
  background("lightblue");
  console.log(movingRect.y-fixedRect.y);
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.width/2 + movingRect.width/2
    && movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2)
  {
    movingRect.shapeColor='red';
    fixedRect.shapeColor='red';
  }
  else
  {
    movingRect.shapeColor='green';
    fixedRect.shapeColor='green';
  }
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}