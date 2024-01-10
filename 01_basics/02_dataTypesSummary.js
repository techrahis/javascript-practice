/* 

Types of Data Types

1. Primitive Data Types
7 types: String, Number, BigInt, Boolean, null, undefined, Symbol

const id = Symbol("1231");
const anotherId = Symbol("1231");

console.log(id); // Symbol(1231)
console.log(anotherId); // Symbol(1231)
console.log(id === anotherId); // false

// console.log(typeof null); // object


2. Non-primitive Data Types or Reference Types Object, Array, Function, Date, RegExp, etc.



JavaScript a statically typed or a dynamically typed language?

=> JavaScript is a dynamically typed language. 
It means you don't need to specify the type of a variable when declaring it. The type will get determined automatically while the program is being processed. You can assign different types of values to a variable during its lifetime.


Return type of variables in JavaScript
--------------------------------------
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

/*
Memory Allocation in JavaScript
--------------------------------

=> All Primitive values are stored in the stack memory.
=> All Reference(Non-Primitive) values are stored in the heap memory.

// Stack Memory Allocation
let name = "Rajarshi";
let newName = name;
newName = "Raj";
console.log(name); // Rajarshi
console.log(newName); // Raj

// Heap Memory Allocation
let arr = ["Rajarshi", "Raj", "Raja"];
let newArr = arr;
newArr[0] = "Raja";
console.log(arr); // ["Raja", "Raj", "Raja"]
console.log(newArr); // ["Raja", "Raj", "Raja"]





What is mutable and immutable in JavaScript? With examples.
-----------------------------------------------------------
=> In JavaScript, mutable and immutable refer to whether or not an object's state can be changed after it is created.

Mutable objects are those whose state can be changed after they are created. In JavaScript, objects and arrays are mutable by default. Here's an example:
let mutableArray = [1, 2, 3];
mutableArray.push(4); // The array is now [1, 2, 3, 4]

let mutableObject = { name: 'John' };
mutableObject.age = 25; // The object is now { name: 'John', age: 25 }

Immutable objects are those whose state cannot be changed after they are created. In JavaScript, primitive types (like number, string, boolean, null, undefined, and symbol) are immutable. Here's an example:

let immutableString = 'Hello';
immutableString += ', World!'; // This doesn't change the original string, but creates a new one

let immutableNumber = 42;
immutableNumber += 1; // This doesn't change the original number, but creates a new one

*/
