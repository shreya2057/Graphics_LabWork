function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(50,50,40);
}

function circle(xc,yc, r){
  x = 0;
  y = r;
  point(x+xc, y+yc);
  pk = 1 - r;
  while(x<y){
    if(pk<0){
      x = x + 1;
      y = y;
      pk = pk + 2*x + 1;
        strokeWeight(2);
        xp = x + xc;
        yp = y +yc ;
        point(xp,yp);
        symmetricPoint(xc, yc, x,y);
    }
    else{
      x = x + 1;
      y = y - 1;
      pk = pk + 2*x -2*y +1 ;
        strokeWeight(2);
        xp = x + xc;
        yp = y +yc ;
        point(xp,yp);
        symmetricPoint(xc, yc, x,y);
    }
  }
}

function symmetricPoint(xc, yc, x,y){
  point(x+xc, -y+yc);
  point(-x+xc, y+yc);
  point(-x+xc, -y+yc);
  point(y+yc, x+xc);
  point(y+yc, -x+xc);
  point(-y+yc, x+xc);
  point(-y+yc, -x+xc);  
}
