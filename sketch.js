const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


var ground;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 5; k<=width; k+=78){
    divisions.push(new Division(k , height-divisionHeight/2 , 10 , divisionHeight));
  }

  for(var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j,375));
  }

  ground = new Ground(width/2, 790, width, 20);


  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  for(var a = 0; a < divisions.length; a++){
    divisions[a].display();
  }
  for(var b = 0; b < plinkos.length; b++){
    plinkos[b].display();
  }
  spawn();
  for(var c = 0; c < particles.length; c++){
    particles[c].display();
  }
}

function spawn(){
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
}