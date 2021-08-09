function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  scaling(200,100,70,70);
}

  sx = 2;
  sy = 2;
  s = [
    [sx, 0, 0],
    [0 ,sy, 0],
    [0 , 0, 1],
  ];

function scaling(x1, y1,x2,y2){
  x = 10;
  y = 20;
  strokeWeight(2);
  stroke('black');
  line(x1,y1,x2,y2);
  a = multiply(x1,y1);
  b = multiply(x2,y2);
  stroke('red');
  line(a[0],a[1],b[0],b[1]);
}

function multiply(x,y){
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