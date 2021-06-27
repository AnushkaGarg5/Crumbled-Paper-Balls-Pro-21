
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ballOptions  = {isStatic : false ,
		restitution : 0.3 ,
		friction : 0,
		density : 1.2
	}
	
	ball = Bodies.circle(100,20,15 , ballOptions)
	World.add(world , ball)

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground (width/2,650,width,15)
	leftSide = new Ground (width-400 ,593 ,15,100 )
    rightSide = new Ground (width-200 ,593,15,100 )
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("0")
  ellipse(ball.position.x , ball.position.y , 30)
  push()
  fill("green")
  ground.display()
  leftSide.display()
  rightSide.display()
  pop()

  keyPressed()
  drawSprites();
  
 
}

function keyPressed(){
   if (keyDown (UP_ARROW)){
	   Matter.Body.applyForce(ball , { x : 0 , y: 0} , { x : 2, y: -5} )
   } 

}
