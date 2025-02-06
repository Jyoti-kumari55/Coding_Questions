//1. Write an arrow function that creates a copy of an array and appends a new element to it using the spread operator.
const copyAndAppend = (arr, element) =>  [...arr, element];
console.log(copyAndAppend(["apple", "orange"], "banana"));

//2. Write an arrow function that creates a copy of an array and appends a new element to it using the spread operator.
const copyAndAdd = (arr, num) => [...arr, num];
console.log(copyAndAdd([10, 20], 30));

//3. Write an arrow function to merge two arrays.
const mergeNameArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

//5. Write an arrow function that creates a copy of an object and adds a property using the spread operator.
const copyPersonObject = (obj, key, value) => ({...obj, [key]: value}) ;
console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "Johnson"));

//6. Write an arrow function that creates a copy of an object and adds a property using the spread operator.
const copyEmployeeObject = (obj, key, value) => ({...obj, [key]: value});
console.log(copyEmployeeObject({employeeId: 243, name: "Bob", age: 20}, "department", "IT department"));

//7. Write an arrow function to merge two objects.
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({ x: "hello" }, { y: "world" })); 

//8.  Write an arrow function to merge three arrays using the spread operator.
const mergeThreeArray = (arr1, arr2, arr3) => ([...arr1, ...arr2, ...arr3]);
console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));