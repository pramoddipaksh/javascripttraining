/**
 * Arrays -
 * if else if else if else
 * switch case
 * for
 * for each
 * string method include
 * email validation
 */

let empIds = [342, 42, 523, 53, 56, 2523];
for (let empID of empIds) {
  if (empID === 42) {
    continue;
  }
  console.log(empID);
}
//Using for each loop print all the emp IDS
let weekdays = ["MON", "TUE", "WED", "THUR"];

for (let i = 0; i < weekdays.length; i++) {
  console.log(weekdays[i]);
}

for (let weekday of weekdays) {
  //weekday = "WED"
  console.log(weekday);
}

let payoutAmounts = [12000, 0, 8500, 0, 4000]; // 0 = claim withdrawn, no amount

let totalPayout = 0;
let claimsPaid = 0;

for (let i = 0; i < payoutAmounts.length; i++) {
  if (payoutAmounts[i] === 0) {
    console.log("Claim " + (i + 1) + ": withdrawn, skipping");
    continue; // jump straight to the next claim
  }

  // The lines below only run for claims that were NOT skipped
  totalPayout = totalPayout + payoutAmounts[i];
  claimsPaid++;
  console.log(
    "Claim " +
      (i + 1) +
      ": paid " +
      payoutAmounts[i] +
      ", running total " +
      totalPayout,
  );
}

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

let attempts = 0;
let success = false;
let maxAttempts = 3;

while (!success && attempts < maxAttempts) {
  attempts++;
  console.log("Attempt " + attempts + "...");

  // Simulate random success (50% chance)
  success = Math.random() > 0.5;

  if (success) {
    console.log("  Submission accepted!");
  } else {
    console.log("  Submission failed, trying again...");
  }
}

console.log();
if (success) {
  console.log("Final result: Accepted after " + attempts + " attempts");
} else {
  console.log("Final result: Failed after " + attempts + " attempts");
}

count = 4;

while (count < 5) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count++;
} while (count < 5);
