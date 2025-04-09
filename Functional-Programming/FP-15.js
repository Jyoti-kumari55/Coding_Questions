const numbers = [1, 2, 3, 4, 5];
const incrementBy3 = numbers.map((num) => num + 3);
console.log("Increment by 3: ", incrementBy3);

// How to convert object into array?

const obj1 = { a:1, b:3, c:5 };
const objArr1 = Object.values(obj1);
console.log("Object to array 1 : ", objArr1);


const objArr2 = Object.keys(obj1);
console.log("Object to array 2 :", objArr2);

const objArr3 = Object.entries(obj1);
console.log("Object to array 3 :", objArr3);

const objArr4 = Object.keys(obj1).map(key => ({ [key]: obj1[key]}));
console.log("Object to array 4 :", objArr4)