const numbers = [1, 2, 3, 4, 5];
const numIncreaseBy3 = numbers.map((num) => num + 3);
console.log("Number increased by 3: ", numIncreaseBy3);

const myArray = ["apple", "banana", "cherry"];
const capitalizeArr = myArray.map((arr) => arr.toUpperCase());
console.log("Capitalize the array: ", capitalizeArr);

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const getAges = people.map((people) => people.age);
console.log("People Ages: ", getAges);

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
const getProductNames = products.map((prod) => prod.name);
console.log("Product names: ", getProductNames);

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
const getFruitsLengthBy5 = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits length greater than 5: ", getFruitsLengthBy5);

const numberss = [1, 2, 30, 4, 15];
const multipleOf3Or5 = numberss.filter((num) => num % 3 === 0 && num % 5 === 0);
console.log("Multiple of 3 and 5: ", multipleOf3Or5);

const peoples = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];
const filteredPeople = peoples.filter((person) => person.age > 30);
console.log("Get person whose age is greated than 30: ", filteredPeople);

const employees = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredEmployees = employees.filter((emp) => emp.city === "Indore" && emp.age > 70);
console.log("Filtered employees: ", filteredEmployees);

//How can you add elements to an array?
numberss.push(34);
console.log("Add the element to array using push: ", numberss);
numberss.unshift(-23);
console.log("Add the element to array using unshift: ", numberss);

//How do you check if a variable is an array?
let fruitss = ['apple', 'banana', "cherry", "watermelon", "pineapple"];
console.log(Array.isArray(fruitss));

let findFruit = "cherry";
console.log(Array.isArray(findFruit));

//How do you iterate over an array?
for(let i = 0; i < fruitss.length; i++) {
    console.log(fruitss[i]);
}

// Use forEach()
fruitss.forEach((fruit, index) => {
    console.log(`Fruits at index ${index} is ${fruit}`);
});

//How do you concatenate two arrays?
let newFruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'mango'];
let allFruits = newFruits.concat(moreFruits);
console.log("All fruit are: ", allFruits);

let allFruitss = [...newFruits, ...moreFruits];
console.log("All fruit are: ", allFruitss);
