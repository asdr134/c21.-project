
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine;
var world;
var wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2


		
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100, 350,20, ball_options) 
	World.add(world,ball)

ground = new Ground(750,695,1600,25)
	Engine.run(engine);
wall1 = new Ground(1000,635,15,100)
wall2 = new Ground(1250,635,15,100)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  wall1.display()
  wall2.display()
  fill("white")
  ellipse(ball.position.x,ball.position.y,ball.position.width)
  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:70,y:80})
	}
}



