console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false

console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1
console.log(true == 1); // true

console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null <= 0); // true

console.log(null == undefined); // true

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false

console.log("2" === 2); // false
