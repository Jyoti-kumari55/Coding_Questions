const arrOfNumbers = [3, 6, 10, 8, 2, 5, 13, 15]
const numSmallThan8 = arrOfNumbers.filter((num) => num <= 8);
console.log("Numbers small than 8: ", numSmallThan8);

const arrOfWords = ["neoG", "is", "family", "love", "hackathon", "camping"];
const lengthLessThan5 = arrOfWords.filter((word) => word.length <= 5);
console.log("Words less than 5 or fewer in length: ", lengthLessThan5);

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        eye_color: 'orange',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        eye_color: 'blue',
        gender: 'male',
    },
];
const filteredOnlyMale = characters.filter((person) => person.gender === "male");
console.log("Only Male Characters: ", filteredOnlyMale);

const heightGreaterThan170 = characters.filter((person) => person.height > 170);
console.log("Persons whose height greater than 170: ", heightGreaterThan170);