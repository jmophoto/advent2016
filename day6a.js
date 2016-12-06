const inputs = require('./day6inputs.js');

const test = [
  'eedadn',
  'drvtee',
  'eandsr',
  'raavrd',
  'atevrs',
  'tsrnev',
  'sdttsa',
  'rasrtv',
  'nssdts',
  'ntnada',
  'svetve',
  'tesnvt',
  'vntsnd',
  'vrdear',
  'dvrsen',
  'enarar'
];

const columns = [];

inputs.forEach(row => {
  const letters = row.split('');

  letters.forEach((letter, index) => {
    if (columns[index]) {
      columns[index] = columns[index].concat(letter);
    } else {
      columns[index] = letter;
    }
  });
});

const message = columns.map(column => {
  return column.split('').filter((letter, index) => column.indexOf(letter) === index).sort((a, b) => {
    const regexA = new RegExp(a, 'gi');
    const regexB = new RegExp(b, 'gi');

    if (column.match(regexA).length > column.match(regexB).length) {
      return -1;
    }

    if (column.match(regexA).length < column.match(regexB).length) {
      return 1;
    }

    return 0;
  })[0];
}).join('');

console.log(`The message is ${message}.`);
