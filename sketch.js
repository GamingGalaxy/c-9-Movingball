var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30)
  ball.shapeColor="blue"
}


function draw() 
{
  background(30);
  if(keyDown("down")){
    ball.y+=3
  }
  if(keyDown("up")){
    ball.y-=3
  }
  if(keyDown("right")){
    ball.x+=3
  }
  if(keyDown("left")){
    ball.x-=3
  }
  drawSprites()


}




