const student = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
    computer: 88,
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
    computer: 90,
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
    computer: 95,
  },
];

// Convert the table into an array of objects.
// Add marks for computers for each student respectively.
// const marksForComputer = [88, 92, 95]

const marksForComputer = [88, 92, 95];
console.log("1.1: Students Data with Computer Marks\n");
for (let i = 0; i < student.length; i++) {
  // student[i].computer = marksForComputer[i];
  console.log(student[i]);
}

//  1.2 Add marks for one more subject, science. Then print the updated studentsData with Science marks.
//   const marksForScience = [82, 90, 88]

console.log("1.2: Students Data with Science Marks\n");
const marksForScience = [82, 90, 88];
for (let i = 0; i < student.length; i++) {
  student[i].science = marksForScience[i];
  console.log(student[i]);
}
console.log("\n");

// 2.1 Convert Kaveri's data to an object and print it.
// 2.2  Add Kaveri's data to studentsData. Then print the updated studentsData with Kaveri's data.

const KaveriData = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};
console.log("2.1: Kaver's Data", KaveriData);
console.log("\n");

console.log("2.2: Updated Students Data with Kaveri");
student.push(KaveriData);
console.log(student);

// 2.3 Add a field totalMarks to every object in the array. Then print the updated studentsData with totalMarks.
// 2.4 Calculate the average marks and add avgMarks to each object. Then print the updated studentsData with avgMarks.

console.log("\n");
console.log("2.3: Updated studentsData with totalMarks.");
for (let i = 0; i < student.length; i++) {
  const totalMarks =
    student[i].hindi +
    student[i].english +
    student[i].maths +
    student[i].computer +
    student[i].science;
  student[i].totalMarks = totalMarks;
  console.log(
    "Name: " +
      student[i].name +
      ", Roll No: " +
      student[i].rollNo +
      ", Total Marks: " +
      student[i].totalMarks
  );
}

console.log("\n");
console.log("2.4: Updated studentsData with Average Marks.");

for (let i = 0; i < student.length; i++) {
  let noOfSubject = 5;
  const avgMarks = student[i].totalMarks / noOfSubject;
  student[i].avgMarks = avgMarks;
  console.log(
    "Name: " +
      student[i].name +
      ", Roll No: " +
      student[i].rollNo +
      ", Average Marks: " +
      student[i].avgMarks
  );
}

console.log("\n");
console.log("2.5: Grade For Students.");
console.log("--------------");

for (let i = 0; i < student.length; i++) {
  getStudentReport(student[i]);
}

function getStudentReport(student) {
  console.log(
    "===== Report Card For " +
      student.name +
      "=====\n" +
      "Roll No. : " +
      student.rollNo +
      "\n" +
      "-----------" +
      "\n" +
      "Marks" +
      "\n" +
      "-----------" +
      "\n" +
      "Hindi: " +
      student.hindi +
      "\n" +
      "English: " +
      student.english +
      "\n" +
      "Maths: " +
      student.maths +
      "\n" +
      "Computer: " +
      student.computer +
      "\n" +
      "Science: " +
      student.science +
      "\n" +
      "-----------" +
      "\n" +
      "Total: " +
      student.totalMarks +
      "\n" +
      "Average: " +
      student.avgMarks +
      "\n" +
      "Grade: " +
      calculateGrade(student.avgMarks) +
      "\n" +
      "-----------------\n"
  );
}

function calculateGrade(avg) {
  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg <= 89) {
    return "B";
  } else if (avg >= 70 && avg <= 79) {
    return "C";
  } else if (avg >= 60 && avg <= 69) {
    return "D";
  } else if (avg >= 50 && avg <= 59) {
    return "E";
  } else if (avg < 50) {
    return "F";
  } else {
    return "Not Applicable";
  }
}
