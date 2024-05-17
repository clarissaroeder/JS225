// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// console.log(sum);

// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

function countdown(number) {
  (function recursive(n) {
    console.log(n);

    if (n === 0) {
      console.log("Done!");
    } else {
      recursive(n - 1);
    }
  })(number);
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!