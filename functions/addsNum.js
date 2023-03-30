/*
source: https://edabit.com/challenge/q4FkAnRFwDq5LXqkf
topics: closure , higher order functions

Write a function that returns an anonymous function, which adds n to its input

Examples
adds1 = addsNum(1)
adds1(3) ➞ 4
adds1(5.7) ➞ 6.7

adds10 = addsNum(10)

adds10(44) ➞ 54
adds10(20) ➞ 30
*/
const addsNum = (aNumber) => {
  return function (anotherNumber) {
    return aNumber + anotherNumber;
  };
};

const adds1 = addsNum(1);
console.log(adds1(3)); // ➞ 4
console.log(adds1(5.7)); // ➞ 6.7

const adds10 = addsNum(10);
console.log(adds10(44)); // ➞ 54
console.log(adds10(20)); // ➞ 30
