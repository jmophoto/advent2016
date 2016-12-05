const inputs = require('./day4inputs.js');

let sectorTotal = 0;

const decodeRoom = (input) => {
  const string = input.replace(/-/gi, '');
  const name = string.slice(0, -10);
  const sector = parseInt(string.slice(-10, -7));
  const checksum = string.slice(-7).replace('[', '').replace(']', '');

  const letters = name.split('').filter((letter, index) => name.indexOf(letter) === index).sort((a, b) => {
    const regexA = new RegExp(a, 'gi');
    const regexB = new RegExp(b, 'gi');

    if (name.match(regexA).length > name.match(regexB).length) {
      return -1;
    }

    if (name.match(regexA).length < name.match(regexB).length) {
      return 1;
    }

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }).splice(0, 5).join('');

  const valid = letters === checksum;

  return { sector, valid};
}

inputs.forEach(input => {
  const { sector, valid } = decodeRoom(input);

  if (valid) {
    sectorTotal = sectorTotal + sector;
  }
})


console.log(`The sector total is ${sectorTotal}.`);
