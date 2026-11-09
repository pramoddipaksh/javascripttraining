let transactionStatuses = [
  "APPROVED",
  "DECLINED",
  "APPROVED",
  "PENDING",
  "APPROVED",
];
let declinePosition = transactionStatuses.indexOf("DECLINED");
console.log(declinePosition);

let indxOfNonExistentValue = transactionStatuses.indexOf("DECLINEDasdasdadawd");
console.log(indxOfNonExistentValue);

if (transactionStatuses.indexOf("APPROVED") !== -1) {
}

transactionStatuses.lastIndexOf("APPROVED");
if (transactionStatuses.includes("APPROVED")) {
  console.log("APPROVED is there in the array");
}
