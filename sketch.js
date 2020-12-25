
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var Ground,Stone,Tree,Boy;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9,Mango10,Mango11;
var Slingshot,launcherObject;
function preload()
{
	
}

function setup() {
	createCanvas(1535, 718);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Ground =new ground(100,705,3500,15);
  Stone =new stone(200,530,20);
  Tree =new tree(1525,0,3000,50);
  Boy =new boy(0,0,0,1394);
  Mango1 =new mango(1000,260,20);
  Mango2 =new mango(1100,230,20);
  Mango3 =new mango(1200,270,20);
  Mango4 =new mango(1300,290,20);
  Mango5 =new mango(1400,210,20);
  Mango6 =new mango(1400,295,20);
  Mango7 =new mango(1100,315,20);
  Mango8 =new mango(1300,200,20);
  Mango9 =new mango(1200,160,20);
  Mango10 =new mango(1483,295,20);
  Mango11 =new mango(1285,130,20);
  Slingshot =new slingShot(Stone.body,{x:200,y:542});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  Ground.display();
  Boy.display();
  Tree.display();
  Stone.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  Mango11.display();
  Slingshot.display();

  detectcollision(Stone,Mango1);
  detectcollision(Stone,Mango2);
  detectcollision(Stone,Mango3);
  detectcollision(Stone,Mango4);
  detectcollision(Stone,Mango5);
  detectcollision(Stone,Mango6);
  detectcollision(Stone,Mango7);
  detectcollision(Stone,Mango8);
  detectcollision(Stone,Mango9);
  detectcollision(Stone,Mango10);
  detectcollision(Stone,Mango11);
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
Slingshot.fly();
}

function detectcollision(lstone,lmango){
mangoBodyposition =lmango.body.position
stoneBodyposition =lstone.body.position

var distance=dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
 }
}

function keyPressed(){
if(keyCode===32){
  Matter.Body.setPosition(Stone.body,{x:200,y:542})
  launcherObject.attach(Stone.body);
}
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Stone.body,Stone.body.position,{x:-200,y:-200});
  }
}