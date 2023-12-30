"use strict"; // Enable newer version of JavaScript

// String: A sequence of characters used to represent text. Created using single, double, or backticks.
let name = "Rajarshi";

// Number: Numeric data type. Can be integer or floating point numbers.
let age = 22;

// Boolean: Logical data type that can only be true or false.
let isMarried = false;

// Undefined: A variable that has been declared but has not yet been assigned a value.
let x;
console.log(x); // undefined

// Null: An assignment value. It can be assigned to a variable to represent no value or no object.
let y = null;

// Symbol: A unique and immutable primitive value and may be used as the key of an Object property.
let sym1 = Symbol();

// BigInt: An integer with arbitrary precision. Can be used to safely store and operate on large integers beyond Number.MAX_SAFE_INTEGER.
let bigInt = 1234567890123456789012345678901234567890n;

// Object: A collection of properties, and a property is an association between a name (or key) and a value.
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Array: A special variable, which can hold more than one value at a time.
let cars = ["Saab", "Volvo", "BMW"];

// Function: A block of code designed to perform a particular task.
function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}

// Date: JavaScript Date objects represent a single moment in time in a platform-independent format.
let date = new Date();

// RegExp: A sequence of characters that forms a search pattern. Used with string methods to search, replace, etc.
let re = /ab+c/;

// Error: An object representing an error. It provides error information when an error occurs.
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}

// Map: A collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
let map = new Map();

// Set: A collection of values, where each value may occur only once.
let set = new Set();

// WeakMap: Similar to a Map, but keys must be objects and values can be arbitrary values.
let weakmap = new WeakMap();

// WeakSet: Similar to a Set, but it only stores objects, and it does not prevent those objects from being garbage collected.
let weakset = new WeakSet();

console.log(typeof date);

console.log(typeof null); // object
console.log(typeof undefined); // undefined
