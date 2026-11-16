const claimDecisions = [];

const incomingDecisions = [
  "APPROVED",
  "APPROVED",
  "REJECTED",
  "APPROVED",
  "PENDING_DOCS",
];

console.log("Processing Claims...\n");

for (let i = 0; i < incomingDecisions.length; i++) {
  const decision = incomingDecisions[i];
  claimDecisions.push(decision);
  console.log(`Claim ${claimDecisions.length} processed: ${decision}`);
}

console.log("\nProcessing Summary:");
console.log(`Total claims processed: ${claimDecisions.length}`);
console.log("The complete decisions array:", claimDecisions);

const rejectionIndex = claimDecisions.indexOf("REJECTED");

if (rejectionIndex !== -1) {
  console.log(`Contains rejections: Yes (found at index ${rejectionIndex})`);
} else {
  console.log("Contains rejections: No");
}
