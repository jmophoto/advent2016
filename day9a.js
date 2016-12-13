const inputs = require('./day9inputs.js');

const test = 'X(8x2)(3x3)ABCY';

const letters = inputs.split('');
const decoded = [];
let letter = '';

do {
  letter = letters.shift();
  if (letter === '(') {
    let characterCount = [];
    let repeatCount = [];

    letter = letters.shift();

    do {
      characterCount.push(letter);
      letter = letters.shift();
    } while (letter !== 'x');

    letter = letters.shift();

    do {
      repeatCount.push(letter);
      letter = letters.shift();
    } while (letter !== ')');

    characterCount = characterCount.join('');
    repeatCount = repeatCount.join('');

    repeatedLetters = [];

    for (var i = 0; i < (characterCount); i++) {
      repeatedLetters.push(letters.shift());
    }

    decoded.push(repeatedLetters.join('').repeat(repeatCount));

  } else {
    decoded.push(letter);
  }
} while (letters.length);


console.log(`The decoded length is ${decoded.join('').length}.`);
