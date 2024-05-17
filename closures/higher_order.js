// function makeCounterLogger(num) {
//   return function(anotherNum) {
//     if (anotherNum > num) {
//       for (let i = num; i <= anotherNum; i++) {
//         console.log(i);
//       }
//     } else {
//       for (let i = num; i >= anotherNum; i--) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
// countlog(2);
// // 5
// // 4
// // 3
// // 2

function makeList() {
  let todos = [];

  return function(item) {
    if (item === undefined) {
      if (todos.length === 0) {
        console.log("The list is empty.");
      } else {
        todos.forEach(item => console.log(item));
      }
    } else {
      if (todos.includes(item)) {
        let idx = todos.indexOf(item);
        todos.splice(idx, 1);

        console.log(item + ' removed!');
      } else {
        todos.push(item);
        console.log(item + ' added!');
      }
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book