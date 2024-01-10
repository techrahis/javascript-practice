const name = "Rajarshi Samaddar";
const age = 22;
// console.log("My name is " + name + " and I am " + age + " years old."); // old way of concatenation using + operator
// console.log(`My name is ${name} and I am ${age} years old.`); // new way of concatenation using template literals which is more readable and uses string interpolation (using ${} syntax)

const str = String("Rajarshi Samaddar");
// console.log(typeof str); // string
// console.log(str.length); // 16
// console.log(str.toLowerCase()); // rajarshi Samaddar
// console.log(str.toUpperCase()); // RAJARSHI Samaddar
// console.log(str.substring(0, 8)); // Rajarshi
// console.log(str.charAt(0)); // R
// console.log(str.split(" ")); // ["Rajarshi", "Samaddar"]
// console.log(str.split("")); // ["R", "a", "j", "a", "r", "s", "h", "i", " ", "S", "a", "m", "a", "d", "a", "r"]
// console.log(str.normalize()); // Rajarshi Samaddar
// console.log(str.includes("Rajarshi")); // true
// console.log(str.includes("rajarshi")); // false
// console.log(str.startsWith("Rajar")); // true
// console.log(str.startsWith("rajar")); // false
// console.log(str.endsWith("Samaddar")); // true
// console.log(str.endsWith("Samaddar")); // false
// console.log(str.includes("maddar")); // true
// console.log(str.slice(0, 8)); // Rajarshi
// console.log(str.slice(-8)); // Samaddar
// console.log(str.slice(-17, -14)); // Raj
