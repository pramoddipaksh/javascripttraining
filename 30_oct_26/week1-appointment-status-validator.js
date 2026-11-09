/* 1. Create two variables:
   - `status` with value `"COMPLETED"`
   - `complications` with value `0`
   */
let statuss = "COMPLETED";

let complications = 0;

console.log("Status:", statuss);

console.log("Complications:", complications);

/*2. Write an if-else statement that:
   - Checks if (status is "COMPLETED" OR "RESCHEDULED") AND complications equals 0
   - If yes, print: `"Appointment closed out cleanly"`
   - If no, print: `"Appointment needs follow-up"` */

console.log("Validation:");

// validation check
//
//
//
//
//
//
//

if (
  (statuss === "COMPLETED" || statuss === "RESCHEDULED") &&
  complications === 0
) {
  console.log("Appointment closed out cleanly");
} else {
  console.log("Appointment needs follow-up");
}
