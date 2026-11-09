/**
 * for loop
 *  for each
 * while loop
 * do while
 * nest for
 */

for (let i = 1; i < 5; i++) {
  console.log("Iteration: ", i);
}
//console.log(i); i is not available outside for loop
console.log("Outside For loop");

let weekdays = ["MON", "TUE", "WED", "THUR"];

for (let i = 0; i < weekdays.length; i++) {
  console.log(weekdays[i]);
}

for (let weekday of weekdays) {
  //weekday = "WED"
  console.log(weekday);
}

let riskScores = [92, 75, 40, 60];

for (let i = 0; i < riskScores.length; i++) {
  let score = riskScores[i];

  if (score >= 80) {
    console.log("Score " + score + " → High risk");
  } else if (score >= 60) {
    console.log("Score " + score + " → Medium risk");
  } else {
    console.log("Score " + score + " → Low risk");
  }
}

for (let i = 5; i > 0; i--) {
  console.log("Iteration: ", i);
}

//Search if "Health" is there in the array.
let allClaimTypes = ["Auto", "Home", "Health", "Travel", "Life"];
let searchFor = "Health1";

console.log("Searching for '" + searchFor + "' in: " + allClaimTypes);
console.log();

let found = false;
let foundIndex = -1;

for (let i = 0; i < allClaimTypes.length; i++) {
  console.log("Checking index " + i + ": " + allClaimTypes[i]);

  if (allClaimTypes[i] === searchFor) {
    console.log("  ✓ Found it!");
    found = true;
    foundIndex = i;
    break; // Stop searching
  }
}
console.log(foundIndex);

if (foundIndex === -1) {
  console.log("Element is not in the array");
} else {
  console.log(`String ${searchFor} found at position ${foundIndex}`);
}

for (let claimType of allClaimTypes) {
}
