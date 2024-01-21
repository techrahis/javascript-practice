new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (error) {
      resolve({ name: "Tim", age: 18 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

for (let i = 0; i < 5; i++) {
  new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  })
    .then((res) => res[0])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
