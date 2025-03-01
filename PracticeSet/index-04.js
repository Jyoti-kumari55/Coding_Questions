//1. Write a Program to count the occurrences of a character in a string?
const countChar = (str, char) => str.split(char).length - 1;
console.log("Count G character: ", countChar("GeeksForGeeks", "G"));

const countChar1 = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};
console.log(
  "Count G character using for loop: ",
  countChar1("GeeksForGeeks", "G")
);

//2. Check if a String Contains Another String?
const containSubstring = (str, subString) => str.indexOf(subString) !== -1;
console.log("Contain sub string: ", containSubstring("GeeksForGeeks", "For"));
console.log(
  "Contain sub string: ",
  containSubstring("DoItForYourSelf", "Done")
);

//3. Find the First Non-Repeated Character in a String?
const nonRepeatedChar = (str) => {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
};
console.log("First non-repeated character: ", nonRepeatedChar("GeeksForGeeks"));

// 4.. Find the Longest Word in a String?
const findLongestStr = (str) => {
  const words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
console.log(
  "Longest word: ",
  findLongestStr("Practice makes perfect. So do coding as much you can.")
);

//5.  Capitalize the First Letter of Each Word in a Sentence?
const capitalizeFirstLetter = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};
console.log(
  "Capitalize the first letter of the sentence: ",
  capitalizeFirstLetter(
    "Practice makes perfect. So do coding as much as you can."
  )
);

//6. Convert an Array of Strings to Uppercase?
const words = ["banana", "apple", "cabbage", "potato"];
const upperCaseWords = (str) => str.map((word) => word.toUpperCase());
console.log("Array to upper case using map(): ", upperCaseWords(words));

const upperCaseWords1 = (arr) => {
  const upperCaseArr = [];
  for (let i = 0; i < arr.length; i++) {
    upperCaseArr.push(arr[i].toUpperCase());
  }
  return upperCaseArr;
};
console.log("Array to upper case using new arr: ", upperCaseWords1(words));

//7. Write a Program to reverse an array?
const revereseWord = (str) => {
  const newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr;
};
console.log("Reversed words of an Array: ", revereseWord(words));

//8. Get the last element of an array?
const numbers = [4, 7, 2, 12, 9, 45, 30, 14];
const getLastElement = (num) => {
  return num[num.length - 1];
};
console.log("Last element of an array: ", getLastElement(numbers));

//9. Remove falsy Values from an array?
function removeFalsyValue(arr) {
  const arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      // arrResult[arrResult.length] = arr[i];
      arrResult.push(arr[i]);
    }
  }
  return arrResult;
}

console.log(
  "Remove falsy values: ",
  removeFalsyValue([0, NaN, 5, false, 6, "", 7, null, 9, undefined])
);

//10. Convert JSON data using JSON to parse and stringify data?
let jsonData = '{"name": "Jyoti", "age": 25, "city": "Noida"}';
let parsedData = JSON.parse(jsonData);
console.log("Parse Data: ", parsedData);
console.log("Print name: ", parsedData.name);

const person = {
  name: "Jyoti",
  age: 25,
  city: "Noida",
};
const jsonString = JSON.stringify(person);
console.log("Convert object into JSON string: ", jsonString);

const parsedPerson = JSON.parse(jsonString);
console.log("Convert JSON string to object: ", parsedPerson);

//11. Check if Two Strings are Anagrams or not.
function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count1 = {};
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count1[char] = (count1[char] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    count2[char] = (count2[char] || 0) + 1;
  }
  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}
console.log("Is Anagrams: ", checkAnagrams("listen", "silent"));
console.log("Is Anagrams: ", checkAnagrams("team", "pale"));

//12. Count Vowels in a String
const countVowelsInStr = (str) => {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log("Count Vowels: ", countVowelsInStr("Hello world"));

//13. Find the maximum difference between two numbers in an array?
const maximumDiffNum = (arr) => {
  let min = arr[0];
  let maxDiff = 0;
  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - min;
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
};

console.log("Maximum difference between two numbers in an array: ", maximumDiffNum([1, 2, 90, 10, 110]));

//14. Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;

}
console.log("Remove duplicates from an Array: ", removeDuplicates([5, 2, 5, 6, 6, 7]));

//15. Get Unique Characters from a String.
const uniqueChar = (str) => {
    const uniqueLetters = [];
    for (let i = 0; i < str.length; i++) {
        if(!uniqueLetters.includes(str[i])){
            uniqueLetters.push(str[i])
        }
    }
    return uniqueLetters.join("");
}
console.log("Unique Characters: ", uniqueChar("JavaScript Developer"))