let i = 0;
let a = true;
let randDirection = true;

const sideLength = 16;
const planeNum = 3 * sideLength;

function setup() {
  createCanvas(710, 400, WEBGL);
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
    functionBody += `rotate${axis.toUpperCase()}(direction ? i : -i);\n`;
    functionBody += `${axis}Order${i}();\n`

    functions.push(new Function('direction', `{
      ${functionBody}
    }`));
  }

  return functions;
}

let xOrderFunctions = generateXFunctions(16);
let yOrderFunctions = generateYFunctions(16);
let zOrderFunctions = generateZFunctions(16);

let xFunctions = generateAxisFunctions('x', 16);
let yFunctions = generateAxisFunctions('y', 16);
let zFunctions = generateAxisFunctions('z', 16);

let drawingFunctions = xFunctions.concat(yFunctions, zFunctions);

function generateZFunctions(depth) {
  let functions = [];

  for (let i = 0; i < depth; i++) {
    let functionName = `zOrder${i + 1}`;
    let functionBody = '';

    for (let x = 0; x < depth; x++) {
      for (let y = 0; y < depth; y++) {
        functionBody += `drawCube(${x * 40}, ${y * 40}, ${i * 40});\n`;
      }
    }

    functions.push(new Function(`
      function ${functionName}() {
        ${functionBody}
      }
    `));
  }

  return functions;
}

  function generateYFunctions(depth) {
    let functions = [];

    for (let i = 0; i < depth; i++) {
      let functionName = `yOrder${i + 1}`;
      let functionBody = '';

      for (let x = 0; x < depth; x++) {
        for (let z = 0; z < depth; z++) {
          functionBody += `drawCube(${x * 40}, ${i * 40}, ${z * 40});\n`;
        }
      }

      functions.push(new Function(`
        function ${functionName}() {
          ${functionBody}
        }
      `));
    }

    return functions;
  }

function generateXFunctions(depth) {
  let functions = [];

  for (let i = 0; i < depth; i++) {
    let functionName = `xOrder${i + 1}`;
    let functionBody = '';

    for (let y = 0; y < depth; y++) {
      for (let z = 0; z < depth; z++) {
        functionBody += `drawCube(${i * 40}, ${y * 40}, ${z * 40});\n`;
      }
    }

    functions.push(new Function(`
      function ${functionName}() {
        ${functionBody}
      }
    `));
  }

  return functions;
}