// advanced iteration concepts

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

// const values = codingLanguages.forEach((language) => {
//   return language;
// });

// console.log(values); // undefined

// filter - used in Arrays

// const filteredValues = codingLanguages.filter((language) => {
//   return language.length > 4;
// });

// console.log(filteredValues);

const books = [
  {
    title: "The Alchemist",
    genre: "Adventure",
    rating: 9.5,
    published: 1988,
  },
  {
    title: "The Prophet",
    genre: "Spiritual",
    rating: 8.5,
    published: 1923,
  },
  {
    title: "Siddhartha",
    genre: "Spiritual",
    rating: 9.0,
    published: 1922,
  },
  {
    title: "The 5 AM Club",
    genre: "Self-help",
    rating: 7.5,
    published: 2018,
  },
  {
    title: "Kane and Abel",
    genre: "Drama",
    rating: 8.0,
    published: 1979,
  },
  {
    title: "The Monk who sold his Ferrari",
    genre: "Self-help",
    rating: 8.5,
    published: 1997,
  },
  {
    title: "The Power of Now",
    genre: "Spiritual",
    rating: 9.0,
    published: 1997,
  },
  {
    title: "The Kite Runner",
    genre: "Drama",
    rating: 8.5,
    published: 2003,
  },
  {
    title: "The Da Vinci Code",
    genre: "Thriller",
    rating: 7.5,
    published: 2003,
  },
  {
    title: "Angels and Demons",
    genre: "Thriller",
    rating: 7.0,
    published: 2000,
  },
];

// const filteredBooks1 = books.filter((book) => {
//   return book.rating > 8.0;
// });

// const filteredBooks2 = books
//   .filter((book) => {
//     return book.rating > 8.0;
//   })
//   .map(({ title, rating }) => ({ title, rating }));

// map - used in Arrays

const mappedBooks = books
  .map((book) => {
    return { title: book.title, rating: book.rating };
  })
  .filter((book) => book.rating > 8.0);

console.log(mappedBooks);
