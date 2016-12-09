const inputs = require('./day8inputs.js');

const screen = [];

for (let i = 0; i < 6; i++) {
  screen [i] = [];
  for (let j = 0; j < 50; j++) {
    screen[i][j] = ' ';
  }
}

const createRect = (x, y) => {
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      screen[i][j] = '#';
    }
  }
};

const test = [
  'rect 3x2',
  'rotate column x=1 by 1',
  'rotate row y=0 by 4',
  'rotate column x=1 by 1'
];

inputs.forEach(input => {
  const pieces = input.split(' ');

  if (pieces[0].includes('rect')) {
    const coords = pieces[1].split('x');
    createRect(coords[0], coords[1]);
  }

  if (pieces[1].includes('column')) {
    const column = pieces[2].split('=')[1];
    const count = pieces[4];
    const values = [];

    for (let i = 0; i < screen.length; i++) {
      values.push(screen[i][column]);
    }

    for (let i = 0; i < count; i++) {
      values.unshift(values.pop());
    }

    for (let i = 0; i < screen.length; i++) {
      screen[i][column] = values[i];
    }
  }

  if (pieces[1].includes('row')) {
    const row = pieces[2].split('=')[1];
    const count = pieces[4];

    for (let i = 0; i < count; i++) {
      screen[row].unshift(screen[row].pop());
    }
  }
});

let total = 0;

for (let i = 0; i < screen.length; i++) {
  for (var j = 0; j < screen[i].length; j++) {
    total = screen[i][j] === '#' ? total + 1 : total;
  }
}

const letters = screen.map(row => row.join(''));

console.log('The screen reads:');
console.log(letters);
