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

  rotateX(frameCount * 0.01);

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
}

function mousePressed() {
  //make a random plane turn
}

function setUpCubes() {
  // 26
}
