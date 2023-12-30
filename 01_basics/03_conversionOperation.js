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
