const inputs = require('./day7inputs.js');

const test = [
  'aba[bab]xyz[cfc]',
  'xyx[xyx]xyx',
  'aaa[kek]eke',
  'zazbz[bzb]cdb'
]

const sslIPs = [];

const checkABA = (sequences) => {
  const abas = [];

  sequences.forEach(sequence => {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence.charAt(i) === sequence.charAt(i + 2)) {
        abas.push(sequence.slice(i, i + 3))
      }
    }
  });

  return abas;
};

const reverseABA = (aba) => {
  return aba.charAt(1) + aba.charAt(0) + aba.charAt(1);
}

inputs.forEach(input => {
  const hypernet = input.match(/\[(\w+)\]/g).join('');
  const supernet = input.replace(/\[(\w+)\]/g, ' ').split(' ').filter(letters => letters.length);
  const babs = checkABA(supernet).map(aba => reverseABA(aba));

  if (babs.some(bab => hypernet.includes(bab))) {
    sslIPs.push(input);
  };

});

console.log(`There are ${sslIPs.length} IP addresses that support SSL.`);
