function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  x_shear(100,90,70,70,70,150,2);
  y_shear(100,90,70,70,70,150,2);
}

function x_shear(x1, y1,x2,y2,x3,y3, factor){
  shx = factor;
  strokeWeight(2);
  stroke('black');
  s = [
    [1, shx, 0],
    [0 ,1, 0],
    [0 , 0, 1],
  ];
  beginShape(line);
  vertex(x1,y1);
  vertex(x2,y2);
  vertex(x3,y3);
  vertex(x1,y1);
  endShape();
  line(x1,y1,x2,y2);
  a = multiply(x1,y1,s);
  b = multiply(x2,y2,s);
  c = multiply(x3,y3,s);
  stroke('red');
  beginShape(line);
  vertex(a[0],a[1]);
  vertex(b[0],b[1]);
  vertex(c[0],c[1]);
  vertex(a[0],a[1]);
  endShape();
  p = a[0] + 10;
  strokeWeight(0);
  text("x-axis shear", 350 ,350);
  strokeWeight(6);
  point(330,345);
}

function y_shear(x1, y1,x2,y2,x3,y3, factor){
  shy = factor;
  strokeWeight(2);
  stroke('black');
  s = [
    [1, 0, 0],
    [shy ,1, 0],
    [0 , 0, 1],
  ];
  line(x1,y1,x2,y2);
  a = multiply(x1,y1,s);
  b = multiply(x2,y2,s);
  c = multiply(x3,y3,s);
  stroke('blue');
  beginShape(line);
  vertex(a[0],a[1]);
  vertex(b[0],b[1]);
  vertex(c[0],c[1]);
  vertex(a[0],a[1]);
  endShape();
  strokeWeight(0);
  text("y-axis shear", 350 ,370);
  strokeWeight(6);
  point(330,370);
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