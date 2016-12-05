const inputs = require('./day4inputs.js');

const rooms = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

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

  return { sector, valid };
}

decodeName = (sector, input) => {
  return input.slice(0, -11).split('').map((letter, index) => {
    if (letter === '-') {
      return ' ';
    }

    const advancedIndex = alphabet.indexOf(letter) + (sector % alphabet.length);
    const characterIndex = advancedIndex > alphabet.length - 1 ? advancedIndex - alphabet.length : advancedIndex;

    return alphabet.charAt(characterIndex);

  }).join('');
}

inputs.forEach(input => {
  const { sector, valid } = decodeRoom(input);

  if (valid) {
    const name = decodeName(sector, input);

    if (name.match(/northpole/)) {
      rooms.push({ name, sector });
    }
  }
});

console.log(`The room where the objects are stored is named "${rooms[0].name}" and is located in sector ${rooms[0].sector}.`);
