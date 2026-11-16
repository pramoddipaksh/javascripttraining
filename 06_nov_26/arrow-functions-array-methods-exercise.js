/* // Exercise 1a: Convert this function
function greetPatient(name) {
    return "Hello, " + name;
} */

// 1a: Arrow function for greetPatient
//const greetPatient = // YOUR CODE HERE

const greetPatient = (name) => "Hello, " + name;

/*// Exercise 1b: Convert this function
function isEligibleForVaccine(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
} */
// 1b: Arrow function for isEligibleForVaccine (hint: use ternary operator)
//const isEligibleForVaccine = // YOUR CODE HERE

const isEligibleForVaccine = (age) => (age >= 18 ? true : false);

/* // Exercise 1c: Convert this function
function calculateBill(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
}  */

// 1c: Arrow function for calculateBill
//const calculateBill = // YOUR CODE HERE

const calculateBill = (price, quantity) => {
  let total = price * quantity;
  let tax = total * 0.1;
  return total + tax;
};

console.log("Exercise 1:\n");
// Test them
console.log(greetPatient("Aisha")); // "Hello, Aisha"
console.log(isEligibleForVaccine(25)); // true
console.log(calculateBill(100, 3)); // 330

console.log("\n Exercise 2:\n");

let appointmentTypes = [
  "Annual Physical",
  "Dental Checkup",
  "Eye Exam",
  "Vaccination",
  "Follow-up Visit",
];
