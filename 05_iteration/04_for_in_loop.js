// for in loop - used in Objects

const myObject = {
  js: "Javascript",
  php: "PHP",
  rb: "Ruby",
  py: "Python",
  java: "Java",
  go: "Golang",
};

for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

// for in loop - used in Arrays

const myArray = ["John", "Bob", "Barry", "Oliver", "Peter"];

for (const key in myArray) {
  console.log(`${key}: ${myArray[key]}`);
}
