// Truthy and Falsy values

const userEmail = "hello@rajarshisamaddar.com";

if (userEmail) {
  console.log("User email present.");
} else {
  console.log("User email not present.");
}

// +++++++++++++ Falsy values +++++++++++++

// false - boolean false value
// 0 - number zero
// "" - empty string
// null
// undefined
// NaN

// +++++++++++++ Truthy values +++++++++++++

// Everything else other than falsy values are truthy values
// "0", "false", " ", [], {} are all truthy values
// function() {} is also a truthy value

// check is object is empty or not

const user = {};

if (Object.keys(user).length === 0) {
  console.log("User object is empty.");
}

// Nullish coalescing operator (??): null and undefined

const name = null;
const username = name ?? "Guest";
console.log(username);

// Terniary operator

// condition ? true : false

const age = 18;
const isAdult = age >= 18 ? "Adult" : "Not an adult";
console.log(isAdult);
