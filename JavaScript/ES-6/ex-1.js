// 1. Write a program to increment age by 1 if birthday.

const isBirthday = true;
let age = 26;

if(isBirthday){
  age++;  
}
console.log("Program 1");
console.log(`Current Age: ${age}`);
console.log("\n");

// 2. The condition has been written to print the message. Declare all the necessary variables needed and calculate ticket price based on age. Use appropriate declarations. If the passenger age is greater than 60, then there is a 15% discount on the ticket price.

console.log("Program 2");
const passengerAge = 56;
const discount = 0.15;
const ticketRate = 100;
if(passengerAge > 60) {
  let discountedticket = ticketRate - (ticketRate * discount);
  console.log(`Ticket price for age greater than 60: ${discountedticket}`);
}
else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketRate}`);
}


console.log("\n");

// 3. Declare three variables, num1, num2 and num3 and write a program to find out if third number the largest. Print appropriate message as per the values taken.

console.log("Program 3");
const num1 = 10;
const num2 = 20;
const num3 = 15;
if(num3 > num1 && num3 > num2){
  console.log(`The third number ${num3} is the largest.`)
} else {
  console.log(`The third number ${num3} is not the largest.`)

}
console.log("\n");

// 4. Define four items (Saree, Kurta, Jeans, Shoes) and their respective prices in a shopping cart. Use appropriate variable declarations. Calculate the total cart price by summing up the individual prices of all items.
//Determine the delivery charge status based on the total cart price. If the total cart price is less than 1999, set an optional delivery charge of 99 and update the total cart price accordingly. If the total cart price is 1999 or more, indicate "No Delivery Charge" in the delivery charge status. Finally print the Shopping Cart with Optional Delivery Charge.

console.log("Program 4");
console.log("Shopping cart: " + "\n-----------------------------------------");
const saree = 500;
const kurta = 300;
const jeans = 900;
const shoes = 400;
const deliverySatatus = "";
const totalCartPrice = saree + kurta + jeans + shoes;
console.log(`Item: Saree, Price: ${saree}`);
console.log(`Item: Kurta, Price: ${kurta}`);
console.log(`Item: Jeans, Price: ${jeans}`);
console.log(`Item: Shoes, Price: ${shoes}`);
console.log("---------------------------------------");
if(totalCartPrice < 1999) {
  let deliveryCharge = 99;
  console.log(`Delivery Charge: ${deliveryCharge}`)
  console.log("---------------------------------------");
  console.log("---------------------------------------");
console.log("Total Cart Price: ", totalCartPrice + deliveryCharge);
} else {
  console.log("Delivery Charge: No Delivery Charge");
  console.log("---------------------------------------");
  console.log("Total Cart Price: ", totalCartPrice);

}


// 5. Declare appropriate variable and write code to check if a number is positive or negative.

///If the number is greater than zero, print a message indicating that the number is positive.
///If the number is less than zero, print a message indicating that the number is negative.
// If the number is exactly zero, print a message indicating that the number is zero.

console.log("\n")
console.log("Program 5");
const n1 = 10;
if(n1 > 0){
  console.log("The number is positive.");
} if(n1 < 0) {
  console.log("The number is negative.");
}
if(n1 === 0){
  console.log("The number is Zero.")
}

// 6. Find the students with highest marks. Declare three variables marks1, marks2 and marks3 to represent the marks of three students. Assign them the values 85, 90, and 78, respectively. Declare three variables for student names student1, student2 and student3. Assign them the values Rahul, Priya, and Tina, respectively.

// If student1 has the highest marks, print a message to the console indicating that student 1 has the highest marks, in the following format: "Rahul has the highest marks: {marks1}". Print similar message if any other student has highest marks.

console.log("\n");
console.log("Program 6");

const mark1 = 85;
const mark2 = 90;
const mark3 = 78;
const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tina";
let largestMarks ;
let student;
if(mark1 >= mark2 && mark1 >= mark3){
  largestMarks = mark1 ;  
console.log(student1 + ", has the highest marks.")
}
if(mark2 >= mark1 && mark2 >= mark3){
  largestMarks = mark2 ;
  console.log(student2 + ", has the highest marks.");
} else {
  largestMarks = mark3 ;
  console.log(student3 + ", has the highest marks.");
}
