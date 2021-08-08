const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine,world;

var bg_img;
var cat,cat_img1, cat_img2;
var snow = []

function preload()
{
  bg_img= loadImage("snow2.jpg")
  cat_img1= loadAnimation("tomThree.png","tomTwo.png")
  cat_img2= loadAnimation("tomOne.png")
}


function setup() {
  createCanvas(800,400);

  engine= Engine.create()
  world= engine.world;
  cat = createSprite(650,350)
  cat.addAnimation("cat stting", cat_img2)
  cat.scale = 0.1
 imageMode(CENTER)
}

function draw() {
 /* background(bg_img);*/
 Engine.update(engine);
 image(bg_img,400,200,800,400);
 snow.push(new Snow(random(100,800),0))
 for(var i = 0;i<snow.length;i++ )
 {
   snow[i].display();
   
 }
  drawSprites();

}
function keyPressed()
{
  if(keyCode===LEFT_ARROW)
  {
     cat.velocityX = -2;
     cat.addAnimation("cat running",cat_img1);
     cat.changeAnimation("cat running")
  }
}

