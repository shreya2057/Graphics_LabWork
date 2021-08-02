function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mless(70,70,40);
}

function mless(xc,yc, r){
  x = r;
  y = 0;
  point(x+xc, y+yc);
  pk = 1 - r;
  while(x>y){
    if(pk<0){
      x = x;
      y = y + 1;
      pk = pk + 2*y + 1;
        strokeWeight(2);
        xp = x + xc;
        yp = y +yc ;
        point(xp,yp);
        symmetricPoint(xc, yc, x,y);
    }
    else{
      x = x - 1;
      y = y + 1;
      pk = pk + 2*y -2*x +1 ;
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
