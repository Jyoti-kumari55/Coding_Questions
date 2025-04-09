// How do you remove duplicates from an array?

// 	Using Set
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log("Array 1: ", uniqueArr); // Output: [1, 2, 3, 4, 5]

//	Using filter() and indexOf()
let arr1 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr1 = arr1.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log("Array 2: ", uniqueArr1); // Output: [1, 2, 3, 4, 5]

//•	Using reduce()
let arr2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr2 = arr.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);
console.log("Array 3: ", uniqueArr2); // Output: [1, 2, 3, 4, 5]

//•	Using forEach()
let arr3 = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr3 = [];
let seen = {};
arr3.forEach((value) => {
  if (!seen[value]) {
    uniqueArr3.push(value);
    seen[value] = true;
  }
});
console.log("Array 4: ", uniqueArr3); // Output: [1, 2, 3, 4, 5]

//•	Using map()
let arr4 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];
let uniqueArr4 = [...new Map(arr4.map((item) => [item.id, item])).values()];
console.log("Array 5: ", uniqueArr4); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
