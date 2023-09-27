const _ = require('lodash');

// Nosso "sistema"
const a  = [1, 2, 3, 4, 5];
const b =  [1, 2, 3, 7, 9];

// utilizando função do pacote lodash que reotrna diferença
const difference = _.difference(b, a);
console.log(difference);