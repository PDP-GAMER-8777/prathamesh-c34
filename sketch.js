const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint

function preload() {
backgroundImages = loadImages("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
engine = Engine.create();
World = engine.world; 

//create the Bodies here
Ground = new Ground (200,400,600,5)
superhero = new superhero(400,3,100,100)
Throw = new Throw(superhero.body{x:100,y:100});
Block1 = new Block(210,350,30,40);
Block2 = new Block(310,350,30,40);
Block3 = new Block(340,350,30,40);
Block4 = new Block(370,350,30,40);
Block5 = new Block(400,350,30,40);
Block6 = new Block(430,350,30,40);
Block7 = new Block(460,350,30,40);
Block8 = new Block(490,350,30,40);
Block9 = new Block(310,315,30,40);
Block10 = new Block(340315,30,40);
Block11 = new Block(370315,30,40);
Block12 = new Block(400,315,30,40);
Block12 = new Block(430,315,30,40);

}

function draw() {
  background(0);

}
