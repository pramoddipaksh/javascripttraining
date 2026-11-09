/* 1. Create three variables:
   - `patientId` with value `"P-1001"`
   - `insuranceId` with value `"INS-778"`
   - `referralCode` with value `""`  */

let patientId = "P-1001";

let insuranceId = "";

let referralCode = "";

console.log("Checking intake details..");

console.log("Patient ID:", patientId);

console.log("Insurance ID:", insuranceId);

console.log("Referral code:", referralCode);

/*2. Write an if-else statement that:
   - Checks if (patientId is NOT empty AND insuranceId is NOT empty) OR referralCode is NOT empty
   - If yes, print: `"Sufficient intake information"`
   - If no, print: `"Insufficient intake information - provide patient ID+insurance ID OR a referral code"`*/

if ((patientId !== "" && insuranceId !== "") || referralCode !== "") {
  console.log("Sufficient intake information");
} else {
  console.log(
    "Insufficient intake information - provide patient ID + insurance ID OR referral code",
  );
}
