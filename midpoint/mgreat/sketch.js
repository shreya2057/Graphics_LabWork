function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  mgreat(30,50,80,110);
}

function mgreat(x1, y1, x2, y2){
  x = x1;
  y = y1;
  strokeWeight(6);
  point(x, y);
  point(x2,y2);
  dx = x2-x1;
  dy = y2-y1;
  pk = dx-dy/2;
  for(i = 1; i<= dy; i++){
    if(pk<0){
      x = x ;
      y = y + 1;
      pk = pk + dx;
      if(x == x2){
        strokeWeight(6);
        point(x,y);
      }
      else{
        strokeWeight(3);
        point(x,y);
      }
    }
    else{
      x = x + 1;
      y = y + 1;
      pk = pk + dx - dy;
      if(x == x2){
        strokeWeight(6);
        point(x,y);
      }
      else{
        strokeWeight(3);
        point(x,y);
      }
    }
  }
}