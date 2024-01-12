const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Rahul";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "hello@rajarshisamaddar.com",
  fullname: {
    userfullname: {
      firstname: "Rajarshi",
      lastname: "Samaddar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname); // Optional chaining

// todo: Learn Optional Chaining in JS

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = { obj1, obj2, obj3 };
// const obj4 = { ...obj1, ...obj2, ...obj3 }; // Works perfect and modernD
// const obj4 = obj1.concat(obj2); // Will not work
// const obj4 = Object.assign(obj1, obj2, obj3); // perfect but it coppies all to obj1 to fix
const obj4 = Object.assign({}, obj1, obj2, obj3); // works perfect

// console.log(obj4);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "a@email.com",
  },
  {
    id: 2,
    email: "b@email.com",
  },
  {
    id: 3,
    email: "c@email.com",
  },
  {
    id: 4,
    email: "d@email.com",
  },
];

// console.log(user[0].email);

// console.log(Object.keys(user)); // [ '0', '1', '2', '3' ]
// console.log(Object.values(user)); // returns the whole array
// console.log(Object.entries(user));
/*
[
  [ '0', { id: 1, email: 'a@email.com' } ],
  [ '1', { id: 2, email: 'b@email.com' } ],
  [ '2', { id: 3, email: 'c@email.com' } ],
  [ '3', { id: 4, email: 'd@email.com' } ]
]
*/

// console.log(user.hasOwnProperty("isLoggedIn")); // false

// +++++++++++++++++ Object De-structuring +++++++++++++++++

const course = {
  courseName: "JavaScript",
  courseMentor: "Raj Shamani",
  price: 9999,
};

// console.log(course);

// const { courseName } = course;
// console.log(courseName); // JavaScript

const { courseName: cname } = course; // stored the value from courseName to cname
// console.log(cname); // JavaScript
