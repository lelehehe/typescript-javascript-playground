// from https://basarat.gitbooks.io/typescript/content/docs/getting-started.html
import * as deepEqual from 'deep-equal';

// deep equal
{
  deepEqual({ a: 123 }, { a: 123 }); /*?+*/
}

// map could pick properties
{
  type IdDisplay = {
    id: string;
    display: string;
  };
  const list: IdDisplay[] = [
    {
      id: 'foo',
      display: 'Foo Select'
    },
    {
      id: 'bar',
      display: 'Bar Select'
    }
  ];

  const fooIndex = list.map(i => i.id).indexOf('foo'); /*?+*/
}

//JSON and serialization
{
  let jsonString = JSON.stringify({
    willStay: null,
    willBeGone: undefined
  }); /*?+*/
  JSON.parse(jsonString); /*?+*/
}

//closure is awesome
{
  function createCounter() {
    let val = 0;
    return {
      increment() {
        val++;
      },
      getVal() {
        return val;
      }
    };
  }

  let counter = createCounter();
  counter.increment();
  console.log(counter.getVal()); // 1
  counter.increment();
  console.log(counter.getVal()); // 2
}

//https://basarat.gitbooks.io/typescript/content/docs/let.html
//The ES6 let keyword in a loop would have the same behavior as the previous example:
{
  var funcs = [];
  // create a bunch of functions
  for (var i = 0; i < 3; i++) {
    i;
    funcs.push(function() {
      console.log(i);
    });
  }
  // call them
  for (var j = 0; j < 3; j++) {
    funcs[j]();
  }
}

{
  var funcs = [];
  // create a bunch of functions
  for (let i = 0; i < 3; i++) {
    // Note the use of let
    funcs.push(function() {
      console.log(i);
    });
  }
  // call them
  for (var j = 0; j < 3; j++) {
    funcs[j]();
  }
}

// https://basarat.gitbooks.io/typescript/content/docs/destructuring.html
// Destructuring is useful because it allows you to do in a single line, what would otherwise require multiple lines
{
  var rect = { x: 0, y: 10, width: 15, height: 20 };

  // Destructuring assignment
  var { x, y, width, height } = rect;
  console.log(x, y, width, height); // 0,10,15,20

  rect.x = 10;
  ({ x, y, width, height } = rect); // assign to existing variables using outer parentheses
  console.log(x, y, width, height); // 10,10,15,20
}
{
  // structure
  const obj = { 'some property': 'some value' };

  // destructure
  const { 'some property': someProperty } = obj;
  console.log(someProperty === 'some value'); // true
}

// Array Destructuring
// A common programming question: "How to swap two variables without using a third one?". The TypeScript solution:
{
  var x = 1,
    y = 2;
  [x, y] = [y, x];
  console.log(x, y); // 2,1
}

// spread
{
  function foo(x, y, z) {
    x;
    y;
    z;
  }
  var args: [number, number, number] = [0, 1, 2];
  foo(...args);
}

// for loop gotcha
{
  var someArray = [9, 2, 5];
  for (var item in someArray) {
    console.log(item); // 0,1,2
  }
  for (var item1 of someArray) {
    console.log(item1);
  }
}

// https://basarat.gitbooks.io/typescript/content/docs/template-strings.html
// 🌝🌝🌝🌝🌝 🌜  🥵
// emoji: ctrl + cmd + space
{
  var lyrics = 'Never gonna give you up';
  var html = `<div>${lyrics}</div>`; /*?+*/
}

// https://basarat.gitbooks.io/typescript/content/docs/async-await.html
{
  function delayGet(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(count);
      }, milliseconds);
    });
  }

  //async function foo(): Promise<void> {
  async function foo() {
    console.log('hello');
    for (let i = 0; i < 3; i++) {
      const data = await delayGet(500, i);
      console.log(data);
    }
    console.log('world');
  }
  foo();
  console.log(typeof foo); /*?+*/
}
//https://basarat.gitbooks.io/typescript/content/docs/types/type-system.html
//Inline Type Annotation
{
  var name: {
    first: string;
    second: string;
  };
  name = {
    first: 'John',
    second: 'Doe'
  };
}

// Union Type
{
  function formatCommandline(command: string[] | string) {
    var line = '';
    if (typeof command === 'string') {
      line = command.trim();
    } else {
      line = command.join(' ').trim();
    }
    line;
    // Do stuff with line: string
  }
  formatCommandline('test here');
  formatCommandline(['test here3', 'hi4', 'there5']);
}

// Tuple Type, Type Alias 🏓
{
  var nameNumber: [string, number];

  // Okay
  nameNumber = ['Jenny', 8675309];

  // Error!
  nameNumber = ['Jenny', '867-5309'];

}
// Type Alias 🏓
{
  type StrOrNum = string | number;
  // Usage: just like any other notation
  var sample: StrOrNum;
  sample = 123;
  sample = '123';
  
  // Just checking
  sample = true; // Error!
}

// https://basarat.gitbooks.io/typescript/content/docs/enums.html