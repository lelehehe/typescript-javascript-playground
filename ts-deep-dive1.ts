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
{
  enum Tristate {
    False = 1,
    True,
    Unknown
  }
  console.log(Tristate[0]); // undefined
  console.log(Tristate['False']); // 1
  console.log(Tristate[Tristate.False]); // "False"
}
// very good enum usage
{
  enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1
  }
  type Animal = {
    flags: AnimalFlags;
  };

  function printAnimalAbilities(animal: Animal) {
    var result = '';
    if (animal.flags & AnimalFlags.HasClaws) {
      result += AnimalFlags[AnimalFlags.HasClaws] + ' ';
    }
    if (animal.flags & AnimalFlags.CanFly) {
      result += AnimalFlags[AnimalFlags.CanFly] + ' ';
    }
    if (animal.flags == AnimalFlags.None) {
      result += AnimalFlags[AnimalFlags.None] + ' ';
    }
    return result; /*?+*/
  }

  let animal: Animal = { flags: AnimalFlags.None };
  printAnimalAbilities(animal); // nothing
  animal.flags |= AnimalFlags.HasClaws;
  printAnimalAbilities(animal); // animal has claws
  animal.flags &= ~AnimalFlags.HasClaws;
  printAnimalAbilities(animal); // nothing
  animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
  var result = printAnimalAbilities(animal);
  result; /*?+*/
}
// add function to enum
{
  enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  namespace Weekday {
    export function isBusinessDay(day: Weekday) {
      switch (day) {
        case Weekday.Saturday:
        case Weekday.Sunday:
          return false;
        default:
          return true;
      }
    }
  }

  const mon = Weekday.Monday;
  const sun = Weekday.Sunday;
  console.log(Weekday.isBusinessDay(mon)); // true
  console.log(Weekday.isBusinessDay(sun)); // false
}

{
  var sampleVariable: { bar: number };
  sampleVariable = { bar: 2 }; /*?+*/
}

// callable https://basarat.gitbooks.io/typescript/content/docs/types/callable.html
{
  interface Overloaded {
    (foo: string): string;
    (foo: number): number;
  }

  // example implementation
  function stringOrNumber(foo: number): number;
  function stringOrNumber(foo: string): string;
  function stringOrNumber(foo: any): any {
    if (typeof foo === 'number') {
      return foo * foo;
    } else if (typeof foo === 'string') {
      return `hello ${foo}`;
    }
  }

  const overloaded: Overloaded = stringOrNumber;

  // example usage
  const str = overloaded(''); /*?+*/
  const num = overloaded(123); /*?+*/
}

// arrow syntax
{
  const simple: (x: number) => string = x => {
    return x.toString();
  };
  simple(3); /*?+*/
}

//Type Assertion https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
// as foo vs. <foo>
{
  interface Foo {
    bar: number;
    bas: string;
  }
  var foo = {} as Foo;
  // ahhhh .... forget something?
}
// https://basarat.gitbooks.io/typescript/content/docs/types/freshness.html
//TypeScript provides a concept of Freshness (also called strict object literal checking) to make it easier to type check object literals that would otherwise be structurally type compatible
{
  function logName(something: { name: string }) {
    console.log(something.name);
  }

  var person = { name: 'matt', job: 'being awesome' };
  var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
  var job = { name: 'matt', job: 'being awesome' };
  var random = { note: `I don't have a name property` };

  logName(person); // okay
  logName({ name: 'matt', job: 'being awesome' });
  logName(animal); // okay
  logName(random); // Error: property `name` is missing
}

// Allowing extra properties
{
  // A type can include an index signature to explicitly indicate that excess properties are permitted:
  var y: { foo: number; [x: string]: any };
  y = { foo: 1, baz: 2 }; /*?+*/
}

// typeof
// affect the definitation inside sub-block 🏓
{
  function doSomething(x: number | string) {
    if (typeof x === 'string') {
      // Within the block TypeScript knows that `x` must be a string 🏓🏓🏓
      // console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
      return x.substr(1); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
  }
  doSomething('abc'); /*?+*/
}

//
{
  interface A {
    x: number;
  }
  interface B {
    y: string;
  }

  function doStuff(q: A | B) {
    if ('x' in q) {
      return q.x;
    } else {
      return q.y;
    }
  }
  doStuff({ x: 12 }); /*?+*/
  doStuff({ y: 'abc' }); /*?+*/
}

{
  type CardinalDirection = 'North' | 'East' | 'South' | 'West';

  function move(distance: number, direction: CardinalDirection) {
    // ...
  }

  move(1, 'North'); // Okay
  move(1, 'Nurth'); // Error!
}
// interesting way to set up type 🏓
{
  type OneToFive = 1 | 2 | 3 | 4 | 5;
  type Bools = true | false;

  const good: OneToFive = 4;
  const bad: OneToFive = 6;
}

// mark index signatures as readonly 🏓
{
  //x:number also same result
  interface Foo {
    readonly [x: string]: number;
  }
  let foo: Foo = { bar: 11, baz: 33 };
  foo.blah = 4;
}

// ReadonlyArray
{
  let foo: ReadonlyArray<number> = [1, 2, 3];
  foo.push(4);
}

// Automatic Inference
{
  class Person {
    firstName: string = 'John';
    lastName: string = 'Doe';
    anotherOne: string;
    get fullName() {
      return this.firstName + this.lastName;
    }
  }

  const person = new Person();
  console.log(person.fullName); // John Doe
  person.fullName = 'Dear Reader'; // Error! fullName is readonly
  person.anotherOne = 'foo';
}

// generic
{
  class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
  }

  let queue = new Queue<number>();
  queue.push(3);
  let a = 'test';
  a;
  let data = queue.pop(); 
  console.log('data is ', data);
}
