// for of loop - used for arrays

const names = ["John", "Bob", "Barry", "Oliver", "Peter"];

for (const name of names) {
  console.log(name);
}

// Maps

const userRoles = new Map();
userRoles.set("John", "admin");
userRoles.set("Barry", "user");
userRoles.set("Peter", "user");
userRoles.set("Oliver", "admin");

for (const user of userRoles.keys()) {
  console.log(user);
}

for (const role of userRoles.values()) {
  console.log(role);
}

for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}

for (const user of userRoles) {
  console.log(user);
}
