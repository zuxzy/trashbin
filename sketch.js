
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chimken;
var forceX, forceY;
var bin, binImage;

function preload()
{
	binImage = loadAnimation("dustbingreen.png")
}

function setup() {
	createCanvas(1800, 1700);
	engine = Engine.create();
	world = engine.world;

	blip = new Paper(200, 670, 40, 40);
	blop = new Ground(400, 690, 800, 20);
  boingo1 = new Trash(700, 610, 20, 140);
  boingo2 = new Trash(600, 610, 20, 140);

  blip.scale = 20;

  Engine.run(engine);

  bin = createSprite(650, 600, 50, 50);
  bin.addAnimation("trash", binImage);
  bin.scale = 0.5;
}


function draw() {
  background("white");
  Engine.update(engine);

  blip.display();
  blop.display();
  boingo1.display();
  boingo2.display();

  forceX = chimken;
  forceY = -chimken;


  if (keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(blip.body, blip.body.position, {x:3, y:-10})
  }
  if(!keyDown(UP_ARROW)){
    Matter.Body.applyForce(blip.body, blip.body.position, {x:0, y:1})
  }
  drawSprites();
 
}



