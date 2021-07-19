// https://javascript.info/map-set

let map = new Map();

map.set("1", "str1"); // a string key
map.set("1", "str2"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

map.get(1); /*?+*/
map.get("1"); /*?+*/
map.get(true); /*?+*/

let abc = 23;
abc;
map;

let entity = {
  a: 1, 
  c: 3,
  b: 2,
}

function foo({a, b}) {
  return a + b;
}

foo(entity); /*? */