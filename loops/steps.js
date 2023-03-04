// ----- Prompt -----

// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n) {
  // outer loop for i = 0  going until n
  for (let i = 0; i < n; i++) {
    // create an empty row
    let row = "";
    // innerloop stuff
    // inner loop k for the row creation itself, start at 0 goes until AT i+1
    for (let k = 0; k < n; k++) {
      if (k <= i) row += "#";
      else row += " ";
      // += '#' onto the empty row string
      // += ' ' until
    }
    console.log(row);
  }
  return true;
}

// if you remove the console; it will get ride of the undefined here; like steps(2)
console.log(steps(2));
console.log(`\n`);
console.log(steps(3));

console.log(`\n`);
console.log(steps(4));

// louis's solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     console.log(row, 'row')
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       console.log(column, 'column')
//       if (column <= row) {
//         stair += '#'
//       } else {
//       stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }
