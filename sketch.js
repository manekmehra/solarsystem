function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var p1
  var p2
  var p3
  var sun
  this.sun = rectangle(400,200,1+world.framecount,1+word.framecount)
 }

function draw() {
  background(255,255,255);  
  p1  = new Planet
  p2 = new Planet
  p3 = new Planet
  if (sun.isTouching("planet1")){
    planet1.visibility=False
  }
  if (sun.isTouching("planet2")){
    planet2.visibility=False
  }
  if (sun.isTouching("planet3")){
    planet3.visibility=False
  }
  
  drawSprites();
}