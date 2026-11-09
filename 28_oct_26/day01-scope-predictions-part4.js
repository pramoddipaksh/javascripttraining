// Snippet A
/* predicted comment/output:
   Inside: PUN-02
   Outside: MUM-01                       */
// prediction right / wrong? why?: right
let branchCode = "MUM-01";
if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode);
}
console.log("Outside:", branchCode);

// Snippet B
/* predicted comment/output:
   undefined
   Fee after: 250                    */
// prediction right / wrong? why?: right partially, value 'undefined' correct but label 'Fee before:' not written.
function showServiceFee() {
  console.log("Fee before:", serviceFee);
  var serviceFee = 250;
  console.log("Fee after:", serviceFee);
}
showServiceFee();

// Snippet C
/* predicted comment/output:
   Limit with var: 50000                  */
// prediction right / wrong? why?: right
function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;
  }
  console.log("Limit with var:", dailyLimit);
}
checkLimitWithVar();

// Snippet D
/* predicted comment/output:
   undefined or error message              */
// prediction right / wrong? why?: partially right, undefined means not defined printed along with Reference error.
function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000;
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();
