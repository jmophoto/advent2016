const inputs = require('./day3inputs.js');

const validTriangle = (triangle) => {
  const total = triangle[0] + triangle[1] + triangle[2];

  return triangle.every(side => total - side > side)
}

const validTriangles = []

inputs.forEach(triangle => {
  if (validTriangle(triangle)) {
    validTriangles.push(triangle)
  }
});

console.log(`There are ${validTriangles.length} valid triangles.`);
