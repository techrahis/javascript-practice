// check if the citizen is eligible to vote in India or not.

const checkEligibility = ({ name = undefined, age = undefined }) => {
  if (age >= 18) {
    console.log(`${name} is eligible to vote in India.`);
  }
};

const citizen = {
  name: "Rajarshi",
  email: "hello@rajarshisamaddar.com",
  age: 20,
};

checkEligibility(citizen);
