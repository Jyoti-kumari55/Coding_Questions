const words = ["apple", "banana", "kiwi", "orange", "grape"];
const findLongestWord = words.reduce((word, acc) => acc.length > word.length ? acc : word, []);
console.log("Longest Word: ", findLongestWord);

const numbers = [10, 5, 8, 20, 15];
const minNum = numbers.reduce((num, acc) => acc < num ? acc : num, numbers[0]);
console.log("Minimum Num: ", minNum);

const wordsLength = words.reduce((word, acc) => word + acc.length , 0);
console.log("All array strings length: ", wordsLength);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const counOfEvenNum = nums.reduce((num, curr) => curr % 2 === 0 ? num + 1 : num, 0);
console.log("Count of Even no.s: ", counOfEvenNum);

const calculateSumOfEven = nums.reduce((num, curr) => curr % 2 === 0 ? curr + num : num, 0);
console.log("Sum of Even no.s: ", calculateSumOfEven);

const wordsCaps = ["hello", "world", "how", "are", "you"];
const captilizeFirstLetter = wordsCaps.reduce((letter, curr) => letter + curr.charAt(0).toUpperCase() + curr.slice(1) + " " , []);
console.log("Capitalize the first letter of string: ", captilizeFirstLetter);

const numsAvg = [10, 15, 20, 25, 30];
const printNumsAvg = numsAvg.reduce((num, curr) => (curr + num), 0);
console.log("Average of no.s: ", printNumsAvg / numsAvg.length);

const numberss = [1, 2, 3, 4, 5];
const sumOfSqrNum = numberss.reduce((num, curr) => curr * curr + num, 0);
console.log("Sum of square numbers: ", sumOfSqrNum);

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];
const countOfStationaryWords = stationeryWords.reduce((word, curr) => {
    word[curr] = (word[curr] || 0) + 1;
    return word;
}, {});
console.log("Count of strings occuring: ", countOfStationaryWords);

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
console.log("Count of string first letter occuring: ", countWordsLetter);

const numPositive = [-2, 3, 4, -5, 6];
const calculateNumPositive = numPositive.reduce((num, curr) => curr > 0 ? curr + num : num, 0);
console.log("Sum of positive numbers: ",calculateNumPositive);

const calculateLngthOfWords = stationeryWords.reduce((word, curr) => curr.length + word, 0);
console.log("Length of array: ", calculateLngthOfWords);

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const countEvenAndOdd = numsArr.reduce((accumulator, currentValue) => {
    const specifiedNum =  currentValue % 2 === 0 ? "even" : "odd";
     if(!accumulator[specifiedNum]){
       accumulator[specifiedNum] = 0;
     }
    accumulator[specifiedNum]++;
     return accumulator;
     
   }, {});
   console.log("Count of even and odd: ", countEvenAndOdd);
 
   const wordsCap = ["reduce", "method", "needs", "a", "lot", "of", "practice"];
   const capitalizeWords = wordsCap.reduce((word, curr) => word + curr.toUpperCase() + " ", []);
   console.log("Capitalize the strings: ", capitalizeWords);


   const letters = ["a", "l", "p", "h", "a", "b", "e", "t"];
   const joinLetters = letters.reduce((letter, curr) => letter + curr, []);
   console.log("Join the letters: ", joinLetters);

   const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
   const countOfPositiveEvenNum = allNumsArr.reduce((num, curr) => {
    const specificNum = curr % 2 === 0 && curr > 0 ? "posEven" : "others";
     if(!num[specificNum]) {
        num[specificNum] = 0;
     } 
     num[specificNum]++;
     return num;
   }, {});
   console.log("Count of Positive Even Num: ", countOfPositiveEvenNum);