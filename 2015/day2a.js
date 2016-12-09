const boxes = require('./day2input.js');

const array = [
  '4x3x2',
  '1x1x10'
];


let totalArea = 0;
let totalLength = 0;

boxes.forEach(string => {
  const dimensions = string.split('x').sort((a, b) => a - b);
  const areas = [
    dimensions[0] * dimensions[1],
    dimensions[0] * dimensions[2],
    dimensions[1] * dimensions[2]
  ].sort((a, b) => a - b);

  const surfaceArea = 2 * (areas[0] + areas[1] + areas[2]);
  const perimeter = 2 * (parseInt(dimensions[0]) + parseInt(dimensions[1]));
  const volume = dimensions[0] * dimensions[1] * dimensions[2];

  totalArea = totalArea + surfaceArea + areas[0];
  totalLength = totalLength + perimeter + volume;
});

console.log(`The total area is ${totalArea}.`);
console.log(`The total length is ${totalLength}.`);
