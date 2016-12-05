const crypto = require('crypto');
const input = 'cxdnnyjw';
const characters = [];

for (let i = 0; characters.length < 8; i++) {
  const hash = crypto.createHash('md5').update(input + i).digest('hex');

  if (hash.slice(0, 5) === '00000') {
    characters.push(hash.charAt(5));
  }
}

console.log(`The code to the door is ${characters.join('')}.`);
