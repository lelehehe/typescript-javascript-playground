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


//3: https://github.com/lodash/lodash/wiki/FP-Guide
// Load the fp build.
var fp = require('lodash/fp');

// Load a method category.
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var extend = require('lodash/fp/extend');

// The `lodash/map` iteratee receives three arguments:
// (value, index|key, collection)
var data2 = _.map(['6', '8', '10'], parseInt);
console.log(data2);
// ➜ [6, NaN, 2]

// The `lodash/fp/map` iteratee is capped at one argument:
// (value)
fp.map(parseInt)(['6', '8', '10']);
// ➜ [6, 8, 10]





