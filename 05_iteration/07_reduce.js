const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

// step 1: accumulator = 1, currentValue = 2, return 3
// step 2: accumulator = 3, currentValue = 3, return 6
// step 3: accumulator = 6, currentValue = 4, return 10
// step 4: accumulator = 10, currentValue = 5, return 15
// step 5: return 15

const sum2 = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 3);

console.log(sum); // 18

// 3 is the initial value of the accumulator

// step 1: accumulator = 3, currentValue = 1, return 4
// step 2: accumulator = 4, currentValue = 2, return 6
// step 3: accumulator = 6, currentValue = 3, return 9
// step 4: accumulator = 9, currentValue = 4, return 13
// step 5: accumulator = 13, currentValue = 5, return 18
