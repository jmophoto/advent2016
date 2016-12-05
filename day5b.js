const crypto = require('crypto');
const input = 'cxdnnyjw';
const characters = [];
const positions = [];

for (let i = 0; positions.length < 8; i++) {
  const hash = crypto.createHash('md5').update(input + i).digest('hex');

  if (hash.slice(0, 5) === '00000') {
    const position = hash.charAt(5);

    if (position < 8 && !positions.includes(position)) {
      characters[position] = hash.charAt(6);
      positions.push(position);
    }
  }
}

console.log(`The code to the door is ${characters.join('')}.`);
