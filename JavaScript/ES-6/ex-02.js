// 1. Create a function called calculateSalary that takes two arguments called hoursWorked and hourlyRate. Inside the function, calculate the total salary. Return the salary. Call the function with two arguments and console.log the result.

console.log("Program 1")
console.log("--------------------------");
function calculateSalary(hoursWorked, hourlyRate) {
  const totalSalary = hoursWorked * hourlyRate;
  return totalSalary;
}
console.log("Total Salary :", calculateSalary(16, 20));
console.log("\n");

//  2. Create a function called `calculateBonus` that takes three arguments called `workedHours`, `marks`, and `salary`.
//  Use appropriate variable declarations. Inside the function, check the eligibility for a bonus based on the following criteria:
// - If `workedHours` is greater than 25 and `marks` is greater than 85, calculate a 10% bonus on the `salary` and
//  return the updated salary.
// - If `workedHours` is greater than 15 and `marks` is greater than 75, calculate a 5% bonus on the `salary` and
//  return the updated salary.
// - If none of the above conditions are met, return the `salary` without any bonus.
// console.log(calculateBonus(20, 80, 5000));

console.log("Program 2")
console.log("--------------------------");
function calculateBonus(workedHours, marks, salary){
  if(workedHours > 25 && marks > 85){
    const bonus = salary * 0.1;
    return salary + bonus;
  }
  if(workedHours > 15 && marks > 75){
    const bonus = salary * 0.05;
    return salary + bonus;
  }
  else {
    return salary;
  }
}
console.log("Updated Salary: " , calculateBonus(20, 80, 5000));
console.log("\n");


// 3. Create a function called calculateFinalAmount that calculates the final amount of a cart. 
// The function takes four arguments called price1, quantity1, price2 and quantity2. Inside the function, 
// calculate the total price of quantity1 and add it to the total price of quantity2 to get the final amount. Return the total amount. 
// Use appropriate variable declarations.
// console.log(calculateFinalAmount(200, 10, 500, 5));

console.log("Program 3")
console.log("--------------------------");
function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  const totalPrice1 = price1 * quantity1;
  const totalPrice2 = price2 * quantity2;
  const finalPrice = totalPrice1 + totalPrice2;
  return finalPrice;
}
console.log("Total Amount: ",  calculateFinalAmount(200, 10, 500, 5));
console.log("\n");


// 4. Create a function called calculateAllowance that takes three arguments: age, isStudent and baseAllowance.
//  Inside the function, determine the additional allowance based on the following criteria:
// If age is less than 18 and isStudent is true, add 100 to the baseAllowance and return the updated allowance.
// If age is between 18 and 25 (inclusive of both 18 and 25) and isStudent is true, 
// add 50 to the baseAllowance and return the updated allowance.
// If none of the above conditions are met, return the original baseAllowance.
// Call the function with three arguments (age as 16, isStudent as true and base allowance as 500). 
// Print the final output. Use appropriate variable declarations.

console.log("Program 4")
console.log("--------------------------");
function calculateAllowance(age, isStudent, baseAllowance) {
  if(age < 18 && isStudent === true) {
    const allowance = baseAllowance + 100;
    return allowance;
  }
  if(age >=18 && age <= 25 && isStudent === true){
    const allowance = baseAllowance + 50;
    return allowance;
  }
  else {
    return baseAllowance;
  }
}
console.log("Allowance: ", calculateAllowance(16, true, 500));
console.log("\n");


// 5. Create a function called calculateShippingCost that takes three arguments: 
// totalWeight, country, and baseCost. Inside the function, 
// calculate the shipping cost based on the following criteria:
// If totalWeight is less than or equal to 1 kg and country is "Local", add 10 to the baseCost and return the updated cost.
// If totalWeight is greater than 1 kg and country is "International", add 20 to the baseCost and return the updated cost.
// If none of the above conditions are met, return the baseCost without any additional charges.
// Call the function with three arguments (total weight as 0.5, country as “Local” and base cost as 50). 
// Print the final output. Use appropriate variable declarations.

console.log("Program 5")
console.log("--------------------------");
function calculateShippingCost(totalWeight, country, baseCost){
  if(totalWeight <= 1 && country === "Local"){
    const updatedCost = baseCost +  10;
    return updatedCost;
  }
  if(totalWeight > 1 && country === "International") {
    const updatedCost = baseCost + 20; 
    return updatedCost;
  }
  else {
    return baseCost;
  }
}
console.log("Updated Cost: ", calculateShippingCost(0.5, "Local", 50))
