function generateAccountId(firstName, lastName) {
  return `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
}

function generateEmail(firstName, lastName) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`;
}

function generateTempPin(seed) {
  return seed + "00";
}

// 1. Build a full customer record object
function generateCustomer(firstName, lastName) {
  return {
    name: `${firstName} ${lastName}`,
    email: generateEmail(firstName, lastName),
    accountId: generateAccountId(firstName, lastName),
    balance: 0,
    isActive: true,
  };
}

const customer1 = generateCustomer("John", "Doe");
const customer2 = generateCustomer("Jane", "Smith");

console.log("Customer 1:");
console.log(customer1);

console.log("\nCustomer 2:");
console.log(customer2);
