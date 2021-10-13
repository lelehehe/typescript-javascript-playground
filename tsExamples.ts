{
  // https://dev.to/techygeeky/top-20-javascript-tips-and-tricks-to-increase-your-speed-and-efficiency-283g

  // reduce() with or without initial value, the initial value is optional ⭐️
  const array = [-5, -4];
  const sum = array.reduce((acc, curr) => acc + curr); /*?*/
  const sumWithInitialValue = array.reduce((acc, curr) => acc + curr, 0); /*?*/
  const max = array.reduce((acc, curr) => Math.max(acc, curr)); /*?*/
  const maxWithInitialValue = array.reduce(
    (acc, curr) => Math.max(acc, curr),
    -Infinity
  ); /*?*/ // -Infinity is the smallest number possible ⭐️

  // remove duplicates from an array
  const arrayWithDuplicates = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  const arrayWithoutDuplicates = arrayWithDuplicates.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []); /*?*/

  const arrayWithoutDuplicates1 = [...new Set(arrayWithDuplicates)]; /*?*/

  /*
  14. Nullish Coalescing Operator ⭐️ I haven't started using this yet!!!
      The nullish coalescing operator (??) is a logical operator that returns its right-hand side 
      operand when its left-hand side operand is null or undefined, and otherwise returns its 
      left-hand side operand.
   */
  const foo = null ?? "default"; /*?*/
  const bar = "bar" ?? "default"; /*?*/
  const num = null ?? 0; /*?*/
  const num1 = 0 ?? null; /*?*/

}

{
  // https://medium.com/geekculture/10-clever-javascript-tricks-that-every-developer-should-know-e0be92bcfe9

  // 1. Passing arguments as objects

}