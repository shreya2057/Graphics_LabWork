function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  region1(200,200,150,80);
}

function region1(xc,yc, rx,ry){
  x = 0;
  y = ry;
  point(x+xc, y+yc);
  p1k = Math.pow(ry,2)-Math.pow(rx,2)*ry+(1/4)*Math.pow(rx,2);
  while(2*Math.pow(ry,2)*x<2*Math.pow(rx,2)*y){
    if(p1k<0){
      x = x + 1;
      y = y;
      p1k = p1k + 2*Math.pow(ry,2)*x + Math.pow(ry,2);
      strokeWeight(2);
      xp = x + xc;
      yp = y +yc ;
      point(xp,yp);
      symmetricPoint(xc, yc, x,y);
    }
    else{
      x = x + 1;
      y = y - 1;
      p1k = p1k + 2*Math.pow(ry,2)*x -2*Math.pow(rx,2)*y + Math.pow(ry,2) ;
      strokeWeight(2);
      xp = x + xc;
      yp = y +yc ;
      point(xp,yp);
      symmetricPoint(xc, yc, x,y);
    }
  }
  region2(x,y,rx, ry, xc, yc);
}

function region2(x,y, rx, ry, xc, yc){
  point(x+xc, y+yc);
  rx2 = Math.pow(rx,2);
  ry2 = Math.pow(ry,2);
  p2k = ry2*Math.pow((x+(1/2)),2) + rx2*Math.pow((y-1),2) - rx2*ry2;
  while(y!=0){
    if(p2k<0){
      x = x + 1;
      y = y - 1;
      p2k = p2k - 2*rx2*y + 2*ry2*x + rx2;
      strokeWeight(2);
      xp = x + xc;
      yp = y +yc ;
      point(xp,yp);
      symmetricPoint(xc, yc, x,y);
    }
    else{
      x = x;
      y = y - 1;
      p2k = p2k - 2*rx2*y + rx2;
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
}
