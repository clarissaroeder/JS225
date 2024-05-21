// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * (this.radius ** 2);
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = this.swung === true ? false : true;
//   return this;
// }

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let prototype = Object.getPrototypeOf(ninjaA);
let ninjaB = Object.create(prototype);

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
