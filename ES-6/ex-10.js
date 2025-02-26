//1. Write an arrow function that uses the rest parameter to log the first element and the rest of the elements in an array.

console.log("Program 1")
const logFirstAndRest = (a, ...rest) => {
  console.log(a);
  console.log(rest);
}
logFirstAndRest(1, 2, 3, 4, 5);
console.log("\n");

//2. Write an arrow function that uses the rest parameter to log the first and second element and the rest of the elements in an array.
console.log("Program 2")
const logFirstAndSecond = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
}
logFirstAndSecond(12, 22, 33, 44, 55);
console.log("\n");

//3. Write an arrow function that uses the rest parameter to calculate the product of numeric values.
console.log("Program 3")
const calculateProduct = (...num) => {
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  return product
}
console.log(calculateProduct(2, 3, 4));
 console.log(calculateProduct(5, 2, 1, 3));
console.log("\n");

//4. Write an arrow function that uses the rest parameter to concatenate an arbitrary number of words into a sentence.
console.log("Program 4");
const createSentence = (...str) => str.join(" ");
console.log(createSentence("JavaScript", "is", "awesome")); // Output: JavaScript is awesome
console.log("\n");

//5. Write an arrow function that uses the rest parameter to calculate the sum of numeric values.
console.log("Program 5");
const findSum = (...num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
      }
      return sum;
}
console.log("Sum of Numbers: ", findSum(2, 4, 6, 8, 10)); 
console.log("\n");

// 6. Write an arrow function that uses the rest parameter to check if a specific value is present in an array. 
// The first parameter that the function takes is the value that you have to find in the array.

console.log("Program 6")
const containsValue = (...value) => {
  for(let i = 0; i <= value.length; i++){
    if(value[i] === 3){
      return true;
    }else {
      return false;
    }
  }
}
console.log(containsValue(3, 1, 2, 5, 4));
console.log(containsValue("apple", "banana", "orange"));
console.log("\n");

//7. Write an arrow function that uses the rest parameter to find the average of an arbitrary number of numeric values.
console.log("Program 7")
const calculateAverage = (...average) => {
  let sum = 0;
  for(let i = 0; i <average.length; i++){
    sum += average[i];
  }
  return sum / average.length;
}
console.log(calculateAverage(10, 5, 15)); 
 console.log(calculateAverage(2, 4, 6, 8)); 
