//vertices

var vertices = [
  [100, 100, 150, 1],
  [100, 150, 150, 1],
  [150, 150, 150, 1],
  [150, 100, 150, 1],
  [100, 100, 100, 1],
  [150, 100, 100, 1],
  [150, 150, 100, 1],
  [100, 150, 100, 1],
];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(220);
	stroke('black');
	threeDShapes(vertices);
	translation(vertices);
	rotation(vertices, 'z');
	scaling(vertices);
}




function threeDShapes(a){

  beginShape();
		vertex(a[0][0], a[0][1], a[0][2]);
		vertex(a[1][0], a[1][1], a[1][2]);
		vertex(a[2][0], a[2][1], a[2][2]);
		vertex(a[3][0], a[3][1], a[3][2]);
		vertex(a[0][0], a[0][1], a[0][2]);
		vertex(a[4][0], a[4][1], a[4][2]);
		vertex(a[5][0], a[5][1], a[5][2]);
		vertex(a[3][0], a[3][1], a[3][2]);
		vertex(a[5][0], a[5][1], a[5][2]);
		vertex(a[6][0], a[6][1], a[6][2]);
		vertex(a[2][0], a[2][1], a[2][2]);
		vertex(a[6][0], a[6][1], a[6][2]);
		vertex(a[7][0], a[7][1], a[7][2]);
		vertex(a[1][0], a[1][1], a[1][2]);
		vertex(a[7][0], a[7][1], a[7][2]);
		vertex(a[4][0], a[4][1], a[4][2]);
		endShape(CLOSE);
  
}

function multiplication(a, b) {
	let result = new Array(a.length);
	if (a[0].length == b.length) {
		for (let i = 0; i < a.length; i++) {
			result[i] = new Array(1);
			for (let j = 0; j < 1; j++) {
				result[i][j] = 0;
				for (let k = 0; k < a[0].length; k++) {
					result[i][j] += a[i][k] * b[k];
				}
			}
		}
	} else {
		print("The matrices cannot be multiplied.");
	}
	return result;
}

function translation(a){
  tx = -40;
  ty = -70;
  tz = -10;
  t = [[1, 0, 0, tx],
			[0, 1, 0, ty],
			[0, 0, 1, tz],
			[0, 0, 0, 1],
    ];

    c =  new Array(0);

    let translatedCoordinate = [];

    a.forEach((e) => {
      let n = multiplication(t, e);
      translatedCoordinate.push(n);
    });
    stroke('red');
    strokeWeight(1.5);
    threeDShapes(translatedCoordinate);

}

function rotation(a, axis){
	angle = 30;
	theta = angle * (Math.PI / 180);
	sint = Math.sin(theta);
	cost = Math.cos(theta);
	let translatedCoordinate = [];
	if(axis == 'x'){
		t = [
			[1, 0, 0, 0],
			[0, cost, -sint, 0],
			[0, sint,cost, 0],
			[0, 0, 0, 1],
		];
		a.forEach((e) => {
			let n = multiplication(t, e);
			translatedCoordinate.push(n);
		   });
		stroke('red');
		strokeWeight(1.5);
		threeDShapes(translatedCoordinate);
	}
	else if(axis == 'y'){
		t =[
			[cost, 0, sint, 0],
			[0, 1, 0, 0],
			[-sint, 0, cost, 0],
			[0, 0, 0, 1],
		];
		a.forEach((e) => {
			let n = multiplication(t, e);
			translatedCoordinate.push(n);
		   });
		stroke('red');
		strokeWeight(1.5);
		threeDShapes(translatedCoordinate);
	}
	else if(axis == 'z'){
		t = [
			[cost, -sint, 0, 0],
			[sint, cost, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1],
		];
		a.forEach((e) => {
			let n = multiplication(t, e);
			translatedCoordinate.push(n);
		   });
		stroke('red');
		strokeWeight(1.5);
		threeDShapes(translatedCoordinate);
	}
	else{
		cosnsole.log("You can perform rotation on x, y and z axis only");
	}
}

function scaling(a){
	sx = 1.8;
	sy = 2;
	sz = 1.2;
	t = [[sx, 0, 0, 0],
		[0, sy, 0, 0],
		[0, 0, sz, 0],
		[0, 0, 0, 1],
	  ];
   
	  c =  new Array(0);
   
	  let translatedCoordinate = [];
   
	  a.forEach((e) => {
	    let n = multiplication(t, e);
	    translatedCoordinate.push(n);
	  });
	  
	  console.log(translatedCoordinate);


	  stroke('red');
	  strokeWeight(1.5);
	  translate(0, -150, 0);
	  threeDShapes(translatedCoordinate);
}