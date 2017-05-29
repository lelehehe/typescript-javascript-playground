// The config also be placed into package.json or global quokka config,
// see https://quokkajs.com/docs/configuration.html
({
  babel: true
})

import value from './myModule';

var _ = require('lodash');


//sample code: 
//http://pragmatists.pl/blog/2017/05/higher-order-functions-in-lodash/

//1. partial 
function divide(a, b) {
  return a / b;
}

var half = _.partial(divide, _, 2);

var testResult = half(3);


var cities = require('./cities.json');

//2. old way to deal with data transform using linq style
var data = _(cities)
  .filter(c => c.population >= 5000000)
  .countBy(c => c.country)
  .toPairs()
  .map(c => _.zipObject(['country', 'numOfCities'], c))
  .orderBy(c => c.numOfCities, 'desc')
  .take(5)
  .value();

console.log(data);