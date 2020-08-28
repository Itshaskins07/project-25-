const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,groundObject,dustbinObject;

function preload(){

	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new Ground(600,height-20,1200,50);
	paperObject=new Paper(200,450);

	bottomPart=new Dustbin(width/2,668,200,20);
	
	sideOne=new Dustbin(510,628,20,100);
	
	sideTwo=new Dustbin(690,628,20,100);
	
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);

groundObject.display();
paperObject.display();
bottomPart.display();
sideOne.display();
sideTwo.display();
  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-20});
	console.log("cool");
	}
	
		}
