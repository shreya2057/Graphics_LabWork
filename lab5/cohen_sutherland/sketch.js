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

  // // endpoints for line 1
  x1 = 200;
  y1 = 40;
  x2 = 20; 
  y2 = 100;
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
  testLine(x1,y1,x2,y2);

  //endpoints for line 3
  x1 = 320;
  y1 = 200;
  x2 = 200; 
  y2 = 240;
  initialLine(x1,y1,x2,y2);
  //cliping line
  testLine(x1,y1,x2,y2);
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

function testLine(x1,y1,x2,y2){
  dx = x2-x1;
  dy = y2-y1;
  m = dy/dx;
  point1 = new Array(0);
  point2 = new Array(0);
  

  //assigning region code
  rcode1 = regionCode(x1,y1); //point 1
  rcode2 = regionCode(x2,y2); //point 2
  const isAllZero1 = rcode1.every((item) => item === 0);
  const isAllZero2 = rcode2.every((item) => item === 0);

  rCode = new Array(0);

  if(isAllZero1 && isAllZero2){
    console.log("The line completely inside");
  } else{
    for(i = 0; i<rcode1.length; i++){
      rCode[i] = rcode1[i]*rcode2[i];
    }
    const isAllZero = rCode.every((item) => item === 0);
    if(isAllZero){ // if rCode = 0000
      console.log("the line might be accepted");

      //endpoint 1
      if(isAllZero1){
        console.log("The point lies inside");
        point1.push(x1,y1);
      }else{
        points1 = clipLine(x1,y1,rcode1, rcode2,m);
        for(var a in points1){
          point1.push(points1[a]);
        }
      }

      // endpoint2
      if(isAllZero2){
        point2.push(x2,y2);
        console.log("The point lies inside");
      }else{
        points2 = clipLine(x2,y2,rcode2, rcode1,m);
        for(var b in points2){
          point2.push(points2[b]);
        }      
      }
      strokeWeight(3);
      stroke('green');
      line(point1[0], point1[1], point2[0], point2[1]);
    }else{
      console.log("The line is rejected");
    }
  }
}

function initialLine(x1,y1,x2,y2){
  strokeWeight(1);
  stroke('red');
  line(x1,y1,x2,y2);
}

function regionCode(x,y){

  code = new Array(0);

  //for top
  if(y>ywmax){
    bit4 = 1;
  } else{
    bit4 = 0;
  }
  // for below
  if(y<ywmin){
    bit3 = 1;
  } else{
    bit3 = 0;
  }
  // for right
  if(x>xwmax){
    bit2 = 1;
  } else{
    bit2 = 0;
  }
  //for left 
  if(x<xwmin){
    bit1 = 1;
  } else{
    bit1 = 0;
  }

  code.push(bit4,bit3,bit2,bit1);
  return code;

}

function clipLine(x1,y1,rcode1, rcode2,m){
  var x = 0;
  var y = 0;
  var r = false;
        while(r == false){
          regCode = new Array(0);
          if(rcode1[3]==1){
            x = xwmin;
            y = y1 + m*(xwmin - x1);
          }
          else if (rcode1[2]==1){
            x = xwmax;
            y = y1 + m*(xwmax - x1);
          }
          else if (rcode1[1]==1){
            x= x1 + (ywmin - y1)/m;
            y = ywmin;
          }
          else{
            x= x1 + (ywmax - y1)/m;
            y = ywmax;
          }
          r1 = regionCode(x,y);
          r = r1.every((item)=>item ===0 );
          for(i = 0; i<rcode1.length; i++){
            regCode[i] = r1[i]*rcode2[i];
          }
          r11 = regCode.every((item)=>item ===0 );
          if(r11 == false){
            console.log("The line is rejected");
            break;
          }
          strokeWeight(6);
        }
        return [x,y];
}