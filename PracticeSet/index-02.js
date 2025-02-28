const ages = [5, 10, 18, 30, 21, 22];
const findValue = ages.find((value) => value > 21);
console.log("Age over than 21: ", findValue)

// Ways to convert a specified number to an array of digits

//Method: 1. Using toString() and for loop
const numberToArray1 = (number) => {
    let str = number.toString();
    let result = [];
    for(let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    return result;
}
console.log("Number to Array1: ", numberToArray1(12345));

// Method: 2.Using toString(), split(), and map()
const numberToArray2 = (number) =>  {
    return number.toString().split('').map(Number);
}
console.log("Number to Array2: ", numberToArray2(123456));

// Method: 3. Using Array.from()
const numberToArray3 = (number) =>  {
    return Array.from(number.toString(), Number);
  }
  console.log("Number to Array3: ", numberToArray3(1234)); 

// Method: 4. Using Recursion
function numberToArray4(number) {
    if (number === 0) return [];
    return [...numberToArray4(Math.floor(number / 10)), number % 10];
}
let result = numberToArray4(123789)
 console.log("Result: ", result);

// Method: 5. Using reduce()
const numberToArray5 = (number) =>  {
    return number
         .toString()
         .split('')
         .reduce((acc, digit) => {
             acc.push(Number(digit));
             return acc;
         }, []);
 }
 console.log("Number to array: ", numberToArray5(198345));
 // Output: Number to array: [1, 2, 3, 4, 5, 6]

 // Sort string in Alphabetical Order: 
 
 const alphabeticalOrder = (str) => {
    return str.split("").sort().join("");
 }
 console.log("Alphabetical Order: ", alphabeticalOrder("javascript developer"));
 console.log("Alphabetical Order included symbols: ", alphabeticalOrder("javas#cri%pt"));

 const alphabeticalOrderWithoutSymbols = (str) => {
    const strRegex = str.replace(/[^a-zA-Z]/g, ' ');
    return strRegex.split("").sort().join("");
 }
 console.log("Alphabetical Order: ", alphabeticalOrderWithoutSymbols("javas@$ !cript develo34per"));
