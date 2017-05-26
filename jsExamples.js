// The config also be placed into package.json or global quokka config,
// see https://quokkajs.com/docs/configuration.html
({
  babel: true
})

import value from './myModule';

var _ = require('lodash');

function divide(a, b) {
  return a / b;
}

var half = _.partial(divide, _, 2);

var res = half(22222);
res; 

var test = res + 3;
res;
test;
console.log(res);

var result = _.drop([1, 2, 3]);

console.log(result);

console.log(value);