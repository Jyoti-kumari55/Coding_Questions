const nums = [12, 5, 20, 8, 15, 30];
const filteredNum = nums.filter((n) => n > 10);
console.log(filteredNum);

const words = ["hello", "world", "apple", "orange", "banana"];
const extractWordWithO = words.filter((word) => word.includes("o") || word.includes("O"));
console.log(extractWordWithO);

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
function getPrimeNum(num) {
    if(num <= 1) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i = 5; i <= Math.sqrt(num); i+=6){
        if(num % i === 0 || num % (i + 2) === 0){
            return false;
        }
    }
    return true;
}
 const extractPrimeNum = numbers.filter((num) => getPrimeNum(num));
 console.log(extractPrimeNum);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printMultipleOf3 = threeMultiples.filter((num) => num % 3 === 0);
console.log(printMultipleOf3);

const notDivisibleOf2or3 = threeMultiples.filter((num) => num % 2 !== 0 && num % 3 !== 0);
console.log(notDivisibleOf2or3);

const wordss = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];
const filteresUpperCaseWord = wordss.filter((word) => word === word.toUpperCase());
console.log(filteresUpperCaseWord);

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const filterNotWordY = wordsY.filter((word) => !word.endsWith("y"));
console.log(filterNotWordY);

const wordWithUandY = wordsY.filter((word) => word.includes("u") && word.includes("y"));
console.log(wordWithUandY);

const arrNum = [12, 5, 20, 7, 8, 15, 30];
const filterEvenNum = arrNum.filter((num) => num % 2 === 0);
console.log(filterEvenNum);

const wordLen = ["kiwi", "mango", "apple", "orange", "banana"];
const calculateLen = wordLen.filter((len) => len.length >= 5)
console.log(calculateLen);

const wordNotA = wordsY.filter((word) => !word.includes("a"));
console.log(wordNotA);

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const filterNumBet20To40 = newNums.filter((num) => num > 20 && num <= 40);
console.log(filterNumBet20To40);

const students = [
    { name: "Alice", grade: 80 },  
    { name: "Bob", grade: 65 }, 
    { name: "Charlie", grade: 90 }, 
];
const filterStudents = students.filter((student) => student.grade > 70);
console.log(filterStudents);

const movies = [
    { title: "Inception", rating: 8.8 }, 
    { title: "Interstellar", rating: 8.6 },  
    { title: "The Dark Knight", rating: 9.0 }, 
];

const filterdMovies = movies.filter((movie) => movie.rating > 7.0);
console.log(filterdMovies);

const employees = [
    { name: "Alice", employed: true },
    { name: "Bob", employed: false },
    { name: "Charlie", employed: true },
];
const filteredEmp = employees.filter((emp) => emp.employed === true);
console.log(filteredEmp);