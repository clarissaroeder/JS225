function makeMultipleLister(number) {
  return function() {
    for (let i = number; i <= 100; i += number) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91