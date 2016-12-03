const inputs = require('./day1inputs.js');

const calculateDirection = (turn, direction) => {
  switch (direction) {
    case 'n':
      return turn === 'R' ? 'e' : 'w';
    case 's':
      return turn === 'R' ? 'w' : 'e';
    case 'e':
      return turn === 'R' ? 's' : 'n';
    case 'w':
      return turn === 'R' ? 'n' : 's';
  }
};

let direction = 'n';
const coords = [{ x: 0, y: 0}];
const duplicates = [];
let x = 0;
let y = 0;

inputs.forEach(point => {
  const turn = point.slice(0, 1);
  const blocks = parseInt(point.slice(1), 0);

  switch (direction) {
    case 'n':
      direction = turn === 'R' ? 'e' : 'w';
      break;
    case 's':
      direction = turn === 'R' ? 'w' : 'e';
      break;
    case 'e':
      direction = turn === 'R' ? 's' : 'n';
      break;
    case 'w':
      direction = turn === 'R' ? 'n' : 's';
      break;
  }

  for (let i = 0; i < blocks; i++) {
    switch (direction) {
      case 'n':
      y = y + 1;
      break;
      case 's':
      y = y - 1;
      break;
      case 'e':
      x = x + 1;
      break;
      case 'w':
      x = x - 1;
      break;
    }

    coords.forEach((coord, index) => {
      if (coord.x === x && coord.y === y) {
        duplicates.push(coord)
      }
    });

    coords.push({ x, y });
  }
});

console.log(`The first duplicate location is ${Math.abs(duplicates[0].x) + Math.abs(duplicates[0].y)} blocks away`);
