const codingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "Go",
  "Scala",
  "Rust",
  "Swift",
  "Kotlin",
];

// for each loop - used in Arrays
// it uses a callback function : a function that is passed as an argument to another function
// the callback function is executed inside the other function
// the callback function is executed once for each element in the array
// the callback function takes 3 arguments: the current element, the index of the current element, and the array itself

codingLanguages.forEach((language) => {
  console.log(language);
});

codingLanguages.forEach((language, index, arr) => {
  console.log(`${index}: ${language}`);
  console.log(arr);
});
