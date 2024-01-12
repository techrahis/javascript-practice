const user = {
  user: "rajarshi",
  price: 699,

  welcomeMessage: function () {
    console.log(`${this.user}, welcome to the course.`);
  },
};

// user.welcomeMessage(); // rajarshi
// user.user = "rama";
// user.welcomeMessage(); // rama

// function chai() {
//   let name = "raj";
//   console.log(this.name); // undefined
// }

// const chai = function () {
//   let name = "raj";
//   console.log(this.name); // undefined
// };

// const chai = () => {
//   let name = "raj";
//   console.log(this.name); // undefined
// };

// chai();

// const sum = (a, b) => {
//   return a + b; // explicit return
// };

const sum = (a, b) => a + b; // implicit return

console.log(sum(56, 4));
