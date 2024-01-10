// Singletons
// Object.create

// Literal

const mySym = Symbol("myKey1");

let user = {
  name: "Rajarshi",
  fullName: "Rajarshi Samaddar",
  //   "fullName": "Rajarshi Samaddar",
  [mySym]: "myKey1",
  email: "hello@rajarshisamaddar.com",
  age: 20,
  isLoggedin: false,
};

// console.log(user.name);
// console.log(user["name"]); // right way and bracket notation
// console.log(user["fullName"]) // bracket notation

// console.log(user[mySym]);
// console.log(typeof user[mySym]);

// user.email = "hello2@rajarshisamaddar.com";
// console.log(user);
// Object.freeze(user); // freeze the object
// user.age = 30;
// console.log(user);

user.greetings = function () {
  console.log(`Hello, ${this.name}`);
};

// console.log(user.greetings); // [Function (anonymous)]
// console.log(user.greetings()); // Hello, Rajarshi // undefined
// user.greetings(); // Hello, Rajarshi
