// 1. Write an arrow function with two parameters that calculates the area of a rectangle. Print the output.
// 2. Write an arrow function with two parameters 15 and 5, that checks if the first number is divisible by the second number. 
// 3. Write an arrow function with two parameters 15 and 5, that calculates the difference of the two numbers. Print the output.
// 4. Write an arrow function with three parameters that concatenates three strings. Your Output should be: I am happy.
// 5. Convert the below arrow function into traditional function declaration format?
// const isBigger = (a, b) => a > b
// console.log("Is 2 bigger than 3?", isBigger(2, 3))
// 6. Convert the below function into an arrow function?
// function printProduct(a, b) {
//   return a * b
// };
// console.log("Product of two numbers: ", printProduct(2, 6));

// 7. Convert the below function into an arrow function?
//   function getGreeting(greeting, name){ 
//     return greeting + name
//   }
//   console.log(getGreeting("Hello ", "John"));

console.log("Program 1");
const rectangleArea = (a, b) => a * b
console.log("Area of Rectangle: ", rectangleArea(5,6));

console.log("Program 2");
const divisibleNum = (first, second) =>  first % second === 0 ;
console.log("Is first num is divisible by second no: ", divisibleNum(15, 5));

console.log("Program 3");
const diffOfNum = (a, b) => a - b
console.log("Difference of two number: ", diffOfNum(15, 5));

console.log("Program 4");
const concateStrings = (str1, str2, str3) => str1 + " " + str2 + " " + str3;
console.log("Concated Strings: ", concateStrings("I", "am", "happy"));

console.log("Program 5");
function isBigger(a, b) {
    if(a > b) {
        return "Yes"
    }else {
        return "No"
    }
}
 console.log("Is 2 bigger than 3?", isBigger(2, 3))

 console.log("Program 6");
const printProduct = (a, b) => a * b;
console.log("Product of two numbers: ", printProduct(2, 6));

console.log("Program 7")
const getGreeting = (greeting, name) => greeting + name;
console.log(getGreeting("Hello ", "John"));