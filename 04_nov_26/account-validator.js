function validateAccountNumber(accountNumber) {
  if (accountNumber.startsWith("ACC-") && accountNumber.length === 8) {
    return "VALID";
  }
  return "INVALID";
}

const testNumbers = ["ACC-1001", "ACC-1", "1001"];

for (const number of testNumbers) {
  console.log(`${number}: ${validateAccountNumber(number)}`);
}
