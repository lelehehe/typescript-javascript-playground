//array tricks 

// array with [a...z]
const a2z = Array.from('abcdefghijklmnopqrstuvwxyz'); /*?*/

const alpha = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97)); /*?*/

//[2, 4, 6]
Array.from([1, 2, 3], x => x + x); /*?*/

//remove duplicates
let arrWithDup = [1, 2, 3, 3, 4, 4, 4, 5];
const arrClean = Array.from(new Set(arrWithDup)); /*?*/

const map = new Map([[1, 2], [2, 4], [4, 8]]); /* ? */
Array.from(map); /* ? */
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

// n x n with false 
Array.from({length: 5}, (v, i) => Array(5).fill(false)); /* ? */
