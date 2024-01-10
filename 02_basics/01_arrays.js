const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr.length); // 6
// console.log(myArr[1]); // 1
const newMyArr = new Array(1, 2, 3, 4, 5);
// console.log(newMyArr); // [ 1, 2, 3, 4, 5 ]

/*
Array is a data structure that can hold multiple values of any type. It uses heap memory to store the values. It is a reference type thus it is stored in the stack and the actual values are stored in the heap. If uses concept of shallow copy and any changes made in the copy array will reflect in the original array.

It is an object. It has a length property. It has many methods like push, pop, shift, unshift, splice, slice, etc. 
*/

// ++++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++

const myArr2 = [1, 2, 3, 4, 5];
myArr2.push(6); // adds element at the end of the array
// console.log(myArr2); // [ 1, 2, 3, 4, 5, 6 ]
myArr2.pop(); // removes element from the end of the array
// console.log(myArr2); // [ 1, 2, 3, 4, 5 ]
myArr2.unshift(0); // adds element at the beginning of the array
// console.log(myArr2); // [ 0, 1, 2, 3, 4, 5 ]
myArr2.shift(); // removes element from the beginning of the array
// console.log(myArr2); // [ 1, 2, 3, 4, 5 ]
// console.log(myArr2.slice(1, 3)); // returns a new array with elements from index 1 to 2 => [ 2, 3 ]
// console.log(myArr2); // [ 1, 2, 3, 4, 5 ]
// myArr2.splice(1, 3); // removes elements from index 1 to 2
// console.log(myArr2); // [ 1, 5 ]

// console.log(myArr2.includes(2)); // true
// console.log(myArr2.includes(6)); // false
// console.log(myArr2.indexOf(2)); // 1
// console.log(myArr2.indexOf(6)); // -1

const myArr3 = myArr2.join(); // converts array to string

// console.log(myArr2); // [ 1, 2, 3, 4, 5 ]
// console.log(myArr3); // 1,2,3,4,5
