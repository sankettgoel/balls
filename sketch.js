const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,block,egg ;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    var block_options=
    {
        restitution:2.0
    }
     
    block= Bodies.rectangle(100,100,50,50,block_options);
    World.add(world,block);
    
   var egg_options=
   {
       isStatic: false
   }

   egg= Bodies.circle(300,300,50,egg_options);
   World.add(world,egg);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect (block.position.x,block.position.y,50,50);

    ellipseMode(RADIUS);
    ellipse(egg.position.x,egg.position.y,50,50);


}