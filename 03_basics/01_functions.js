function sayMyName() {
  console.log("Rajarshi");
}

// sayMyName; // Referencing function
// sayMyName(); // Executing function

function addTwoNumbers(num1, num2) {
  // parameters
  console.log(num1 + num2);
}

// addTwoNumbers(4, 6); // arguments

function returnSum(num1, num2) {
  return num1 + num2;
}

const result = returnSum(56, 98);
// console.log(`Result: ${result}`);

function login(username = -1) {
  if (username != -1) return `${username} just logged in`;
  return "no username provided";
}

// console.log(login("raj"));

// +++++++++++++++++ Rest Operator +++++++++++++++++

function cartAmount(p1, p2, ...price) {
  // ...price => [ 20, 30, 89, 99, 59, 69 ]
  // ...price is rest operator when used in func params but spread operator when we copy them in other places
  return price;
}

// console.log(cartAmount(20, 30, 89, 99, 59, 69));

const user = {
  username: "rajarshi",
  age: 20,
};

function handleObject(anyObject) {
  console.log(user.username);
}

// handleObject(user);

function handleArray(array) {
  console.log(array[0]);
}

// handleArray([1, 2, 3, 4, 5, 6, 7]);
