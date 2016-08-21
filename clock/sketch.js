var secRadius;
var minRadius;
var hourRadius;
var clockDiameter;
var x, y;

function setup() {
  createCanvas(600,400);
  
  x=width/2;
  y=height/2;
  
  var radius = min(width,height)/2;
  secRadius = radius*.72;
  minRadius = radius*.6;
  hourRadius = radius*.5; 
  clockDiameter = radius*1.8;
  
  
}

function draw() {
  background(0,255,255);
  
  //clock border
  //fill(0,0,150);
  //ellipse(width/2,height/2,diameter+50,diameter+50);
  
  // clock
  fill(192);
  noStroke();
  ellipse(x,y,clockDiameter,clockDiameter);
  
  //angles
  var s = map(second(),0,60,0,TWO_PI)-HALF_PI;
  var m = map(minute(),0,60,0,TWO_PI)-HALF_PI;
  var h = map(hour()%12,0,12,0,TWO_PI)-HALF_PI;
  
  //hands of clock
  stroke(0,255,255);
  strokeWeight(1);
  line(x,y,x+cos(s)*secRadius,y+sin(s)*secRadius);
  strokeWeight(2);
  line(x,y,x+cos(m)*minRadius,y+sin(m)*minRadius);
  strokeWeight(4);
  line(x,y,x+cos(h)*hourRadius,y+sin(h)*hourRadius);
  
  //ticks on clock
  stroke(0,255,255);
  for(var i=0;i<360;i+=6){
    var angle = radians(i);
    var a = x+cos(angle)*secRadius;
    var b = y+sin(angle)*secRadius;
    if(i%30 === 0) strokeWeight(7);
    else strokeWeight(3);
    point(a,b);
  }
  
}
