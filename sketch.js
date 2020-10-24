const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

var ground_options

var ball,ball_options

function setup() {
  createCanvas(400,400);
  ground_options = {
  isStatic:true
  }
  ball_options = {
    restitution:1
}
  engine = Engine.create()
  world = engine.world
  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)
  ball = Bodies.circle(200,200,50,ball_options)
  World.add(world,ball)
  //console.log(ground)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  fill("red")
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  fill("red")
  ellipse(ball.position.x,ball.position.y,30,30)
  
  
  drawSprites();
}