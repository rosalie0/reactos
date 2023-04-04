/*
Write a function that takes a name as a parameter 
and returns the string "Hello <name> to Techtonica" 
(Example: “Hello Cristina to Techtonica”)
*/
function one(name) {
  return `Hello ${name} to Techtonica`;
  // return "Hello " + name + " to Techtonica";
}

/*
Write a function that takes in 2 parameters named "name1" and "name2". The function should return a string: "Hello <name1> and <name2>". For example, if name1 is "Jo" and name2 is "Schmoe", the function should return "Hello Jo and Schmoe".
*/
function two(name1, name2) {
  return `Hello ${name1} and ${name2}`;
}

/*
Write a function that takes 1 parameter called "num" that is an integer. If num is greater than 5, return the string "Greater than 5". Otherwise if num is less than -10, return the string  "Less than -10". Otherwise, return the string "In the middle".
*/
function three(num) {
  if (num > 5) return "Greater than 5";
  if (num < -10) return "Less than -10";
  return "In the middle";
}

/*
Write a function that takes 2 int nums and returns true if one of them is 10 or if their sum is 10 
makes10(9, 10) output → true
makes10(9, 9) output → false
makes10(1, 9) output → true
*/
function makes10(num1, num2) {
  if (num1 === 10 || num2 === 10 || num1 + num2 === 10) return true; //returns true if one of them is 10
  return false;
}

/*
Write a function that takes 2 parameters of any data type named "varA" and "varB".
If "varA" and "varB" are the same, return the string "varA and varB are equal". 
Otherwise, return the string "varA and varB differ".
*/
function five(varA, varB) {
  if (varA === varB) return "varA and varB are equal";
  return "varA and varB differ";
}

/*
Write a function that takes no parameters. The function should use a 'while' loop to print all the integers (whole numbers) between 5 and 10 (including 5 and 10). Use console.log in the function to print the numbers.
*/
const six = () => {
  let counter = 5;
  while (counter <= 10) {
    console.log(counter);
    counter++;
  }
};
//six();

/*
Write a function that takes no parameters. The function should use a 'for' loop to print all the integers (whole numbers) between 5 and 10 (including 5 and 10).
*/
const seven = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
};
//seven();

/*
Write a function that takes no parameters. It should print all integers between 0 and 100, counting by sevens. E.g it will print 0, then 7, then 14, then 21, etc. You can choose which type of loop to use.
*/
const countBySeven = () => {
  for (let i = 0; i <= 100; i += 7) {
    console.log(i);
  }
};
countBySeven();
/* BONUS:
The new goal:
Write a function that takes in 2 parameters countBy and max. 
It should now print all integers between 0 and max, counting by countBy.
*/
const countByNumber = (countBy, max) => {
  for (let i = 0; i <= max; i += countBy) {
    console.log(i);
  }
};
countByNumber(2, 10);

/*
Write a function that takes 1 parameter which is an integer less than 100. In the function, write a loop (your choice which type) that prints the integers from 0 to 100. When it gets to the number passed into the function, it should print "is the magic number!". For example, if the parameter value is 2, the function should print:	
0
1
2 is the magic number!
3
(etc...)
*/

/*
Write a function that takes in one parameter which is an array. The function should iterate through each item in the array and print each index and item. For example, if the input is ["potato", 4, "Hello World"], the function should print:
Item #0 is potato
Item #1 is 4
Item #2 is Hello World 
*/

/*
Write a function that takes in one parameter which is an object. If the object has a property called "firstName" and has a property called "lastName", return the string "Full name is: <firstName> <lastName>" (fill in actual name values). Otherwise, return the string 
Cannot compute name".
*/
const final = (person) => {
  if (person.hasOwnProperty("firstName") && person.hasOwnProperty("lastName"))
    return `Full name is: ${person.firstName} ${person.lastName}`;
  return "Cannot compute name";
};

const rose = { firstName: "rose", lastName: "newman" };
console.log(final(rose));
console.log(final({ key: "value" }));
