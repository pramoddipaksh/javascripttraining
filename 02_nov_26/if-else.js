let leaveStatus = "REJECTED";
let employeeId = "";

if (leaveStatus === "APPROVED") {
  console.log("✓ Leave request approved!");
} else {
  console.log("✗ Leave request rejected!");
}

if (employeeId === "") {
  console.log("Error: Employee ID is required");
} else {
  console.log("Employee ID: " + employeeId);
  console.log("Validation passed!");
}

let requestStatus = "REJECTED";

if (requestStatus === "APPROVED") {
  console.log("✓ Request approved");
} else if (requestStatus === "REJECTED") {
  console.log("✗ Request rejected");
} else if (requestStatus === "PENDING") {
  console.log("⊘ Request pending");
} else {
  console.log("? Unknown request status");
}

let days = 8;

console.log("Days requested: " + days);
console.log("\nChecking conditions TOP to BOTTOM:");

if (days < 6) {
  console.log("  ✗ First condition (< 6): FALSE, skip");
  console.log("  Result: Standard leave");
} else if (days < 10) {
  console.log("  ✗ First condition (< 6): FALSE, skip");
  console.log("  ✓ Second condition (< 10): TRUE, EXECUTE THIS");
  console.log("  Result: Extended leave");
} else {
  console.log("  Result: Long leave");
}

let email = "employee@example.com";

if (email.includes("@") && email.includes(".")) {
  console.log("Valid Email");
} else {
  console.log("Email is invalid");
}

requestStatus = "REJECTED";

switch (requestStatus) {
  case "APPROVED":
    console.log("Request Approved");
    break;
  case "REJECTED":
    console.log("Request Rejected");
    break;
  case "PENDING":
    console.log("Request Pending");
    break;
  default:
    console.log("Unknown Status");
}

let tenureYears = 3;

switch (true) {
  case tenureYears < 1:
    console.log("New hire");
    break;
  case tenureYears >= 1 && tenureYears <= 5:
    console.log("Established employee");
    break;
  default:
    console.log("Senior employee");
}
