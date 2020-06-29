var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
	 World.add(world, ground);
	 groundSprite=createSprite(width/2, 650, width, 10);
	 groundSprite.shapeColor="yellow";
ball=new Paper(100,640,50);
	Engine.run(engine);
	boxLeftBody=new Dustbin(400,600,20,100);
	boxRightBody=new Dustbin(590,620,20,100);
	boxBaseBody=new Dustbin(500,630,200,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  boxLeftBody.display();
  boxRightBody.display();
  boxBaseBody.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



