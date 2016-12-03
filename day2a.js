const inputs = require('./day2inputs.js');

const test = [
  'ULL',
  'RRDDD',
  'LURDL',
  'UUUUD'
];

let number = 5;
const code = [];

inputs.forEach(input => {
  const moves = input.split('');

  moves.forEach(direction => {
    switch (direction) {
      case 'U':
        number = number > 3 ? number - 3 : number;
        break;
      case 'D':
        number = number < 7 ? number + 3 : number;
        break;
      case 'L':
        number = [1, 4, 7].includes(number)  ? number : number - 1;
        break;
      case 'R':
        number = [3, 6, 9].includes(number)  ? number : number + 1;
        break;
    }
  });

  code.push(number);
});

console.log(`The code is ${code.join('')}.`);
