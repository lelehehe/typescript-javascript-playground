// from https://basarat.gitbooks.io/typescript/content/docs/getting-started.html

// generic
{
  class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
  }

  let queue = new Queue<number>();
  queue.push(3);
  let data = queue.pop();
  console.log('data is ', data);
}
// reverse
{
  function reverse<T>(input: T[]): T[] {
    let reversed: T[] = [];
    for (let i = input.length - 1; i >= 0; i--) {
      reversed.push(input[i]);
    }
    return reversed;
  }
  reverse([3, 4, 5]); /*?+*/
}

//https://basarat.gitbooks.io/typescript/content/docs/types/type-compatibility.html
{
  interface Point2D {
    x: number;
    y: number;
  }
  let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
  iMakePoint2D(); /*?+*/
}

// Exhaustive check
{
  function foo(x: string | number): boolean {
    if (typeof x === 'string') {
      return true;
    } else if (typeof x === 'number') {
      return false;
    }

    // Without a never type we would error :
    // - Not all code paths return a value (strict null checks)
    // - Or Unreachable code detected
    // But because TypeScript understands that `fail` function returns `never`
    // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
    return fail('Unexhaustive!');
  }

  function fail(message: string): never {
    throw new Error(message);
  }
}

// {}
// An Object in JavaScript (and hence TypeScript) can be accessed with a string to hold a reference to any other JavaScript object.
{
  class Foo {
    constructor(public message: string) {}
    log() {
      return this.message;
    }
  }

  let foo: any = {};
  foo['Hello'] = new Foo('World');
  foo['Hello'].log(); /*?+*/
}

// TypeScript Index Signature
{
  let foo: { [index: string]: { message: string } } = {};
  typeof foo; /*?+*/
  foo.toString(); /*?+*/

  /**
   * Must store stuff that conforms to the structure
   */
  /** Ok 🏓🏓 */
  foo['a'] = { message: 'some message' };
  /** Error: must contain a `message` or type string. You have a typo in `message` */
  foo['a'] = { messages: 'some message' };
}

// Capturing Key Names 🏓
{
  const colors = {
    red: 'red',
    blue: 'blue'
  };
  type Colors = keyof typeof colors;

  let color: Colors; // same as let color: "red" | "blue"
  color = 'red'; // okay
  color = 'blue'; // okay
  color = 'anythingElse'; // Error
}

// currying
{
  // A curried function
  let add = (x: number) => (y: number) => x + y;

  // Simple usage
  add(123)(456); /*?+*/

  // partially applied
  let add123 = add(123);

  // fully apply the function
  add123(456);
}
