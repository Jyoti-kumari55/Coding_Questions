//1. Write a Program to reverse a string in JavaScript.
const reverseStr = (str) => str.split("").reverse().join("");
console.log(
  "Reverse String using reverse() method: ",
  reverseStr("JavaScript Developer")
);

const reverseStr2 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(
  "Reverse string using for loop: ",
  reverseStr2("JavaScript Developer")
);

//2. Write a Program to check whether a string is a palindrome string.
const isPallindromStr = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (reversedStr === str) {
    return "Yes it is a Pallindrome.";
  } else {
    return "Not a Pallindrome.";
  }
};
console.log(isPallindromStr("GFG"));
console.log(isPallindromStr("Hello"));

//3. Find the largest number in an array in JavaScript.
const findLargestNum = (num) => {
  let largestNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largestNum) {
      largestNum = num[i];
    }
  }
  return largestNum;
};
console.log(
  "Largest number using for loop: ",
  findLargestNum([7, 12, 4, 20, 9, 16])
);

const getLargestNum = (num) => {
  return Math.max(...num);
};
console.log(
  "Largest number using Math max(): ",
  getLargestNum([7, 12, 4, 20, 9, 16])
);

//4. How Remove the first element from an array in JavaScript.
const removeFirstElement = (num) => num.slice(1);
console.log(
  "Remove element using slice(): ",
  removeFirstElement([7, 12, 4, 20, 9, 16])
);

const removeFirstElement1 = (num) => {
  num.splice(0, 1);
  return num;
};
console.log(
  "Remove element using splice(): ",
  removeFirstElement1([7, 12, 4, 20, 9, 16])
);

const arr = [7, 12, 4, 20, 9, 16];
arr.shift();
console.log("Remove element using shift: ", arr);

//5. What will be the output of the given code?
console.log("When we subtract a number from string: ", "6" - 1);
console.log("When we Add a number to string: ", "6" + 1);

console.log("Output: ", null == undefined);

//6.Write a Program to check if a number is prime or not?
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }
  return `${num} is a prime number.`;
}
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(12));

//7. Write a Program to print Fibonacci sequence up to n terms?
function getFibonacciSeq(num) {
  console.log("Fibonacci Sequence: ");
  let num1 = 0,
    num2 = 1,
    nextNum;
  for (let i = 1; i <= num; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
}
getFibonacciSeq(10);

//8. Write a Program to find factorial of a number?
function getFactorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(`Factorial : `, getFactorial(6));

//9. Write a Program to print the frequency of elements in an array?
const feqNum = [1, 1, 2, 3, 5, 3, 4, 9, 3, 1, 8, 9, 5, 6];
function getFrequencyOfNum(arr) {
  const feq = {};
  for (let i = 0; i < arr.length; i++) {
    if (feq[arr[i]]) {
      feq[arr[i]] += 1;
    } else {
      feq[arr[i]] = 1;
    }
  }
  return feq;
}
console.log("Array frequency: ", getFrequencyOfNum(feqNum));