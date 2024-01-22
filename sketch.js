let rotation1 = { x: 0, y: 0, z: 0 };
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
let rotation27 = 0;

let i = 0;
let y = 0;
let a = false;
const numCubes = 27;
let cubes = [];

function setup() {
  createCanvas(710, 400, WEBGL);
  //setUpCubes(numCubes);
}

function draw() {
  background(250);
  orbitControl();
  normalMaterial();
  drawBoxes();
  
}

function mousePressed() {
  const randomAxis = ["x", "y", "z"][Math.floor(Math.random() * 3)];
  const randomRow = Math.floor(Math.random() * 3);
  const direction = Boolean(Math.floor(Math.random() * 2));
  //make a random plane turn
  animateCubes(randomAxis, randomRow, direction);
}

function setUpCubes(numCubes) {
  cubes = [];
  for (let i = 0; i < numCubes; i++) {
    cubes.push({
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    });
  }
}

// have function that fills in the coordinates of the ones
//that need to be rotated

// if statment over each block releasing or holding it for each rotation
function animateCubes(axis, row, direction) {
  cubes.forEach((cube, index) => {
    push();
    rotateX(cube.rotationX + i);
    rotateY(cube.rotationY + i);
    rotateZ(cube.rotationZ + i);
    translate(0, 40, 0);
    box(30, 30);
    pop();

    cube[index].rotationX += i;
    cube[index].rotationY += i;
    cube[index].rotationZ += i;
  });
}

function drawBoxes() {
  //rotateX(rotation1.x + i);
  //rotateY(rotation1.y + i);
  //rotateZ(rotation1.z + i);

  //back cubes
  drawCube(40, 0, -40);
  drawCube(40, 40, -40);
  drawCube(40, -40, -40);
  
  drawCube(0, 40, -40);
  drawCube(0, -40, -40);
  drawCube(0, 0, -40);
  
  drawCube(-40, 0, -40)
  drawCube(-40, -40, -40)
  drawCube(-40, 40, -40)

  //front cubes
  drawCube(40, 0, 40);
  drawCube(40, 40, 40);
  drawCube(40, -40, 40);
  
  drawCube(0, 40, 40);
  drawCube(0, -40, 40);
  drawCube(0, 0, 40);
  
  drawCube(-40, 0, 40)
  drawCube(-40, -40, 40)
  drawCube(-40, 40, 40)

  rotateZ(i)
  //middle cubes
  drawCube(40, 0, 0);
  drawCube(40, 40, 0);
  drawCube(40, -40, 0);
  
  drawCube(0, 40, 0);
  drawCube(0, -40, 0);
  drawCube(0, 0, 0);

  drawCube(-40, 0, 0)
  drawCube(-40, -40, 0)
  drawCube(-40, 40, 0)

  if (i < PI / 2) {
    i += 0.02;
  } else {
    i = PI / 2;
  }
}

function drawCube(x, y, z) {
  push();
  translate(x, y, z);
  box(30, 30);
  pop();
}