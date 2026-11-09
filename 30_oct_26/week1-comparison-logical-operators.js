//1. Create a variable `age` with value `25`

console.log("Exercise 1: Screening Age Eligibility");
let age = 21;

console.log(`Age: ${age}`);

/*2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"Eligible for the screening (18-65)"`
   - If no, print: `"Outside the screening's eligible age range"`
   */
if (age >= 18 && age <= 65) {
  console.log("Eligible for the screening (18-65)");
} else {
  console.log("Outside the screening's eligible age range");
}
