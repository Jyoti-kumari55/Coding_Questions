//Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout.
const delayedGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Welcome to my promises code.");
  }, 2000);
});
delayedGreeting.then((message) => {
  console.log(message);
});

//Write a function delayedAddition that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout.
const delayedAddition = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Addition of two numbers after 4 sec delayed: ${num1 + num2}`);
    }, 4000);
  });
};
delayedAddition(5, 8).then((message) => {
  console.log(message);
});

//Write a function delayAlert that takes in a message ‘Hello, world!’ and a delay time in milliseconds,
// and displays the message in an alert box after the specified delay time using setTimeout.
const delayAlert = (message, delay) => {
    setTimeout(() => {
        alert(message)
    }, delay)
}
delayAlert("Hello world!", 2000);

//Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server.
const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server ${msg}.`);
      }
      reject(`error from server ${msg}.`);
    }, 5000);
  });
};
fakeFetch("Hi", true)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

const fakeFetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

// Your Code here
const displayOutput = document.querySelector("#output");

fakeFetchUrl("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent =
        "The data you are looking for, does not exist.";
    }
  });

const fakeFetchApi = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 503,
          message: "Service Unavailable",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};
const displayResult = document.querySelector("#result");
fakeFetchApi("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 503) {
      displayResult.textContent =
        "We are facing high demand at the moment. Please check back later in sometime.";
    }
  });

const fetchNewUrl = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

const showOutput = document.querySelector("#showOut");
fetchNewUrl("https://example.com/api/itemlist")
  .then((response) => {
    if (response.status === 200) {
      showOutput.innerHTML = `<ol>
        ${response.data
          .map(
            (item) =>
              `<li>${item.itemName} -- INR ${item.price} -- ${item.quantity}</li>`
          )
          .join("")}
        </ol>`;
    }
  })
  .catch((error) => console.log("Error: ", error.status, error.message));

const fakeFetchError = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const showError = document.querySelector("#showError");
fakeFetchError("https://example.com/api/data")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 500) {
      showError.textContent =
        "Internal Server Error! The server crashed. Please try again in some time.";
    }
  });

  const fakeUnauthorizedError = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile") {
          reject({
            status: 401,
            message: "Unauthorized Access"
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success"
            }
          });
        }
      }, 2000);
    });
  };
const unauthorizedError = document.querySelector("#unauthorizedError");
fakeUnauthorizedError("https://example.com/api/profile").then((response) => console.log(response)).catch((error) => {
    if (error.status === 401) {
        unauthorizedError.textContent = "Unauthorized Access! Looks like you are not logged in. Please login to see your profile data."
    }
})
  
  
const fetchFakeData = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "John", work: "USA" }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found"
          });
        }
      }, 2000);
    });
  };
  
  const showData = document.querySelector("#showData");
  fetchFakeData("https://example.com/api/profile/NC002")
    .then((response) => {
      if (response.status === 200) {
        showData.textContent = `Welcome! ${response.data.data.name} from ${response.data.data.work}`;
      }
    })
    .catch((error) => console.log("Error: ", error.status, error.message));
  
  
  