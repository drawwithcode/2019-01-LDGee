var moveX1 = 20;
var moveX2 = 1420;
var moveY1 = -220;
var moveY2 = 1010;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode (DEGREES);
  frameRate (60);

}


function draw() {

  background(0);
  strokeWeight(0.08);
  moveX1 = moveX1 + 1;
  moveX2 = moveX2 - 1;
  moveY1 = moveY1 + 1;
  moveY2 = moveY2 - 1;



  //LEFT
  push();
  //if you want it centered
  translate(moveX1, height/2);
  //if you want to move it yourself
     //translate(mouseX-250,mouseY);
  scale(4,5);
  noFill();
  stroke(lerpColor(color(50), color('tomato'), frameCount/360));
  for (var a = 0; a <= 360; a ++) {
    if (a<=frameCount*1){
      line (50*cos(a*1), -50*sin(a*2),50,0)}
    }
    if(frameCount == 360) {
      noLoop();}
  pop();


  //RIGHT
  push();
  //if you want it centered
  translate(moveX2, height/2);
  //if you want to move it yourself
     //translate(mouseX+250,mouseY);
  rotate(180);
  scale(4,5);
  noFill();
  stroke(lerpColor(color(50), color('tomato'), frameCount/360));
  for (var a = 0; a <= 360; a ++) {
    if (a<=frameCount*1){
      line (50*cos(a*1), -50*sin(a*2),50,0)}
    }
    if(frameCount == 360) {
      noLoop();}
  pop();



  //DOWN
  push();
  //if you want it centered
  translate(width/2, moveY2);
  //if you want to move it yourself
     //translate(mouseX,mouseY+250);
  rotate(270);
  scale(4,5);
  noFill();
  stroke(lerpColor(color(50), color('cyan'), frameCount/360));
  for (var a = 0; a <= 360; a ++) {
    if (a<=frameCount*1){
      line (30*cos(a*1), -50*sin(a*2),50,0)}
    }
    if(frameCount == 360) {
      noLoop();}
  pop();





    //UP
    push();
    //if you want it centered
    translate(width/2, moveY1);
    //if you want to move it yourself
       //translate(mouseX,mouseY-250);
    rotate(90);
    scale(4,5);
    noFill();
    stroke(lerpColor(color(50), color('cyan'), frameCount/360));
    for (var a = 0; a <= 360; a ++) {
      if (a<=frameCount*1){
        line (30*cos(a*1), -50*sin(a*2),50,0)}
      }
      if(frameCount == 360) {
        noLoop();}
    pop();



  //DOT
  push();
  //if you want it centered
  translate(width/2,height/2);
  //if you want to move it yourself
     //translate(mouseX,mouseY);
  ellipseMode(CENTER)
  noFill();
  strokeWeight(0.5);
  stroke (lerpColor(color('black'), color('tomato'), frameCount/360));

  //here i have to find a way to make it progressive in order to not draw every ellipse
  ellipse(0,0,90);
  ellipse(0,0,75);
  ellipse(0,0,60);
  ellipse(0,0,45);
  ellipse(0,0,30);
  ellipse(0,0,15);
  ellipse(0,0,1);
  ellipse(0,0,700);
  ellipse(0,0,720);
  ellipse(0,0,740);

  pop();



  //LEFT CIRCLE
  push();
  //if you want it centered
  translate(width/2-500, height/2);
  //if you want to move it yourself
     //translate(mouseX-500,mouseY);
  rotate(0);
  scale(3);
  noFill();
  stroke(lerpColor(color(50), color('cyan'), frameCount/360));
  for (var a = 0; a <= 360; a ++) {
    if (a<=frameCount*1){
      line (65*cos(a*4), -50*sin(a*4),50,0)}
    }
    if(frameCount == 360) {
      noLoop();}
  pop();


  //RIGHT CIRCLE
  push();
  //if you want it centered
  translate(width/2+500, height/2);
  //if you want to move it yourself
     //translate(mouseX+500,mouseY);
  rotate(180);
  scale(3);
  noFill();
  stroke(lerpColor(color(50), color('cyan'), frameCount/360));
  for (var a = 0; a <= 360; a ++) {
    if (a<=frameCount*1){
      line (65*cos(a*4), -50*sin(a*4),50,0)}
    }
    if(frameCount == 360) {
      noLoop();}
  pop();


}
