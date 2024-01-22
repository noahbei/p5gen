let rotation1 = 0;
let rotation2 = 0;
let rotation3 = 0;
let rotation4 = 0;
let rotation5 = 0;
let rotation6 = 0;
let rotation7 = 0;
let rotation8 = 0;
let rotation9 = 0;
let rotation10 = 0;
let rotation11 = 0;
let rotation12 = 0;
let rotation13 = 0;
let rotation14 = 0;
let rotation15 = 0;
let rotation16 = 0;
let rotation17 = 0;
let rotation18 = 0;
let rotation19 = 0;
let rotation20 = 0;
let rotation21 = 0;
let rotation22 = 0;
let rotation23 = 0;
let rotation24 = 0;
let rotation25 = 0;
let rotation26 = 0;

let i = 0;
let y = 0;
let a = false;
function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  orbitControl();
  normalMaterial();
  box(1, 1)

  push()
  translate(40, 0, 0)
  box(30, 30);
  pop()

  push()
  translate(-40, 0, 0)
  box(30, 30);
  pop()

  push()
  translate(40, 40, 0)
  box(30, 30);
  pop()
 
 
  // middle, bottom, middle
  push()
  if (a) {
    rotateY(i)
  } else {
  rotateX(i);}
  translate(0, 40, 0)
  box(30, 30);
  pop()

  // middle, top, middle
  push()
  if (a) {
    rotateY(i)
  } else {
  rotateX(i);}
  translate(0, -40, 0)
  box(30, 30);
  pop()

  // center
  push()
  if (a) {
    rotateY(i)
  } else {
  rotateX(i);}
  translate(0, 0, 0)
  box(30, 30);
  pop()

  if (i < (PI / 2)) {
    i += .02;
    if (a) {rotateX(PI/2)}
  } else {
    a = true
    i = 0
  }
}

function mousePressed() {
  const randomAxis = ["x", "y", "z"][Math.floor(Math.random() * 3)]
  const randomRow = Math.floor(Math.random() * 3)
  const direction = Boolean(Math.floor(Math.random() * 2));
  //make a random plane turn
  animateCubes(randomAxis, randomRow, direction);
}

function setUpCubes() {
  // 26
}

// have function that fills in the coordinates of the ones
//that need to be rotated

// if statment over each block releasing or holding it for each rotation
function animateCubes(axis, row, direction) {

}