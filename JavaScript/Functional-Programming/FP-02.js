const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
  ];
  const extractTitle = books.map((book) => book.title);
  console.log(extractTitle);

  const fruits = [
    { name: "apple", color: "red" }, 
    { name: "banana", color: "yellow" }, 
    { name: "kiwi", color: "brown" }, 
  ];

  const capitalizeName = fruits.map((fruit) => ({...fruit, name: fruit.name.toUpperCase()}));
  console.log(capitalizeName);

  const employees = [
    { name: "Alice", salary: 50000 },  
    { name: "Bob", salary: 60000 }, 
    { name: "Charlie", salary: 70000 }, 
  ];

const incSalary = employees.map((emp) => ({ ...emp, salary: emp.salary + (emp.salary / 0.10) }));
console.log(incSalary);

const teachers = [
    { name: "Olivia", monthlySalary: 4500 },
    { name: "Paul", monthlySalary: 5500 },
    { name: "Rachel", monthlySalary: 5000 }, 
  ];
const annualSalaryOfEmp = teachers.map((teacher) => ({ name: teacher.name, annualIncome: (teacher.monthlySalary * 12) + 500}));
console.log(annualSalaryOfEmp);

const countries = [
    { name: "USA", population: 331000000, landArea: 9833517 },
    { name: "India", population: 1393000000, landArea: 2973190 }, 
    { name: "Brazil", population: 213993437, landArea: 8515767 }, 
  ];

const countriesDensity = countries.map((people) => ({ name: people.name, populationDensity: people.population / people.landArea}));
console.log(countriesDensity);

const students = [
    { name: "Alice", score: 85 },  
    { name: "Bob", score: 55 },  
    { name: "Charlie", score: 75 }, 
  ];
const studentPassOrFail = students.map((student) => ({ ...student, passed: student.score >= 60 }));
console.log(studentPassOrFail);

const songs = [
    { title: "Bohemian Rhapsody", duration: 367 }, 
    { title: "Hotel California", duration: 420 },  
    { title: "Stairway to Heaven", duration: 482 }, 
];
const getSongsTime = songs.map((song) => ({ ...song, duration: (song.duration / 60).toFixed(2)}))
console.log(getSongsTime);

const newStudents = [
    { name: "Alice", age: 22 }, 
    { name: "Bob", age: 17 }, 
    { name: "Charlie", age: 25 }, 
  ];

const classificationOfStudent = newStudents.map((student) => ({ ...student, classification: student.age > 18 ? "adult" : "minor"}));
console.log(classificationOfStudent);

const developers = [
    { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
    { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },  
    { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 }, 
 ];
 const developersIncome = developers.map((person) => ({ ...person, annualIncome: person.hourlyRate * person.hoursPerWeek * 50}));
 console.log(developersIncome);

 const studentScore = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 92 }, 
  ];

  const findGrade = (score) => {
    if(score >= 90){
      return "A"
    }
    if(score >= 80){
      return "B"
    }
    if(score >= 70){
      return "C"
    }
    if(score >= 60){
      return "D"
    }
    if(score <= 59){
      return "f"
    }
  }
const gradeOfStudent = studentScore.map((student) => ({ ...student, grade: findGrade(student.score)}));
console.log(gradeOfStudent)