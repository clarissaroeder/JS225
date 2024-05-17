function partial(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  }
}

function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  name = name[0].toUpperCase() + name.slice(1);

  console.log(`${greeting}, ${name}!`);
}

let sayHello = partial(greet, "hello");
let sayHi = partial(greet, "hi");

sayHello('Brandon');
sayHi('Sarah');

// greet('howdy', 'Joe');
// // Howdy, Joe!
// greet('good morning', 'Sue');
// // Good morning, Sue!