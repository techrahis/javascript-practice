const amount = 400;
// console.log(amount);

const newAmount = new Number(400);
// console.log(newAmount); // [Number: 400]
// console.log(typeof newAmount); // object
// console.log(newAmount.valueOf()); // 400
// console.log(typeof newAmount.valueOf()); // number
// console.log(newAmount.toFixed(2)); // 400.00
// console.log(typeof newAmount.toFixed(2)); // string
// console.log(newAmount.toFixed(2).valueOf()); // 400.00
// console.log(typeof newAmount.toFixed(2).valueOf()); // string

const otherNumber = 129.123456789;
// console.log(otherNumber.toPrecision(4)); // 129.1
// console.log(otherNumber.toPrecision(5)); // 129.12
// console.log(otherNumber.toPrecision(3)); // 129
// console.log(otherNumber.toPrecision(2)); // 1.3e+2

const hundreds = 10000000000000;
// console.log(hundreds.toLocaleString()); // 10,000,000,000,000
// console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,00,00,000
// console.log(hundreds.toLocaleString("bn-IN")); // ১,০০,০০,০০,০০,০০,০০,০০,০০,০০০

const MAX = Number.MAX_VALUE;
// console.log(MAX); // 1.7976931348623157e+308
const MAX_SAFE = Number.MAX_SAFE_INTEGER;
// console.log(MAX_SAFE); // 9007199254740991
const MIN = Number.MIN_VALUE;
// console.log(MIN); // 5e-324
const MIN_SAFE = Number.MIN_SAFE_INTEGER;
// console.log(MIN_SAFE); // -9007199254740991

// ++++++++++++++++++++++++ JavaScript Math Object ++++++++++++++++++++++++
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.abs(-10)); // 10
// console.log(Math.abs(10)); // 10
// console.log(Math.abs("-10")); // 10
// console.log(Math.abs("10")); // 10
// console.log(Math.abs(null)); // 0
// console.log(Math.abs("")); // 0
// console.log(Math.round(10.5)); // 11
// console.log(Math.round(10.4)); // 10
// console.log(Math.ceil(10.5)); // 11
// console.log(Math.ceil(10.4)); // 11
// console.log(Math.ceil(-10.5)); // -10
// console.log(MAth.floor(10.5)); // 10
// console.log(Math.floor(10.4)); // 10
// console.log(Math.floor(-10.5)); // -11
// console.log(Math.sqrt(9)); // 3
// console.log(Math.sqrt(16)); // 4
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(26)); // 5.0990195135927845
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.max(-1, -2, -3, -4, -5)); // -1
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.min(-1, -2, -3, -4, -5)); // -5
// console.log(Math.random()); // 0.12345678901234567
// console.log(Math.random()); // 0.5432123456789012
// console.log(Math.random()); // 0.9876543210987654
// console.log(Math.round(Math.random())); // returns 0 or 1
// console.log(Math.round(Math.random() * 10)); // returns 0 to 10
// console.log(Math.round(Math.random() * 5 + 5)); // returns 5 to 10
