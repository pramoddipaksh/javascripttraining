//Pure functions and impure functions
let count = 0;
let firstName = "ABC";

//pure function - does not affect/change anythign which is defined outside the function
function calculateApprovalRate(approved, total) {
  //count++; //This line if uncommented will make this function impure
  console.log(firstName);
  return Math.round((approved / total) * 100);
}

let approvedRate = calculateApprovalRate(74, 123);
console.log(approvedRate);

//impure function - modifies somethign which is outside the function
function calculateApprovalRateImure(approved, total) {
  count++;
  console.log(firstName);
  return Math.round((approved / total) * 100);
}
