
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ball1, ball2, ball3, ball4, roof;
var rope1, rope2, rope3,rope4, rope5;



function setup() {
	createCanvas(1270, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Bob (635, 345, 60);
	ball1 = new Bob (565, 345, 60);
	ball2 = new Bob (705, 345, 60);
	ball3 = new Bob (775, 345, 60);
	ball4 = new Bob (495, 345, 60);
	roof = new Roof (630, 20, 450, 10);

	rope1 = new Rope (ball.body, roof.body, -ball*2, 0);
	rope2 = new Rope (ball1.body, roof.body, -ball1*2, 0);
	rope3 = new Rope (ball2.body, roof.body, -ball2*2, 0);
	rope4 = new Rope (ball3.body, roof.body, -ball3*2, 0);
	rope5 = new Rope (ball4.body, roof.body, -ball4*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(169, 169, 169);
  Engine.update(engine);

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



