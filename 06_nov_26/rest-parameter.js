//rest parameter - ...
// function logDecisionsFixed(d1, d2, d3) {
//   console.log("Decision 1: " + d1);
//   console.log("Decision 2: " + d2);
//   console.log("Decision 3: " + d3);
// }
// logDecisionsFixed("APPROVED", "REJECTED", "APPROVED", "UNDER_REVIEW");

function logDecisions(...decisions) {
  //rest parameter packs individual arguments into an array.
  console.log("Number of decisions: " + decisions.length);
  console.log("Decisions array: " + decisions);
  console.log();

  decisions.forEach((decision, index) => {
    console.log("  Claim " + (index + 1) + ": " + decision);
  });
}
//logDecisions("APPROVED");
logDecisions("APPROVED", "REJECTED", "PENDING");

let decisionArray = ["APPROVED", "REJECTED", "PENDING", "PARTIAL APPROVED"];
logDecisions(...decisionArray);

function processBatch(batchName, region, ...claimIds) {
  console.log("Batch: " + batchName);
  console.log("Region: " + region);
  console.log("Claims to process:");

  claimIds.forEach((claimId, index) => {
    console.log("  " + (index + 1) + ". " + claimId);
  });

  console.log("Total: " + claimIds.length + " claims");
}

processBatch("Auto Claims", "West Region", "CLM-4001", "CLM-4002", "CLM-4003");

processBatch(
  "Property Claims",
  "East Region",
  "CLM-5001",
  "CLM-5002",
  "CLM-5003",
  "CLM-5004",
  "CLM-5005",
);
