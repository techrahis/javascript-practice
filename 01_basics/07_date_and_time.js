let myDate = new Date();
// console.log(myDate); // 2024-01-10T09:46:04.151Z
// console.log(typeof myDate); // object
// console.log(myDate.toString()); // Wed Jan 10 2024 15:18:14 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Wed Jan 10 2024

let myPastDate = new Date(2001, 8, 14);
// console.log(myPastDate.toDateString()); // Fri Sep 14 2001

let myPastDateTime = new Date(2005, 9, 5, 5, 45, 15);
// console.log(myPastDateTime.toLocaleString()); // 10/5/2005, 5:45:15 AM
// console.log(myPastDateTime.toLocaleDateString()); // 10/5/2005

let timeStamp = Date.now();
console.log(timeStamp.toString()); // 1641822403991

let myDate2 = new Date(timeStamp);
console.log(myDate2.toLocaleDateString()); // 1/10/2022s
