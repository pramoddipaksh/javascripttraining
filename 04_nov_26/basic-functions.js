function generateAccountId(firstName, lastName) {
  return `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
}

function generateEmail(firstName, lastName) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`;
}

function generateTempPin(seed) {
  return seed + "00";
}

const accountId = generateAccountId("John", "Doe");

const email = generateEmail("John", "Doe");

const tempPin = generateTempPin("42");

console.log(`Account ID: ${accountId}`);

console.log(`Email: ${email}`);

console.log(`Temp PIN: ${tempPin}`);
