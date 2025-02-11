// Given an array: [5, 12, 7, 25, 18, 3]. Solve the following questions in a nodejs REPL and make your submission.
// 1. Write a function that prints the given array.
// 2. Write a function that returns a new array with 10 added to each number. Use for-loops. Print the result.
// 3. Write a function to convert all odd numbers in the array to the nearest even number by adding 1 to them. Print the result. 
// Take the original array as input.
// 4. From the given array, create a new array with numbers divisible by 2. Print the new array. Take the original array as input.
// 5. Write a function to print the sum of all numbers in the array. Take the original array as input.
// 6. Write a function to print the sum of odd numbers and sum of all even numbers in the given array. Take the original array as input.

console.log("Program 1");
const arr = [5, 12, 7, 25, 18, 3]
const printArr = (arr) => {
    for(let i = 0;  i < arr.length; i++) {
       console.log(arr[i]);
    }
}
printArr(arr);

console.log("Program 2");
const printNewArr = (arr) => {
    const newArr = [];
    for(let i = 0;  i < arr.length; i++) {
       newArr.push(arr[i] + 10);
    }
    return newArr;
}
console.log("New Array: " , printNewArr(arr));


console.log("Program 3");
const convertOddToEven = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            newArr.push(arr[i] + 1) ;
        }else {
             newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(convertOddToEven(arr));

console.log("Program 4");
const getDivisibleBy2 = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("Divisible by 2: ", getDivisibleBy2(arr));

console.log("Program 5");
const getSumOfArr = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of array: ", getSumOfArr(arr));

console.log("Program 6");
let oddSum = 0;
let evenSum = 0;
const sumOfEvenAndOdd = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ) {
            evenSum += arr[i];
        }else {
            oddSum += arr[i];
            console.log()
        }
    }
  return "Sum of Even no.: " + evenSum + "\nSum of Odd no.: " + oddSum;
}
console.log(sumOfEvenAndOdd(arr));