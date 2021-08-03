function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  dda(20, 100, 40,300);
}

function dda(x1,y1,x2,y2){
  dx = x2-x1;
  dy = y2-y1;
  // console.log(dx);
  if(Math.abs(dx)>Math.abs(dy)){
    stepsize = Math.abs(dx);
  }else{
    stepsize = Math.abs(dy);
  }
    console.log(stepsize);
    xi = dx/stepsize;
    yi = dy/stepsize;
    strokeWeight(6);
    point(x1, y1);
    for(var i=0; i<stepsize; i++){
      x1 = x1+xi;
      y1 = y1+yi;
      if(i == stepsize-1){
        strokeWeight(6);
        point(x1, y1);
      }
      else{
        strokeWeight(3);
        point(x1, y1);
      }
    }
}