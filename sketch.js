const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var ground_option;

var ball, ball_option;


function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;



ground_option = {
  isStatic : true
}
ball_option = {
  restitution: 1
}
ground= Bodies.rectangle(200,390,50,50,ground_option);
ball= Bodies.circle(200,200,10,ball_option);
this.radius = 10;

World.add(world,ground);
World.add(world,ball);
console.log(ball);

}


function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,10);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10);


//drawSprites();

}