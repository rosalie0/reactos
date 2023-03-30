/*
Source: https://edabit.com/challenge/PwpJNJiysvq3AuYJ8
A bartender is writing a simple program to determine whether he should serve drinks to someone.
He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session,
create a function which returns whether he should serve drinks.

Examples
shouldServeDrinks(17, true) ➞ false
shouldServeDrinks(19, false) ➞ true
shouldServeDrinks(30, true) ➞ false
*/
const shouldServeDrinks = (customerAge, isOnBreak) => {
  // if not on break and customerAge is greater than or equal to 18, return true
  return !isOnBreak && customerAge >= 18;
  // else false
};
console.log(shouldServeDrinks(17, true)); // false
console.log(shouldServeDrinks(19, false)); // true
console.log(shouldServeDrinks(30, true)); // false
