const words = ["apple", "banana", "kiwi", "orange", "grape"];
const strlength = (word) => word.map((str) => str.length);
console.log(strlength(words));

const numbers = [1, 2, 3, 4, 5];
const sqrNum = (num) => num.map((n) => n * n)
console.log(sqrNum(numbers));

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const capitalizeFruits = (str) =>str.map((fruit) => fruit.toUpperCase());
console.log(capitalizeFruits(fruits));

const nums = [4, 9, 16, 25, 36];
const sqrtOfNum = (num) => num.map((n) => Math.sqrt(n));
console.log(sqrtOfNum(nums));

const prefixAddedStr = fruits.map((fruit) => "fruit-" + fruit);
console.log(prefixAddedStr);

const numbersArray = [1, 2, 3, 4, 5];
const add10ToNum = numbersArray.map((num) => 10 + num);
console.log(add10ToNum);

const addSqrToNum = numbersArray.map((num) => num + num * num);
console.log(addSqrToNum);

const numsArr = [-5, 3, -8, 12, -1, 6];
const convertToAbs = numsArr.map((num) => Math.abs(num));
console.log(convertToAbs);

const phrases = ["Hello", "How are you", "Goodbye"];
const addPhrases = phrases.map((ph) => ph + "!");
console.log(addPhrases);

const capitalizeThirdLetter = fruits.map((fruit) => fruit.slice(0, 2) + fruit.charAt(2).toUpperCase() + fruit.slice(3));
console.log(capitalizeThirdLetter);

const start3Letters = fruits.map((fruit) => fruit.slice(0, 3));
console.log(start3Letters);

const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
const sentenceLen = sentences.map((sent) => sent.length );
console.log(sentenceLen);

const temperaturesCelsius = [0, 20, 37, -5, 10];
const convertTemp = temperaturesCelsius.map((temp) => (temp * 9/5)+32);
console.log(convertTemp);

const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const convertTwoDecimal = decimalNumbers.map((num) => num.toFixed(2));
console.log(convertTwoDecimal);

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const namesArrayLen = namesArray.map((name) => name + name.length);
console.log(namesArrayLen)