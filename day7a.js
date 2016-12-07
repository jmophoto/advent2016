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
  const valid = input.match(/\[(\w+)\]/g).every(sequence => !checkABBA(sequence));

  if (valid && checkABBA(input)) {
    tlsIPs.push(input)
  }
});

console.log(`There are ${tlsIPs.length} IP addresses that support TLS.`);
