let angleWag;
let mic;
let micLevel;
let angleMouth = 0;

function setup(){
  
  mic = new p5.AudioIn()
  mic.start();

}

function draw() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  micLevel = mic.getLevel();
  angleWag = map(mic.getLevel(), 0, .1, 345, 369);
  background(220);
  drawBall(angleMouth);
  drawFace();
  drawHead();
  drawAten(angleWag);
  drawMouth(40);
  drawEyes();
  
}


function mousePressed(){
console.log("mouse beep in here");  
      angleMouth += 2
}

function drawBall(angle){
  push()
  rotate(angle)
  fill(101, 88, 219)
  circle(width * .4, height * .05, width * .4,height * .3)
  pop()
}

function drawFace() {
  
    stroke('blue')
  strokeWeight(4)
   beginShape(TRIANGLE_STRIP);
    fill(0)
  vertex(width *.10,height *.75);
  vertex(width *.30,height *.20);
  vertex(width *.30,height *.75);
  vertex(width *.70,height *.20);
  vertex(width *.80,height *.75);
  vertex(width *.70,height *.20);
  vertex(width *.90,height *.75);
  endShape();
}
function drawAten(angle){
  //line(x1, y1, x2, y2)
  push();
  rotate(angle);
  stroke('blue')
  strokeWeight(4)
  line(200,100,200,150)
  line(180,100,220,100)
  pop();
}
function drawHead(){
  //rect(x,y,w,h)
  stroke('blue')
  strokeWeight(4)
  fill('rgb(0,255,0)')
  rect(100,150,200,200)
}
function drawMouth(mouthOpen){
  fill('#222222')
  rect(130,280,120,mouthOpen)
}
function drawEyes(){
  //ellipes(x,y,w,h)
  fill('rgba(0,255,0, 0.25)')
  ellipse(150,200,50,50)
  fill('#222222')
  ellipse(150,200,20,20)
  
  fill('rgba(0,255,0, 0.25)')
  ellipse(250,200,50,50)
  fill('#222222')
  ellipse(250,200,20,20)
}