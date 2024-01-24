let i = 0;
let a = true;
let randDirection = true;

const sideLength = 16;
const planeNum = 3 * sideLength;

function setup() {
  createCanvas(710, 400, WEBGL);
  camera(-900, -900, -900, 0, 0, 0, 2, 1, 3);
}

function draw() {
  //translate(-sideLength/2 * 40, -sideLength/2 * 40, -sideLength/2 * 40);
  background(250);
  orbitControl();
  normalMaterial();
  drawBoxes();
}

function drawBoxes() {
  if (a) {
    let index = Math.floor(Math.random() * drawingFunctions.length);
    selectedFunction = drawingFunctions[index]
    a = false
  }
  selectedFunction(randDirection);
  console.log(randDirection)
  if (i <= PI / 2) {
    i += 0.02;
  } else {
    i = 0
    let index = Math.floor(Math.random() * planeNum);
    randDirection = Boolean(Math.floor(Math.random() * 2))
    selectedFunction = drawingFunctions[index]
  }
}

function drawCube(x, y, z) {
  push();
  translate(x, y, z);
  box(30, 30);
  pop();
}

function generateAxisFunctions(axis, depth) {
  let functions = [];

  for (let i = 1; i <= depth; i++) {
    let functionName = `draw${axis}AxisCubesDepth${i}`;
    let functionBody = '';

    for (let j = 1; j <= depth; j++) {
      if (j != i) {
        functionBody += `${axis}Order${j}();\n`;
      }
    }
    functionBody += `translate(sideLength/2 * 40 - 20, sideLength/2 * 40- 20, sideLength/2 * 40- 20);`
    functionBody += `rotate${axis.toUpperCase()}(direction ? i : -i);\n`;
    functionBody += `translate(-sideLength/2 * 40 + 20, -sideLength/2 * 40+ 20, -sideLength/2 * 40+ 20);`
    functionBody += `${axis}Order${i}();\n`

    functions.push(new Function('direction', `{
      ${functionBody}
    }`));
  }

  return functions;
}

let xOrderFunctions = generateXFunctions(sideLength);
let yOrderFunctions = generateYFunctions(sideLength);
let zOrderFunctions = generateZFunctions(sideLength);

let xFunctions = generateAxisFunctions('x', sideLength);
let yFunctions = generateAxisFunctions('y', sideLength);
let zFunctions = generateAxisFunctions('z', sideLength);

let drawingFunctions = xFunctions.concat(yFunctions, zFunctions);

function generateZFunctions(depth) {
  for (let i = 0; i < depth; i++) {
    let functionName = `zOrder${i + 1}`;
    let functionBody = '';

    for (let x = 0; x < depth; x++) {
      for (let y = 0; y < depth; y++) {
        functionBody += `drawCube(${x * 40}, ${y * 40}, ${i * 40});\n`;
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
      let functionBody = '';

      for (let x = 0; x < depth; x++) {
        for (let z = 0; z < depth; z++) {
          functionBody += `drawCube(${x * 40}, ${i * 40}, ${z * 40});\n`;
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
    let functionBody = '';

    for (let y = 0; y < depth; y++) {
      for (let z = 0; z < depth; z++) {
        functionBody += `drawCube(${i * 40}, ${y * 40}, ${z * 40});\n`;
      }
    }

    window[functionName] = new Function(`
      ${functionBody}
    `);
  }
}