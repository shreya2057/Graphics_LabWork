function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  check(40,70,190,135);
  check(40,60,130,120);
}

function check(x1, y1, x2, y2){
  dx = x2-x1;
  dy = y2-y1;
  if(dx>dy){
    mless(x1, y1, x2, y2);
  }else{
    mgreat(x1, y1, x2, y2);
  }
}

function mless(x1, y1, x2, y2){
  x = x1;
  y = y1;
  strokeWeight(6);
  point(x, y);
  point(x2,y2);
  dx = x2-x1;
  dy = y2-y1;
  pk = 2*dy-dx;
  for(i = 0; i< dx; i++){
    if(pk<0){
      x = x + 1;
      y = y;
      pk = pk + 2*dy;
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
      pk = pk + 2*dy -2*dx;
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


function mgreat(x1, y1, x2, y2){
  x = x1;
  y = y1;
  strokeWeight(6);
  point(x, y);
  point(x2,y2);
  dx = x2-x1;
  dy = y2-y1;
  pk = 2*dx-dy;
  for(i = 1; i<= dy; i++){
    if(pk<0){
      x = x ;
      y = y + 1;
      pk = pk + 2*dx;
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
      pk = pk + 2*dx -2*dy;
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