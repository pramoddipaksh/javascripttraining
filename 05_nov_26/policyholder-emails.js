let policyholderEmails = [
  "alice@example.com",
  "ben@example.com",
  "chloe@example.com",
];

console.log("Policyholder Email Management\n");

// Print initial emails and count
console.log("Initial emails:");
console.log(policyholderEmails);
console.log(`Count: ${policyholderEmails.length}\n`);

// Add "dev@example.com" to the END
policyholderEmails.push("dev@example.com");
console.log("After adding dev@example.com to end:");
console.log(policyholderEmails);
console.log("");

// Add "admin@example.com" to the BEGINNING
policyholderEmails.unshift("admin@example.com");
console.log("After adding admin@example.com to beginning:");
console.log(policyholderEmails);
console.log("");

// Remove the last email
policyholderEmails.pop();
console.log("After removing last email:");
console.log(policyholderEmails);
console.log("");
// Remove the first email
policyholderEmails.shift();
console.log("After removing first email:");
console.log(policyholderEmails);
console.log("");

// Print final emails and count
console.log(`Final count: ${policyholderEmails.length}`);
