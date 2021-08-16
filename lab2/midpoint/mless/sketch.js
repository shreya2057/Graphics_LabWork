function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  mless(30,50,100,115);
}

function mless(x1, y1, x2, y2){
  x = x1;
  y = y1;
  strokeWeight(6);
  point(x, y);
  point(x2,y2);
  dx = x2-x1;
  dy = y2-y1;
  pk = dy-dx/2;
  for(i = 0; i< dx; i++){
    if(pk<0){
      x = x + 1;
      y = y;
      pk = pk + dy;
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
      pk = pk + dy - dx;
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