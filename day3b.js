const inputs = require('./day3inputs.js');

const validTriangle = (triangle) => {
  const total = triangle[0] + triangle[1] + triangle[2];

  return triangle.every(side => total - side > side);
}

const validTriangles = [];
const newInputs = [];

for (let i = 0; i < inputs.length; i = i + 3) {
  newInputs.push([inputs[i][0], inputs[i + 1][0], inputs[i + 2][0]]);
  newInputs.push([inputs[i][1], inputs[i + 1][1], inputs[i + 2][1]]);
  newInputs.push([inputs[i][2], inputs[i + 1][2], inputs[i + 2][2]]);
}

newInputs.forEach(triangle => {
  if (validTriangle(triangle)) {
    validTriangles.push(triangle);
  }
});

console.log(`There are ${validTriangles.length} valid triangles.`);
