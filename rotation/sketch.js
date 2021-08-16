function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rotation(200,100,70,70);
}

  angle = 30;
  theta = angle * (Math.PI / 180);
  sint = Math.sin(theta);
  cost = Math.cos(theta);
  r = [
    [cost,-sint,0],
    [sint,cost,0],
    [0,0, 1],
  ];

function rotation(x1, y1,x2,y2){
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
  for(i = 0; i<r.length; i++){
    product[i] = new Array(1);
    for(j = 0; j<1; j++){
      product[i][j] = 0;
      for(k = 0; k<r[0].length; k++){
        product[i][j] += r[i][k] * p[k];
      }
    }
  }
  
  return product;
}