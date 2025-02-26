//1. Write an arrow function that creates an object using shorthand property values.

const createPerson = (name, age) => {
    return { name, age}
}
console.log(createPerson("Alice", 25)); // Output: { name: "Alice", age: 25 }
console.log(createPerson("Bob", 30)); // Output: { name: "Bob", age: 30 }

//Write an arrow function that creates an object using shorthand property values.
const createBookObj = (title, author, genre) => {
    return { title, author, genre }
}
console.log(createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic"));
// Output: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" }
console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"));

// You are given two variables. Create an object using shorthand property values and print it.
let aaloo = 1;
let bhaaloo = 2;
const calculateObj = (aaloo, bhaaloo) => {
  return ({aaloo, bhaaloo})
}
console.log(calculateObj(aaloo, bhaaloo));

// Write an arrow function `calculateArea` that takes the dimensions of a rectangle (length and width) and 
// returns an object with properties for the length, width, and area, using shorthand property values.

const calculateArea = (length, width) => {
    return {length, width, area: length * width}
}
console.log(calculateArea(5, 8));

//Write an arrow function `printObjOfArrays` that takes two arrays and 
// returns an object with properties for each array, using shorthand property values.

const printObjOfArrays = (arr1, arr2) => {
    return {arr1, arr2}
}
console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));

//Write an arrow function createTriangle that takes the lengths of three sides of a triangle and returns an object with properties for each side length and the triangle's perimeter, 
// using shorthand property values.

const createTriangle = (s1, s2, s3) => {
    return {side1: s1, side2:s2, side3: s3, perimeter: s1+s2+s3}
}
console.log(createTriangle(3, 4, 5));

//. Write a function `displayWeather` that uses template literals to 
// display the weather forecast for a given city and temperature.

const displayWeather = (city, temp) => {
    return `The weather in ${city} is ${temp} degrees Celsius.`
}
console.log(displayWeather("New York", 20));
console.log(displayWeather("London", 15));

//Write a function `displayBookSummary` that uses template literals to 
// display a summary of a book, including its title, author, and genre.

const displayBookSummary = (title, author, genre) => {
    return ` The book "${title}" written by ${author} belongs to the ${genre} genre.`
}
console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"));

// Write a function `constructEmail` that uses template literals to construct an
//  email with a subject and recipient.

const constructEmail = (to, subject) => {
    return `To: ${to} \nSubject: ${subject} \n\nDear ${to},  \n\n...`

}
console.log(constructEmail("alice@example.com", "Meeting Reminder"));

//Write an arrow function that takes any number of strings and concatenates them into one string.
const concatenateStrings = (...str) => {
    return str.join(" ")
}
console.log(concatenateStrings("Hello", "world", "!")); 
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn.")); 

//Write an arrow function that takes two arrays and merges them into one.
const mergeArrays = (arr1, arr2) => ([...arr1, ...arr2]);
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));

//Write an arrow function that uses the rest parameter to concatenate strings with a specified separator.
const concatenateWithSeparator = (separator, ...str) => {
    return str.join(separator)
}
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow')); 

//Write an arrow function that takes an object and extracts its properties using destructuring.
const extractObjectValues = ({name, age}) => {
    return `Name: ${name}, Age: ${age}`
}
console.log(extractObjectValues({ name: "Alice", age: 25 }));
console.log(extractObjectValues({ name: "Bob", age: 30 }));

//Write an arrow function that takes an array and extracts its elements using destructuring.
const extractArrayValues = ([...arr]) => {
    return `Values: ${arr}`
}
console.log(extractArrayValues([1, 2, "Hello", 3]));
console.log(extractArrayValues(["apple", "orange", "banana"]));

//Write an arrow function that takes a nested object and extracts values using destructuring.
const extractNestedValues = ({data: {firstName, lastName, age}}) => {
    return `${firstName} ${lastName} will be ${age} years old in five years.`
}
console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}));
console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}));

//Write a function that takes an object, provides default values, and extracts their values using restructuring.
const printUserDetails = ({name, username="anonymous", post="Hello World"}) => {
    return `${username} posted "${post}.`
}
console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }));
console.log(printUserDetails({}));

//9. Write an arrow function that uses template literals and the ternary 
// operator to check if a given number is even or odd. If the number is even, display the message "It's an even number." 
// If it's odd, display the message "It's an odd number."

const checkEvenOdd = (num) => {
    if(num % 2 === 0){
        return `${num} is even number.`
    }else {
        return `${num} is odd number.`
    }
}
console.log(checkEvenOdd(8));  
console.log(checkEvenOdd(15));