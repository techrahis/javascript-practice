let a = 5;
var b = 5;
const c = 5;

if (true) {
  let a = 6;
  var b = 6;
  const c = 6;

  console.log("Block");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Global");
console.log(a);
console.log(b);
console.log(c);
