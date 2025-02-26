// 1. Write an arrow function that checks if a number is odd. Print the output.
// 2. Write an arrow function that calculates the length of a string. Print the length.
// 3. Write an arrow function that capitalizes a given string. For example: If we pass "hello" as string, the output should be "HELLO". 
// Explore the method in javaScript to convert all letters to capital letters.
// 4. Write an arrow function that returns the current date in MM/DD/YYYY format. Print the output.
// 5. Write an arrow function that returns the current time in HH:MM:SS format. Print the output.
// 6. Write an arrow function that converts Fahrenheit to Celsius. Print the output.
// 7. Write an arrow function that checks if a given string is empty. 
// code for function call
//   console.log(isEmptyString("Hello"))
//   console.log(isEmptyString(""))
// 8. Write an arrow function that returns a random number between 1 and 30. Print the number.
// 9. Write an arrow function that returns the square root of a random number between 1 and 100. Print the square root. 
// Explore the method in javaScript to find square root.
// 10. Write an arrow function that changes a given string in lower case. For example: If we pass "WORLD" as string, 
// the output should be "world". Explore the method in javaScript to convert all letters to lowercase letters.

console.log("Program 1");
const printPrime = (num) => num % 2 !== 0;
console.log("Is odd no.: ", printPrime(5));
console.log("Is odd no.: ", printPrime(34));

console.log("Program 2");
const printLenthOfStr = (str) => str.length;
console.log("String length: ", printLenthOfStr("Jyoti chaudhary"));

console.log("Program 3");
const capitalizLetter = (str) => str.toUpperCase();
console.log("Capital Letters: ", capitalizLetter("hello"));

console.log("Program 4");
const printCurrentDate = () => new Date().toLocaleDateString();
console.log("Current Date: ", printCurrentDate());

console.log("Program 5");
const printCurrentTime = () => new Date().toLocaleTimeString();
console.log("Current Time: ", printCurrentTime());

console.log("Program 6");
const convertFtoC = f => (f - 32) * 5/9;
console.log(convertFtoC(56), "C");

console.log("Program 7");
const chechEmptyString = str => str.length === 0;
console.log(chechEmptyString("Hello"));
console.log(chechEmptyString(""));

console.log("Program 8");
const getRandomNum = () => Math.floor(Math.random() * 30);
console.log(getRandomNum());

console.log("Program 9");
const getSquareRoot = () => Math.floor(Math.sqrt(Math.random() * 100 ));
console.log(getSquareRoot());

console.log("Program 10");
const getLowerCaseStr = str => str.toLowerCase();
console.log(getLowerCaseStr("HELLO WORLD"))