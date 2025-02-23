const words = ["apple", "banana", "kiwi", "orange", "grape"];
const findLongestWord = words.reduce((word, acc) => acc.length > word.length ? acc : word, []);
console.log(findLongestWord);

const numbers = [10, 5, 8, 20, 15];
const minNum = numbers.reduce((num, acc) => acc < num ? acc : num, numbers[0]);
console.log(minNum);

const wordsLength = words.reduce((word, acc) => word + acc.length , 0);
console.log(wordsLength);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const counOfEvenNum = nums.reduce((num, curr) => curr % 2 === 0 ? num + 1 : num, 0);
console.log(counOfEvenNum);

const wordsCaps = ["hello", "world", "how", "are", "you"];
const captilizeFirstLetter = wordsCaps.reduce((letter, curr) => letter + curr.charAt(0).toUpperCase() + curr.slice(1) + " " , []);
console.log(captilizeFirstLetter);

const numsAvg = [10, 15, 20, 25, 30];
const printNumsAvg = numsAvg.reduce((num, curr) => (curr + num), 0);
console.log(printNumsAvg / numsAvg.length);

const numberss = [1, 2, 3, 4, 5];
const sumOfSqrNum = numberss.reduce((num, curr) => curr * curr + num, 0);
console.log(sumOfSqrNum);

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];
const countOfStationaryWords = stationeryWords.reduce((word, curr) => {
    word[curr] = (word[curr] || 0) + 1;
    return word;
}, {});
console.log(countOfStationaryWords);

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
const countWordsLetter = wordsLetter.reduce((word, curr) => {
    const firstWord = curr[0];
    if(word[firstWord]) {
         word[firstWord] += 1;
    }else {
        word[firstWord] = 1;
   }
   return word;
}, {});
console.log(countWordsLetter);

const numPositive = [-2, 3, 4, -5, 6];
const calculateNumPositive = numPositive.reduce((num, curr) => curr > 0 ? curr + num : num, 0);
console.log(calculateNumPositive);