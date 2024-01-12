let a = 5;
var b = 5;
const c = 5;

if (true) {
  let a = 6;
  var b = 6;
  const c = 6;

  //   console.log("Block");
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
}

// console.log("Global");
// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++++++ Closure +++++++++++++++++
function x() {
  const user = "raj";
  function y() {
    const user2 = "ram";
    console.log(user); // using the parent function object
  }
  //   console.log(user2); // error
  y();
}
x();

// +++++++++++++++++ Hoisting +++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// console.log(addOne2(5)); //error

const addOne2 = function (num) {
  return num + 1;
};

console.log(addOne2(5)); // coorect
