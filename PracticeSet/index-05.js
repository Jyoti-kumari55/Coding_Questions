//1. Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation, 
// numbers and symbols are not included in the passed string.
const alphabeticalOrder = (str) => {
  const regex = str.replace(/[^a-zA-Z]/g, " ");
  return regex.split("").sort().join("").trim();
};
console.log("Alphabetical order of string and remove symbols: ",
  alphabeticalOrder("webmaster"))
console.log(
  "Alphabetical order of string and remove symbols: ",
  alphabeticalOrder("web@#mas  %ter")
);

//2. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

const countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
};
console.log("Count of Vowels occur: ", countVowels("No pain, no gain"));

//3. Write a JavaScript program to convert a specified number to an array of digits.
const convertNumToArr = (num) => {
    return num.toString().split("").map(Number);
}
console.log(convertNumToArr(123));

//4.4. Create a promise. Have it resolved with a value of 'Resolved!' in resolve after a delay of 1000ms. 
// Print the contents of the promise after the promise has been resolved.

const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!")
    }, 1000);
});
createPromise.then((message) => {
    console.log(message)
});