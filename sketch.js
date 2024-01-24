let i = 0;
let a = true;
//const numCubes = 27;
//let cubes = [];

function setup() {
  createCanvas(710, 400, WEBGL);
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

function drawBoxes() {
  if (a) {
   selectedFunction = drawingFunctions[0]
  a = false
  }
  selectedFunction();
  if (i < PI / 2) {
    i += 0.02;
  } else {
    i = 0
    let index = Math.floor(Math.random() * drawingFunctions.length);
    selectedFunction = drawingFunctions[index]
  }
}

function drawCube(x, y, z) {
  push();
  translate(x, y, z);
  box(30, 30);
  pop();
}

let coordinates = [
  (40, 0, -40),
  (40, 40, -40),
  (40, -40, -40),
  (0, 40, -40),
  (0, -40, -40),
  (0, 0, -40),
  (-40, 0, -40),
  (-40, -40, -40),
  (-40, 40, -40),
  (40, 0, 40),
  (40, 40, 40),
  (40, -40, 40),
  (0, 40, 40),
  (0, -40, 40),
  (0, 0, 40),
  (-40, 0, 40),
  (-40, -40, 40),
  (-40, 40, 40),
  (40, 0, 0),
  (40, 40, 0),
  (40, -40, 0),
  (0, 40, 0),
  (0, -40, 0),
  (0, 0, 0),
  (-40, 0, 0),
  (-40, -40, 0),
  (-40, 40, 0)
]

let drawingFunctions = [
  drawXAxisCubesDepth1,
  drawXAxisCubesDepth2,
  drawXAxisCubesDepth3,
  drawYAxisCubesDepth1,
  drawYAxisCubesDepth2,
  drawYAxisCubesDepth3,
  drawZAxisCubesDepth1,
  drawZAxisCubesDepth2,
  drawZAxisCubesDepth3
]


function drawXAxisCubesDepth1() {
  xOrderRight();
  xOrderMiddle();
  rotateX(i);
  xOrderLeft();
}

function drawXAxisCubesDepth2() {
  xOrderRight();
  xOrderLeft();
  rotateX(i);
  xOrderMiddle();
}

function drawXAxisCubesDepth3() {
  xOrderLeft();
  xOrderMiddle();
  rotateX(i);
  xOrderRight();
}


function drawYAxisCubesDepth1() {
  yOrderTop();
  yOrderMiddle();
  rotateY(i);
  yOrderBottom();
}

function drawYAxisCubesDepth2() {
  yOrderTop();
  yOrderBottom();
  rotateY(i);
  yOrderMiddle();
}

function drawYAxisCubesDepth3() {
  yOrderMiddle();
  yOrderBottom();
  rotateY(i);
  yOrderTop();
}


function drawZAxisCubesDepth1() {
  zOrderBack();
  zOrderMiddle();
  rotateZ(i);
  zOrderFront();
}

function drawZAxisCubesDepth2() {
  zOrderBack();
  zOrderFront();
  rotateZ(i);
  zOrderMiddle();
}

function drawZAxisCubesDepth3() {
  zOrderFront();
  zOrderMiddle();
  rotateZ(i);
  zOrderBack();
}

//
// Z
//
function zOrderFront() {
  drawCube(40, 0, 40);
  drawCube(40, 40, 40);
  drawCube(40, -40, 40);
  
  drawCube(0, 40, 40);
  drawCube(0, -40, 40);
  drawCube(0, 0, 40);
  
  drawCube(-40, 0, 40)
  drawCube(-40, -40, 40)
  drawCube(-40, 40, 40)
}

function zOrderMiddle() {
  drawCube(40, 0, 0);
  drawCube(40, 40, 0);
  drawCube(40, -40, 0);
  
  drawCube(0, 40, 0);
  drawCube(0, -40, 0);
  drawCube(0, 0, 0);

  drawCube(-40, 0, 0)
  drawCube(-40, -40, 0)
  drawCube(-40, 40, 0)
}

function zOrderBack() {
  drawCube(40, 0, -40);
  drawCube(40, 40, -40);
  drawCube(40, -40, -40);
  
  drawCube(0, 40, -40);
  drawCube(0, -40, -40);
  drawCube(0, 0, -40);
  
  drawCube(-40, 0, -40)
  drawCube(-40, -40, -40)
  drawCube(-40, 40, -40)
}

//
// X
//
function xOrderLeft() {
  drawCube(-40, 0, -40)
  drawCube(-40, -40, -40)
  drawCube(-40, 40, -40)
  
  drawCube(-40, 0, 0)
  drawCube(-40, -40, 0)
  drawCube(-40, 40, 0)
  
  drawCube(-40, 0, 40)
  drawCube(-40, -40, 40)
  drawCube(-40, 40, 40)
}

function xOrderMiddle() {
  drawCube(0, 40, 40);
  drawCube(0, -40, 40);
  drawCube(0, 0, 40);
  
  drawCube(0, 40, -40);
  drawCube(0, -40, -40);
  drawCube(0, 0, -40);
  
  drawCube(0, 40, 0);
  drawCube(0, -40, 0);
  drawCube(0, 0, 0);
}

function xOrderRight() {
  drawCube(40, 0, 0);
  drawCube(40, 40, 0);
  drawCube(40, -40, 0);
  
  drawCube(40, 0, -40);
  drawCube(40, 40, -40);
  drawCube(40, -40, -40);
  
  drawCube(40, 0, 40);
  drawCube(40, 40, 40);
  drawCube(40, -40, 40);
}


//
// Y
//
function yOrderBottom() {
  drawCube(-40, -40, -40);
  drawCube(40, -40, -40);
  drawCube(40, -40, 0);
  drawCube(0, -40, 40);
  drawCube(-40, -40, 0);
  drawCube(0, -40, -40);
  drawCube(0, -40, 0);
  drawCube(40, -40, 40);
  drawCube(-40, -40, 40);
}

function yOrderMiddle() {
  drawCube(-40, 0, -40);
  drawCube(40, 0, 0);
  drawCube(0, 0, 40);
  drawCube(-40, 0, 40);
  drawCube(0, 0, -40);
  drawCube(-40, 0, 0)
  drawCube(0, 40, 0);
  drawCube(0, 0, 0);
  drawCube(40, 0, -40);
  drawCube(40, 0, 40);
}

function yOrderTop() {
  drawCube(0, 40, 40);
  drawCube(40, 40, 0);
  drawCube(-40, 40, -40);
  drawCube(-40, 40, 0);
  drawCube(0, 40, -40);
  drawCube(40, 40, -40);
  drawCube(-40, 40, 40);
  drawCube(40, 40, 40);
}








/* function drawBoxes() {
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
} */


/* function setUpCubes(numCubes) {
  cubes = [];
  for (let i = 0; i < numCubes; i++) {
    cubes.push({
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    });
  }
} */


/* function animateCubes(axis, row, direction) {
  cubes.forEach((cube, index) => {
    push();
    if (axis == "x") {
      rotateX(cube.rotationX + i);
      rotateY(cube.rotationY);
      rotateZ(cube.rotationZ);
    } else if (axis == "y") {
      rotateY(cube.rotationY + i);
      rotateX(cube.rotationY);
      rotateZ(cube.rotationZ);
    } else if (axis == "z") {
      rotateZ(cube.rotationZ + i);
      rotateY(cube.rotationY);
      rotateX(cube.rotationZ);
    }
    
    translate(coordinates[index]);
    box(30, 30);
    pop();

    switch (axis) {
      case "x":
        cube[index].rotationX += i;
        break;
      case "y":
        cube[index].rotationY += i;
        break;
      case "z":
        cube[index].rotationZ += i;
        break;
      default:
        break;
    }
  });
} */