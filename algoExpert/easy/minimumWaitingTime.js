// https://www.algoexpert.io/questions/minimum-waiting-time
/*
SCRATCHPAD:
[1, 2, 2, 3, 6]

0  1  1+2 1+2+2 1+2+2+3
0  1   3   5      8 

i=0 accum=0 return 0
i=1 accum=0 return 1
i=2 accum=1 return 3
i=3 accum=3 return 5
i=4 accum=5 return 8

i need to put all those return n values into their own array to sum them up later!
this will be the accumulations. array.
*/

function minimumWaitingTime(queries) {
  // sort min to max
  const accumulations = [];
  const sorted = queries
    .sort((a, b) => a - b)
    .reduce((accum, ele, i, arr) => {
      if (i === 0) {
        accumulations.push(0);
        return 0;
      }
      accumulations.push(accum + arr[i - 1]);
      return accum + arr[i - 1];
    }, 0);

  return accumulations.reduce((sum, n) => sum + n);
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
