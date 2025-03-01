//1. Write a Program to reverse a string in JavaScript.
const reverseStr = (str) => str.split("").reverse().join("");
console.log("Reverse String using reverse() method: ", reverseStr("JavaScript Developer"));

const reverseStr2 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log("Reverse string using for loop: ", reverseStr2("JavaScript Developer"));

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
    for(let i = 0; i < num.length; i++) {
        if(num[i] > largestNum) {
             largestNum = num[i];
        }
    }
    return largestNum;
}
console.log("Largest number using for loop: ", findLargestNum([7, 12, 4, 20, 9, 16]));

const getLargestNum = (num) => {
    return Math.max(...num);
}
console.log("Largest number using Math max(): ", getLargestNum([7, 12, 4, 20, 9, 16]));

//4. How Remove the first element from an array in JavaScript.
const removeFirstElement = (num) =>  num.slice(1);
console.log("Remove element using slice(): ", removeFirstElement([7, 12, 4, 20, 9, 16]));

const removeFirstElement1 = (num) => {
    num.splice(0, 1);
    return num;
} ;
console.log("Remove element using splice(): ", removeFirstElement1([7, 12, 4, 20, 9, 16]));

const arr = [7, 12, 4, 20, 9, 16];
arr.shift();
console.log("Remove element using shift: ", arr)