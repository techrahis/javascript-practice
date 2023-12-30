const userId = 132156;
let userName = "Rajarshi Samaddar";
var userEmail = "hello@rajarshisamaddar.com";
userPassword = "12345678";

console.log(userId, userName, userEmail, userPassword);
// 132156 'Rajarshi Samaddar' 'hello@rajarshisamaddar' '12345678'

// userId = 123456; Error: Assignment to constant variable.
userName = "Rajarshi Samaddar Edited";

console.log(userId, userName, userEmail, userPassword);
// 132156 'Rajarshi Samaddar Edited' 'hello@rajarshisamaddar' '12345678'

console.table({ userId, userName, userEmail, userPassword });

console.table([userId, userName, userEmail, userPassword]);

{
  // console.log(userName); Error: userName is not defined
  console.log(userEmail);
  let userName = "raj";
  console.log(userName);
  {
    console.log(userEmail);
    console.log(userName);
  }
}

let user;
console.log(user); // undefined
