function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('white');
  
  flagOutline();
  star(100, 310, 30, 45, 12);
  
  moon(90,140);
  star(90, 150, 15, 20, 18);
}

function star(x, y, radius1, radius2, n) {
  fill('white');
  strokeWeight(0);
  let angle = TWO_PI / n;
  let halfAngle = angle/2;
  beginShape();
  for (let i = 0; i < TWO_PI; i += angle) {
    let sx = x + cos(i) * radius2;
    let sy = y + sin(i) * radius2;
    vertex(sx, sy);
    sx = x + cos(i + halfAngle) * radius1;
    sy = y + sin(i + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function flagOutline(){
  fill(190,0,0);
  strokeCap(PROJECT);
  strokeWeight(10);
  beginShape();
  stroke(color(0, 0, 255));
  vertex(10,400);
  vertex(10,10);
  vertex(300,200);
  vertex(100,200);
  vertex(300,400);
  vertex(10,400);
  endShape();
}

function moon(x,y){
  ellipse(x,y,70,60);
  noStroke();
  noFill();
  fill(190,0,0);
  noStroke();
  ellipse(x,y-15,70,60);
}
