//1. Given an array of integers, use .map() to subtract the square of each number from that number.
const numsArray = [10, 5, 8, 4, 6];
const subtractSqrNum = numsArray.map((num) => num - num * num);
console.log(subtractSqrNum);

//2. Given an array of numbers, use .map() to double the negative numbers and then subtract it from the original number.
const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const doubleNumArr = numbsArray.map((num) => (num < 0 ? num - num * 2 : num));
console.log(doubleNumArr);

//3. Given an array of sentences,  create an array with each sentence followed by the count of words in it.

const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time.",
];
const sentenceWithCount = sentencesArray.map(
  (sentence) => sentence + sentence.split(" ").length
);
console.log(sentenceWithCount);

//4. Given an array of objects representing cars, extract the brands of car.

const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" },
];
const extractBrands = cars.map((car) => car.brand);
console.log(extractBrands);

//5. Given an array of objects representing movies, extract the genres.

const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" },
];
const extractGeners = movies.map((movie) => movie.genre);
console.log(extractGeners);

//6. Given an array of objects representing furniture with sizes, increase the dimensions by 10%
const furniture = [
  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 },
];
const increaseDimensions = furniture.map((size) => ({
  ...size,
  width: (size.width + size.width * (10 / 100)).toFixed(1),
  height: (size.height + size.height * (10 / 100)).toFixed(1),
}));
console.log(increaseDimensions);

//7. Given an array of objects representing products with prices, add a new property indicating whether the product is affordable (price less than or equal to 100)
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 },
];
const addNewProperty = products.map((product) => ({
  ...product,
  affordable: product.price <= 100 ? true : false,
}));
console.log(addNewProperty);

//8. Given an array of numbers, filter the even negative numbers into a new array
const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
const filteredEvenNegNum = numbers.filter((num) => num % 2 === 0 && num < 0);
console.log(filteredEvenNegNum);

//9. Given an array of objects representing students, filter the students who scored more than 70 in their exams, are active participants, and belong to either the "Math" or "Science" club.

const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
];
const filteredStudent = students.filter(
  (student) =>
    student.score > 70 &&
    student.activeParticipant &&
    (student.club === "Math" || student.club === "Science")
);
console.log(filteredStudent);

//10. Given an array of words, filter the words that contain the letter 'a' and have more than 5 characters into a new array.
const words = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "pear",
  "orange",
  "strawberry",
];
const filteredAContainWord = words.filter(
  (word) => word.includes("a") && word.length > 5
);
console.log(filteredAContainWord);

//11. Write a function that takes an array of objects representing books with title, author, and genre.
// The function should return a new array containing only the books from the "Fantasy" genre.

const books = [
  {
    title: "Harry Potter and the Sorcerers Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
  },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Drama" },
  { title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
];

const filteredBooks = books.filter((book) => book.genre === "Fantasy");
console.log(filteredBooks);

//12. Given an array of objects representing movies, filter out the movies released before 2010, with a rating less than 8.0, and not in the "Action" or "Adventure" genre.

const moviesData = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" },
];
const filteredOutMovies = moviesData.filter(
  (movie) =>
    movie.year > 2010 &&
    movie.rating > 8.0 &&
    (movie.genre === "Action" || movie.genre === "Adventure")
);
console.log(filteredOutMovies);

//13. Write a function that takes an array of objects with name, price and quantity, and returns a new array with only the names containing bread.

const productsData = [
  { name: "Bread", price: 480, quantity: 3 },
  { name: "Clips", price: 200, quantity: 5 },
  { name: "green Bread Knife", price: 3077, quantity: 1 },
  { name: "Slipper", price: 150, quantity: 2 },
];
const filteredOutProducts = productsData
  .filter((product) => product.name.includes("Bread"))
  .map((product) => product.name);
console.log(filteredOutProducts);

//14. Write a function that takes an array  of objects with name, role, and array of hours which represents the time the person spends 
// on the server each day. Find the person who is the most active in the community and spends most of the time in it using reduce() method.

const community = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] },
];
const mostTimeSpendPerson = community.reduce((mostActivePerson, currValue) => {
  const totalHours = currValue.hours.reduce(
    (sum, currHour) => sum + currHour,
    0
  );
  const activeTotal = mostActivePerson.hours.reduce(
    (sum, currTime) => sum + currTime,
    0
  );
  return totalHours > activeTotal ? currValue : mostActivePerson;
});
console.log(mostTimeSpendPerson);

//15. Write a function that takes an array of objects with name, role and array of hours which represents the time a person spends 
// on the server each day. Give the tag of regular to students who are active in the community and spends more than 20 hours a week.

const communityData = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] },
];

const tagRegularStudents = communityData.map((person) => {
    const totalHours = person.hours.reduce((sum, currTime) => sum + currTime, 0);

    if(person.role === "student" && totalHours > 20) {
        person.tag = "regular"
    }
    return person;
})  ;
console.log(tagRegularStudents);
