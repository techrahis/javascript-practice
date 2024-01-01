// ********** 01. Conversion **********

let name = "Rajarshi";
let age = "25";

console.log(typeof name); // string
console.log(typeof age); // string

let ageNumber = Number(age); // Number() is a function
console.log(typeof ageNumber); // number

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(typeof Number("25rajarshi")); // number
console.log(Number("25rajarshi")); // NaN

// ********** 02. Operations **********

let value = 3;
console.log(value);
let negValue = -value;
console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(Math.pow(2, 3));
console.log(Math.floor(2.5));
console.log(Math.ceil(2.5));
console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.round(2.6));
console.log(Math.random());
console.log(Math.round(Math.random())); // get a random binary number
// get a random number between 5 and 10
console.log(Math.round(Math.random() * 5 + 5)); // get a random number between 5 and 10

// ********** 03. String **********

let str1 = "Rajarshi";
let str2 = "Samaddar";
console.log(str1 + str2);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "3"); // 33

console.log(3 + ((4 * 5) % 3));

console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 25 + 25;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
console.log(++gameCounter); // 102
console.log(gameCounter++); // 102
console.log(gameCounter); // 103

// study link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
