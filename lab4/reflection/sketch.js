function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  // x_reflect(200,100,70,170);
  y_reflect(170,100,70,170);
}

function x_reflect(x1, y1,x2,y2){
  strokeWeight(2);
  stroke('black');
  s = [
    [1, 0, 0],
    [0 ,-1, 0],
    [0 , 0, 1],
  ];
  line(x1,y1,x2,y2);
  a = multiply(x1,y1,s);
  b = multiply(x2,y2,s);
  stroke('red');
  translate(0,399);
  line(a[0],a[1],b[0],b[1]);
}

function y_reflect(x1, y1,x2,y2){
  strokeWeight(2);
  stroke('black');
  s = [
    [-1, 0, 0],
    [0 , 1, 0],
    [0 , 0, 1],
  ];
  line(x1,y1,x2,y2);
  a = multiply(x1,y1,s);
  b = multiply(x2,y2,s);
  stroke('red');
  translate(370,0);
  line(a[0],a[1],b[0],b[1]);
}

function multiply(x,y,s){
  p = [
    [x],
    [y],
    [1],
  ];
  product = new Array(p.length);
  for(i = 0; i<s.length; i++){
    product[i] = new Array(1);
    for(j = 0; j<1; j++){
      product[i][j] = 0;
      for(k = 0; k<s[0].length; k++){
        product[i][j] += s[i][k] * p[k];
      }
    }
  }
  return product;
}