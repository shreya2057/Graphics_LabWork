function setup() {
  createCanvas(400, 400);
}

//defining window size
ywmax = 250;
ywmin = 100;
xwmin = 100;
xwmax = 300;

function draw() {
  background(220);
  strokeWeight(0);
  text("Red line: Initial line", 250,350);
  text("Green line: Clipped line", 250,370);

  a1 = xwmin;
  a2 = ywmin;
  b1 = xwmin;
  b2 = ywmax;
  c1 = xwmax;
  c2 = ywmax;
  d1 = xwmax;
  d2 = ywmin;
  
  //drawing window
  drawWindow(a1,a2,b1,b2,c1,c2,d1,d2);

   // endpoints for line 1
   x1 = 200;
   y1 = 40;
   x2 = 20; 
   y2 = 40;
   initialLine(x1,y1,x2,y2);
   //cliping line
   clipLine(x1,y1,x2,y2);

  //endpoints for line 2
  x1 = 350;
  y1 = 100;
  x2 = 30; 
  y2 = 270;
  initialLine(x1,y1,x2,y2);
  //cliping line
  clipLine(x1,y1,x2,y2);

  //endpoints for line 3
  x1 = 320;
  y1 = 200;
  x2 = 200; 
  y2 = 240;
  initialLine(x1,y1,x2,y2);
  clipLine(x1,y1,x2,y2);
}

function drawWindow(a1,a2,b1,b2,c1,c2,d1,d2){
  strokeWeight(2);
  stroke('black');
  beginShape();
  vertex(a1,a2);
  vertex(b1,b2);
  vertex(c1,c2);
  vertex(d1,d2);
  vertex(a1,a2);
  endShape();
}

function initialLine(x1,y1,x2,y2){
  strokeWeight(1);
  stroke('red');
  line(x1,y1,x2,y2);
}


function clipLine(x1,y1,x2,y2){
  dx = x2-x1;
  dy = y2-y1;

  p = new Array(0);
  q = new Array(0);
  //calculating pk and qk for k =1,2,3,4
  //for k=1
  p1 = -dx;
  q1 = x1 - xwmin;

  //for k=2
  p2 = dx;
  q2 = xwmax - x1;

  //for k=3
  p3 = -dy;
  q3 = y1 - ywmin;

  //for k=4
  p4 = dy;
  q4 = ywmax - y1;

  p.push(p1,p2,p3,p4);
  q.push(q1,q2,q3,q4);

  r = new Array(0);
  u1k = new Array(0);
  u2k = new Array(0);
  var u1;
  var u2; 
  for(k = 0; k<4; k++){
    if(p[k]==0 && q[k]<0){
      console.log("The line is rejected");
      return 0;
    }
    else{
      console.log("The line might lie inside");
      if (p[k]<0){
        r[k] = q[k]/p[k];
        u1k.push(r[k]);
      }
      else{
        r[k] = q[k]/p[k];
        u2k.push(r[k]);
      }
    }
  }

  u1k.push(0);
  u2k.push(1);
  u1 = max(u1k);
  u2 = min(u2k);

  if(u1>u2){
    console.log("The line is rejected");
  } else{
      x1n = x1 + u1*dx;
      y1n = y1 + u1*dy;

      x2n = x1 + u2*dx;
      y2n = y1 + u2*dy;

      stroke('green');
      strokeWeight(3);
      line(x1n,y1n,x2n,y2n);
  }
}
