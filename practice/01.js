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

// concept of reference variables in JavaScript.
const temp = [1, 2, 3, 4, 5];
const temp2 = temp;
temp2.pop();
console.log(temp2);
console.log(temp);

let date = new Date();
console.log(date.toLocaleDateString((location = "en-IN")));
console.log(date.toLocaleDateString((location = "bn-IN")));

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = (nums, val) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
};

removeElement(nums, val);
console.log(nums);


