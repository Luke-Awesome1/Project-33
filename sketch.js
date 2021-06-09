const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var bg ;
var particles = []; 
var particles2 = [];
var boy1,boyimg;
var ground;
var edges;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  boyimg = loadImage("boy.png");

  boy1 = createSprite(950,200,10,10);
  boy1.scale = 0.6;
  boy1.addImage(boyimg);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);

    //ground = createSprite(400,380,800,10);

    if (frameCount%2===0) {
      particles.push(new Particle(random(width/width,width),-20,40));
    }
  
    if (frameCount%2===0) {
      particles2.push(new Particle(random(width/width,width),-20,30));
    }
  
    if (frameCount%80===0) {
      particles = [];
    }
  
    if (frameCount%50===0) {
      particles2 = [];
    }
    
      //display the particles
    for (var f = 0; f < particles.length; f++) {
        particles[f].display();
    }

    if (keyDown("space") ) {
      boy1.velocityY = -10;
    }

    boy1.velocityY = boy1.velocityY + 0.8
  
    //boy1.display();

    drawSprites();
    edges = createEdgeSprites();
    boy1.collide(edges[3]);

        //display the particles
      for (var g = 0; g < particles2.length; g++) {
         particles2[g].display();
      }
      
  }



  Engine.update(engine);
}

async function getBackgroundImg(){ 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  //var hour1 = datetime.slice(11,16);
  //Time = hour1;


  if(hour>=04 && hour<12){
      bg = "snow1.jpg";
  }
  else if (hour>=12 && hour<20){
      bg = "snow2.jpg";
  }
  else if (hour>=20 && hour<4){
      bg = "snow3.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}