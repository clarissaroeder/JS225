function shallowCopy(object) {
  let prototype = Object.getPrototypeOf(object);
  let copy = Object.create(prototype);
  
  Object.getOwnPropertyNames(object).forEach(key => {
    copy[key] = object[key];
  });

  return copy;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true