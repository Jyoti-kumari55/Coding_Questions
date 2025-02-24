// Create a promise that resolves with the message "Data fetched successfully!" and rejects with the message "Failed to fetch data".
//  Create a variable dataReceived and assign it a boolean value. Log the resolved message to the console.
let fetchData = new Promise((resolve, reject) => {
  let dataReceived = true;
  if (dataReceived) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data");
  }
});
console.log(fetchData);

//Create a promise that checks if a number is greater than 10. If it is, resolve with the message
// "Number is valid", otherwise reject with the message "Number is too small".

let checkNum = new Promise((resolve, reject) => {
  let num = 18;
  if (num > 10) {
    resolve("Number is valid");
  } else {
    reject("Number is too small");
  }
});
checkNum
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//Create a promise that resolves with the message "User is logged in" if the boolean variable isLoggedIn is true,
// and rejects with the message "User is not logged in" if it is false.

const isLoggedIn = true;
const checkLoginUser = new Promise((resolve, reject) => {
  if (isLoggedIn) {
    resolve("User is logged in");
  } else {
    reject("User is not logged in");
  }
});

checkLoginUser.then((message) => {
	console.log(message)
}).catch((error) => {
  console.error(error);
});


//Create a promise that simulates fetching user data. If userExists is true, resolve with the user object { name: "Alice", age: 25 }.
// If false, reject with the message "User not found".
const checkUserExists = new Promise((resolve, reject) => {
const userExists = true;
  if (userExists) {
    resolve({
      name: "Alice",
      age: 25,
    });
  } else {
    reject("User not found");
  }
});
checkUserExists.then((user) => {
    console.log(user);
}).catch((error) => {
    console.error(error);
});

//Create a promise that resolves with a number 42 after 2 seconds. Use setTimeout for delay.
//  Log the number to the console when it resolves.

const checkTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 2000)
});
checkTime.then((number) => {
    console.log(number)
}).catch((error) => {
    console.error(error)
});

//Create a promise that rejects with a number 500 after 3 seconds. Use setTimeout for delay. 
// Log the number to the console when it rejects.
const fetchTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(500)
    }, 3000)
});
fetchTime.then((number) => {
    console.log(number);
}).catch((error) => {
    console.error(error);
})

//Create a function checkPassword(password) that returns a promise. If the password is "12345", 
// resolve with the message "Password accepted", otherwise reject with "Invalid password".
const checkPassword = (password) => {
    return new Promise((resolve, reject) => {
        if(password === "12345") {
            resolve("Password accepted");
        }else {
            reject("Invalid password");
        }
    })
} 
checkPassword("12345").then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error);
});

//Create a function checkEmail() that returns a promise which checks if an email contains the "@" symbol. 
// If it does, resolve with "Valid email". If not, reject with "Invalid email".

const checkEmail = (email) => {
    return new Promise((resolve, reject) => {
        if(email.includes("@")) {
            resolve("Valid email");
        }else {
            reject("Invalid email");
        }
    });
}
checkEmail("abc@gmail.com").then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
});

//Create a function fetchTemperature() that returns a promise. The promise should resolve with "Temperature is 20°C" 
// if the temperature is above 15, and reject with "Temperature too low" otherwise.
const fetchTemperature = (temperature) => {
    return new Promise((resolve, reject) => {
        if(temperature > 15){
            resolve("Temperature is 20°C")
        }else {
            reject("Temperature is too low.")
        }
    })
}
fetchTemperature(14).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error)
});