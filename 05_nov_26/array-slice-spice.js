/**
 * Revision
 * - how add values/modify values using index
 * - Array functions, push, unshift, shift, pop
 * - searching elements  - indexOf and includes
 * - function
 *  - input parameters
 *  - default parameters
 *  - return value
 * - funciton expression
 *
 *
 * - Object method by Javascript
 */

//slice

let accountTypes = ["Savings", "Checking", "Credit", "Loan", "Mortgage"];

let subset = accountTypes.slice(1, 3); //Start from inex 1 upto index 3 but 3 is not included

console.log(subset);

console.log(accountTypes.slice(2)); //Starting from 2 till end
console.log(accountTypes.slice(-2)); //Last two
console.log(accountTypes.slice());

let copy = accountTypes.slice();
console.log("copy******", copy);

//splice - Modify the original array

let transactionList = [
  "Deposit",
  "Withdrawal",
  "Transfer",
  "PayBill",
  "Refund",
];
seeWhatThisContains = transactionList.splice(2, 2); //Remove element at index 2, remove two elements
console.log(transactionList);
console.log(seeWhatThisContains);
transactionList.push("TransferNew", "PayBillNew");
console.log(transactionList);
transactionList.splice(1, 0, "Online", "Offline"); //start at index 1, do not delete anything, insert Online and Offline
console.log(transactionList);
transactionList.splice(1, 1, "UpdatedOnline");
console.log(transactionList);
