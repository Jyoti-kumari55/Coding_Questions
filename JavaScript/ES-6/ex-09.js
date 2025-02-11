console.log("Program 1");
const calculateAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calculateAverage([5, 10, 15]));

console.log("Program 2");
const reverseString = (str) => {
    let reversedStr = "";
    for(let i = str.length - 1; i >= 0 ; i --) {
        reversedStr += str[i];
    }
    return reversedStr;
}
console.log(reverseString("world"))

console.log("Program 3");
const findLongestWord = (words) => {
    let longestWord = "" ;
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length) {
           longestWord = words[i];
        }
    }
    return longestWord;

}
console.log(findLongestWord(["apple", "banana", "grapefruit"]))

console.log("Program 4")
const givenArr = [5, 12, 3, 7, 21, 9, 45, 90];
const printReversedArr = (arr) => {
    const arrLen = arr.length;
    for(let i = 0; i < arrLen / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arrLen - 1 - i];
        arr[arrLen - 1 - i] = temp
    }
    return arr ;
}
console.log(printReversedArr(givenArr));

console.log("Program 5");
const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 88 }
  ];

const calculateAverageGrade = (student) => {
    let totalGrade = 0;
    for(let i = 0; i < student.length; i++) {
        totalGrade += student[i].grade
    }
    return (totalGrade / student.length).toFixed(2);
}
console.log("Average Grade: ", calculateAverageGrade(students));

const getNames = (student) => {
    let studentNames = [];
    for(let i = 0; i < student.length; i++) {
        studentNames.push(student[i].name)
    }
    return studentNames;  
}
console.log(getNames(students));

const calculateAverageAge = (student) => {
    let totalAge = 0;
    for(let i = 0; i < student.length; i++) {
        totalAge += student[i].age
    }
    return (totalAge / student.length).toFixed(2);
}
console.log(calculateAverageAge(students));

let highestGrade;
const getHighestGrade = (students) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].grade >= 90){
      highestGrade = students[i];
    }
  }
  return highestGrade;
}
console.log(getHighestGrade(students));

let studentBelowAge ;
const isAnyBelowAge18 = (students) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].age < 18){
     return true;
    }
    else {
      return false
    }
  }
}
 console.log(isAnyBelowAge18(students))

const findStudentByName = (students, name) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].name === name){
      return students[i];
    }
  }
}
console.log(findStudentByName(students, "Alice"));

let highestGradeName = [];
const getHighScoreStudents = (students) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].grade > 85){
        highestGradeName.push(students[i].name);
    }
  }
  return highestGradeName;
}
 console.log(getHighScoreStudents(students))