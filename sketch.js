
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground1,ground2;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var rotator1,rotator2,rotator3;
var plane;
function preload()
{
	
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var plane_options ={
    isStatic:true,
  }
  plane = Bodies.rectangle(400,390,150,10,plane_options);
  World.add(world,plane);
  
  ground1 = Bodies.rectangle(70,250,100,20,plane_options);
  World.add(world,ground1);
  ground2 = Bodies.rectangle(330,250,100,20,plane_options);
  World.add(world,ground2);

	//Crie os Corpos aqui.


	Engine.run(engine);
  

   var rotator_options ={
     isStatic: true
   };

   var ground_options ={
     isStatic: true
   };
   var particle_options ={
    restituition:0.4,
    friction:0.2
   }
   fill("red");
   particle1 = Bodies.circle(220,10,10,particle_options);
   World.add(world,particle1);

   particle2 = Bodies.circle(220,10,10,particle_options);
   World.add(world,particle2);

   particle3 = Bodies.circle(220,10,10,particle_options);
   World.add(world,particle3);

   particle4 = Bodies.circle(220,10,10,particle_options);
   World.add(world,particle4);

   particle5 = Bodies.circle(220,10,10,particle_options);
   World.add(world,particle5);
   
   rotator1 = Bodies.rectangle(200,150,150,20,rotator_options);
   World.add(world,rotator1);
    rotator2 = Bodies.rectangle(200,150,150,20,rotator_options);
   World.add(world,rotator2);
    rotator3 = Bodies.rectangle(200,150,150,20,rotator_options);
   World.add(world,rotator3);





 rectMode(CENTER);
 ellipseMode(RADIUS);
  }
function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  ellipse(particle1.position.x,
    particle1.position.y,10)

  ellipse(particle2.position.x,
    particle2.position.y,10)

  ellipse(particle3.position.x,
    particle3.position.y,10)

  ellipse(particle4.position.x,
    particle4.position.y,10)

  ellipse(particle5.position.x,
    particle5.position.y,10)

    fill("black");
 rect(plane.position.x,plane.position.y,1000,10);   
 rect(ground1.position.x,ground1.position.y,100,20);
 rect(ground2.position.x,ground2.position.y,100,20);
  Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,120,20);
  pop();
  angle1+=15;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,120,20);
  pop();
  angle2+=10;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,120,20);
  pop();
  angle3+=13;
  drawSprites();

  
 
}



