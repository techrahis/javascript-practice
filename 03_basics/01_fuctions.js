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

console.log(login("raj"));
