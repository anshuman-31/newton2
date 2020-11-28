const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Mouseconstraints = Matter.Mouseconstraints

var engine,world;
var bob1,bob2,bob3,bob4;
var sling1,sling2,sling3,sling4,sling5;
var pendulum;


function setup(){
    createCanvas(3000,400)



}
function draw(){
 background("black")
 Engine.update(engine);
 World.update(world);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 sling1.display();
 sling2.display();
 sling3.display(); 
 sling4.display();
 sling5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY})

}