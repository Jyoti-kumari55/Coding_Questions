//How do you merge two arrays and remove duplicates?
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let mergedArr = [...array1, ...array2];
console.log("Merged Array: ", mergedArr);
let removeDuplicateArr = [...new Set([...array1, ...array2])];
console.log("Merged Array remove duplicates: ", removeDuplicateArr);

//What is the difference between deep copy and shallow copy of an array?
let original = [{ a: 1 }, { b: 2 }];
const shallowCopy = [...original];
const deepCopy = JSON.parse(JSON.stringify(original));

original[0].a = 10;
console.log("Shallow Copy: ", shallowCopy[0].a);
console.log("Deep Copy: ", deepCopy[0].a);

//How can you find the intersection of two arrays?
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
const getIntersectionOfArr = arr1.filter((value) => arr2.includes(value));
console.log("Intersection value between two arrays: ", getIntersectionOfArr);

//How do you remove falsy values from an array?
let mixedArray = [0, 1, false, 2, "", 3, null, "a", undefined];
const removeFalsyValues = mixedArray.filter(Boolean);
console.log("Remove falsy values from an array: ", removeFalsyValues);

// How can you flatten a nested array into a single flat array?
const arr = [1, [2, 3], [4, [5, 6]]];
const flatArr = arr.flat(Infinity);
console.log("A single array: ", flatArr);

//Write a function that swaps the first two elements in a given array (solve with destructing);
const swapArray = [3, 5, 1, 4, 2];
function getSwappedArr([first, second, ...rest]) {
  return [second, first, ...rest];
}
console.log("Swapped elements of array: ", getSwappedArr(swapArray));

const person = {
  firstName: "Mary",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

setTimeout(person.display, 3000);

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const getLengthOfStr = strings.reduce(
  (fruit, currValue) => currValue.length + fruit,
  0
);
console.log("Length of strings: ", getLengthOfStr);

const numbers = [1, 2, 3, 4, 5];
const getNum = numbers.reduce((num, currNum) => currNum * currNum + num, 0);
console.log("Square num sum: ", getNum);

const stringsName = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
const getStringLongestName = stringsName.reduce(
  (str, currName) => (currName.length > str.length ? currName : str),
  " "
);
console.log("Longest String name: ", getStringLongestName);

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
const getHighestAge = people.reduce((person, currPerson) =>
  currPerson.age > person.age ? currPerson : person
).name;
console.log("The name of oldest person name: ", getHighestAge);

const peoples = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];
const getAverageAge = peoples.reduce((person, currPerson) => currPerson.age + person, 0);
console.log("Peoples average age: ", getAverageAge / peoples.length);

const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
];
const getMostExpensiveProd = products.reduce((prod, curr) => curr.price > prod.price ? curr : prod);
console.log(getMostExpensiveProd);

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
const getFruitsNum = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log("Fruits Occurrence: ", getFruitsNum);