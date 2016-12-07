const inputs = require('./day7inputs.js');

const tlsIPs = [];

const checkABBA = (string) => {
  const length = string.length;

  for (let i = 1; i < length; i++) {
    if (string.charAt(i) === string.charAt(i + 1) && string.charAt(i - 1) === string.charAt(i + 2) && string.charAt(i) !== string.charAt(i - 1)) {
      return true;
    }
  }
};

inputs.forEach(input => {
  const hypernet = input.match(/\[(\w+)\]/g);
  const supernet = input.replace(/\[(\w+)\]/g, ' ').split(' ').filter(letters => letters.length);

  const valid = hypernet.every(sequence => !checkABBA(sequence)) && supernet.some(sequence => checkABBA(sequence));

  if (valid) {
    tlsIPs.push(input)
  }
});

console.log(`There are ${tlsIPs.length} IP addresses that support TLS.`);
