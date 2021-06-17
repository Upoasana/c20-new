var bg,sleep,brush,gym, eat , drink,move,bath;
var astronaut;
var edges;

function preload()
{
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym =  loadAnimation("gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("gym11.png","gym12.png");
bath = loadAnimation("bath1.png","bath2.png")

}


function setup() {
  createCanvas(850,450);
 astronaut= createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=.1;

 //edges=createEdgeSptrites(edges[3]);


}

function draw() {
  background(bg);
  textSize(20)
 fill("black")
  text ("Up->Brushing."+" "+"Down->Gyming."+"  "+"Left->Eating."+"  "+"Right->Drinking"+" "+"m->move",100,20)  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  //createEdgeSptrites();

 // astronaut.bounceOff(edges);
  if(keyDown("UP_ARROW"))
{
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing",brush);
astronaut.velocityX=0;
astronaut.velocityY=0;
astronaut.y=315;
}

if(keyDown("LEFT_ARROW"))
{
astronaut.addAnimation("eating",eat);
astronaut.changeAnimation("eating",eat);
astronaut.velocityX=-3;
astronaut.velocityY=3;
astronaut.y=300;
}

if(keyDown("RIGHT_ARROW"))
{
astronaut.addAnimation("drinking",drink);
astronaut.changeAnimation("drinking",drink);
astronaut.velocityX=3;
astronaut.velocityY=3;
astronaut.y=300;
}

if(keyDown("Down_ARROW"))
{
astronaut.addAnimation("gyming",gym);
astronaut.changeAnimation("gyming",gym);
astronaut.velocityX=0;
astronaut.velocityY=0;
astronaut.y=300;
}
if(keyDown("b"))
{
astronaut.addAnimation("bathing",bath);
astronaut.changeAnimation("bathing",bath);
astronaut.velocityX=0;
astronaut.velocityY=0;
astronaut.y=300;
}

if(keyDown("g"))
{
astronaut.addAnimation("moving",move);
astronaut.changeAnimation("moving",move);
astronaut.velocityX=3;
astronaut.velocityY=3;
astronaut.y=300;
}
  drawSprites();
}