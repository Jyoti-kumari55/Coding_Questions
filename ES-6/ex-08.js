// 1. Write an arrow function that takes a person's firstName and lastName and returns an object with properties for firstName and lastName.
// 2. Write an arrow function that takes a string and returns an object with properties for string length and its uppercase version.
// 4. Write an arrow function that takes two words and returns an object with properties for concatenation and character count.
// 5. Write an arrow function that takes a radius and returns an object with properties for circumference and area of a circle. 
// Use Math.PI method.
// 6. Write an arrow function that takes two numbers and returns an object with properties for their difference and quotient.
// console.log(calculateDifferenceAndQuotient(10, 2)
// 7. Write an arrow function that takes a sentence and returns an object with property for word count in that sentence.
// console.log(analyzeSentence("JavaScript is fun"))
// 8. Write an arrow function that takes a number and returns an object with properties for its square and cube.
// console.log(calculateSquareAndCube(4))
// 9. Write an arrow function that takes a number and returns an object indicating whether it's positive or negative.
// console.log(checkNumber(-7))
// console.log(checkNumber(5))


console.log("Program 1");
const printFullname = (firstName, lastName) => ({firstName: firstName, lastName: lastName});
console.log(printFullname("Jyoti", "chaudhary"));

console.log("Program 2");
const getStrings = (str) => ({length: str.length, upperCase: str.toUpperCase()});
console.log(getStrings("Jyoti"));

console.log("Program 3");
const printCharCount = (word1, word2) => ({concatenation: word1 + " " + word2, charCount: word1.length + word2.length});
console.log(printCharCount("Hello", "World"));

console.log("Program 4");
const calculateCircleProperties = (r) => ({ circumference: (2 * Math.PI * r).toFixed(4), area: (Math.PI * r * r).toFixed(4)});
console.log(calculateCircleProperties(5));

console.log("Program 5");
const calculateDifferenceAndQuotient = (num1, num2) => ({ difference: num1 - num2, quotient: num1 / num2});
console.log(calculateDifferenceAndQuotient(10, 2));

console.log("Program 6");
const analyzeSentence = (sentence) => ({ wordCount: sentence.split(" ").length});
console.log(analyzeSentence("JavaScript is fun"))

console.log("Program 7");
const calculateSquareAndCube = (side) => ({ square: side * side, cube: Math.pow(side, 3)});
console.log(calculateSquareAndCube(4));

console.log("Program 8");
const checkNumber = (num) => ({ isPositive: num > 0, isNegative: num < 0});
console.log(checkNumber(-7))
console.log(checkNumber(5))