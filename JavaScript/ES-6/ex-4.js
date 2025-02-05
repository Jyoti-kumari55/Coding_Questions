// 1.1 Console the 'brand' property of the 'car' object.
// 1.2 Console the 'model' property of the 'car' object.
// 1.3 Change the value of 'brand' property of the 'car' object to "Honda".
// 1.4 Console the updated 'car' object.
// 1.5 Add two more properties to the 'car' object, year and color. Assign the value for year as 2022 and value for color as “Blue”.
// 1.6 Use for-in loop to print all properties of the 'car' object.

const car = {
    brand: "Toyota",
    model: "Corolla"
  }
  console.log("1.1", car.brand);
  console.log("1.2", car.model);
  
  car.brand = "Honda";
  console.log("1.3", car.brand)
  console.log("1.4", car)
  
  car.year =  2022;
  car.color = "Blue";
  console.log("1.5: All properties of Car")
  for(properties in car) {
    console.log(properties, ": " ,  car[properties]);
  }
//   Question 2. Define an object 'citizen' with three properties, name, age and occupation.
//   2.1 Change the 'age' property of the 'citizen' object to 68 and print age to the console.
//   2.2 Add 2 to the 'age' property of the 'citizen' object and print the age to the console.
//   2.3 Add a property city to the object with value “Delhi” and then print all properties of the 'citizen' object using for-in loop.  

  console.log("Question 2");
  const citizen = {
    name: "Ramesh Kumar",
    age: 25,
    occupation: "Retired"
  }
  citizen.age = 68
  console.log("2.1: Updated age: " , citizen.age);
  
  citizen.age += 2;
  console.log("2.2 Updated age after adding 2: ", citizen.age);
  
  citizen.city = "Delhi";
  console.log("2.3: Properties of citizen object ");
  for(properties in citizen){
    console.log(properties, ": ", citizen[properties])
  }
//   Question 3: Create a person object with properties name and age. Put your own value.
//   3.1 Add a property 'bp' to the person object with value "Normal".
//   3.2 Check age and bp for fitness to travel. If the age of the person is above 60 and the bp is normal, 
//   then console "Fit to travel." otherwise console "Not fit to travel."

  console.log("Quextion 3");
  const person = {
    name: "Amit",
    age: 22
  }
  person.bp = "Normal";
  
  if(person.age > 60 && bp === "Normal") {
    console.log("Fit to travel")
  }else {
    console.log("Not fit to travel")
  }