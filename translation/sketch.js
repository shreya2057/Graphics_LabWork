function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translation(10,20,50,60);
}

  tx = 50;
  ty = 30;
  t = [
    [1,0,tx],
    [0,1,ty],
    [0,0, 1],
  ];

function translation(x1, y1,x2,y2){
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
  for(i = 0; i<t.length; i++){
    product[i] = new Array(1);
    for(j = 0; j<1; j++){
      product[i][j] = 0;
      for(k = 0; k<t[0].length; k++){
        product[i][j] += t[i][k] * p[k];
      }
    }
  }
  
  return product;
}