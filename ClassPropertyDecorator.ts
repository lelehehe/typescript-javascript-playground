function calcCircleParams(target: any, key: string) {
  // Property value.
  let _val = this[key];
  // Property getter.
  const getter = function() {
    return _val;
  };
  // Property setter.
  const setter = function(newVal) {
    _val = newVal;
    this['Area'] = _val * _val * Math.PI;
    this['Circumference'] = 2 * _val * Math.PI;
  };
  // Delete property.
  if (delete this[key]) {
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

class Circle {
  @calcCircleParams
  public Radius: Number;
  public Area: Number;
  public Circumference: Number;
  constructor() {}
}
let c = new Circle();
c.Radius = 1;
console.log(
  `Radius: ${c.Radius}, Area: ${c.Area}, Circumference: ${c.Circumference}`
); // Radius: 3, Area: 28.274333882308138, Circumference: 18.84955592153876
c.Radius = 5;
console.log(
  `Radius: ${c.Radius}, Area: ${c.Area}, Circumference: ${c.Circumference}`
); // Radius: 5, Area: 78.53981633974483, Circumference: 31.41592653589793


class 