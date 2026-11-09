let transactionStatuses = ["APPROVED", "DECLINED", "APPROVED"];
console.log(transactionStatuses.length);
console.log(transactionStatuses[2]);
transactionStatuses[0] = "REJECTED";
transactionStatuses[3] = "APPROVED";
console.log(transactionStatuses);
console.log(transactionStatuses.length);
// transactionStatuses[10] = "SKIPPED"; //creates gaps in the array.
// console.log(transactionStatuses);
// console.log(transactionStatuses.length);

//It is always good to use array funcion to add values

//to add a value at the end use push()
transactionStatuses.push("SKIPPED");
console.log(transactionStatuses);

//To add a value at the start, use `unshift`.
transactionStatuses.unshift("PENDING");
console.log(transactionStatuses);

//To Remove a value from the end. Use `pop()`.
transactionStatuses.pop();
console.log(transactionStatuses);

//To remove the value from the start, use the `shift()`.
transactionStatuses.shift();
console.log(transactionStatuses);
