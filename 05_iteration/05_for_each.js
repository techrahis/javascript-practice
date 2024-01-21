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

codingLanguages.forEach((language) => {
  console.log(language);
});

codingLanguages.forEach((language, index, arr) => {
  console.log(`${index}: ${language}`);
  console.log(arr);
});
