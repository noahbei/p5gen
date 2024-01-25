let sizeInput = document.getElementById("cubeSize");
let spaceInput = document.getElementById("spacebetween");



let i = 0;
let a = true;
let randDirection = true;

let sideLength = 2;
let planeNum = 3 * sideLength;
let cubeSize = 30;
let spaceBetween = 10;
let totalArea = cubeSize + spaceBetween;

function setup() {
  createCanvas(710, 400, WEBGL);
  camera(
    40 * sideLength * 3,
    40 * sideLength * 3,
    40 * sideLength * 3,
    (sideLength / 2) * 40 - 20,
    (sideLength / 2) * 40 - 20,
    (sideLength / 2) * 40 - 20,
    0,
    1,
    0
  );
}

function draw() {
  background(250);
  orbitControl();
  normalMaterial();
  drawBoxes();
}

function drawBoxes() {
  if (a) {
    let index = Math.floor(Math.random() * drawingFunctions.length);
    selectedFunction = drawingFunctions[index];
    a = false;
  }
  selectedFunction(randDirection);
  if (i <= PI / 2) {
    i += 0.02;
  } else {
    i = 0;
    let index = Math.floor(Math.random() * planeNum);
    randDirection = Boolean(Math.floor(Math.random() * 2));
    selectedFunction = drawingFunctions[index];
  }
}

function drawCube(x, y, z) {
  push();
  translate(x, y, z);
  box(cubeSize, cubeSize);
  pop();
}

function generateAxisFunctions(axis, depth) {
  let functions = [];

  for (let i = 1; i <= depth; i++) {
    let functionBody = "";

    for (let j = 1; j <= depth; j++) {
      if (j != i) {
        functionBody += `${axis}Order${j}();\n`;
      }
    }
    functionBody += `translate(sideLength/2 * totalArea - totalArea/2, sideLength/2 * totalArea- totalArea/2, sideLength/2 * totalArea- totalArea/2);`;
    functionBody += `rotate${axis.toUpperCase()}(direction ? i : -i);\n`;
    functionBody += `translate(-sideLength/2 * totalArea + totalArea/2, -sideLength/2 * totalArea+ totalArea/2, -sideLength/2 * totalArea+ totalArea/2);`;
    functionBody += `${axis}Order${i}();\n`;

    functions.push(
      new Function("direction",`{
        ${functionBody}
      }`)
    );
  }

  return functions;
}

generateXFunctions(sideLength);
generateYFunctions(sideLength);
generateZFunctions(sideLength);

let xFunctions = generateAxisFunctions("x", sideLength);
let yFunctions = generateAxisFunctions("y", sideLength);
let zFunctions = generateAxisFunctions("z", sideLength);

let drawingFunctions = xFunctions.concat(yFunctions, zFunctions);

function generateZFunctions(depth) {
  for (let i = 0; i < depth; i++) {
    let functionName = `zOrder${i + 1}`;
    let functionBody = "";

    for (let x = 0; x < depth; x++) {
      for (let y = 0; y < depth; y++) {
        functionBody += `drawCube(${x * totalArea}, ${y * totalArea}, ${i * totalArea});\n`;
      }
    }

    window[functionName] = new Function(`
      ${functionBody}
    `);
  }
}

function generateYFunctions(depth) {
  for (let i = 0; i < depth; i++) {
    let functionName = `yOrder${i + 1}`;
    let functionBody = "";

    for (let x = 0; x < depth; x++) {
      for (let z = 0; z < depth; z++) {
        functionBody += `drawCube(${x * totalArea}, ${i * totalArea}, ${z * totalArea});\n`;
      }
    }

    window[functionName] = new Function(`
      ${functionBody}
    `);
  }
}

function generateXFunctions(depth) {
  for (let i = 0; i < depth; i++) {
    let functionName = `xOrder${i + 1}`;
    let functionBody = "";

    for (let y = 0; y < depth; y++) {
      for (let z = 0; z < depth; z++) {
        functionBody += `drawCube(${i * totalArea}, ${y * totalArea}, ${z * totalArea});\n`;
      }
    }

    window[functionName] = new Function(`
      ${functionBody}
    `);
  }
}
sizeInput.addEventListener("input", e => {
  cubeSize = sizeInput.textContent
})