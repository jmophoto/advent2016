const inputs = require('./inputs.js');

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

  switch (direction) {
    case 'n':
    y = y + blocks;
    break;
    case 's':
    y = y - blocks;
    break;
    case 'e':
    x = x + blocks;
    break;
    case 'w':
    x = x - blocks;
    break;
  }
});

console.log(`The final destination is ${Math.abs(x) + Math.abs(y)} blocks away.`);
