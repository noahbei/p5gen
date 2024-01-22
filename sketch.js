let i = 0
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

  rotateX(i);

  push()
  translate(0, 40, 0)
  box(30, 30);
  pop()

  push()
  translate(0, -40, 0)
  box(30, 30);
  pop()

  push()
  translate(0, 0, 0)
  box(30, 30);
  pop()
  if (i < (PI / 2))
    i += .01
}

function mousePressed() {
  //make a random plane turn
}

function setUpCubes() {
  // 26
}

// have function that fills in the coordinates of the ones
//that need to be rotated

