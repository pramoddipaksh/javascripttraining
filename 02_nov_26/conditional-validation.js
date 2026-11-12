console.log("Scenario 1:");
let email = "customer@examplebank.com";
console.log("Testing email: " + email);

if (email.includes("@") && email.includes(".")) {
  console.log("Valid email format");
} else {
  console.log("Invalid email format");
}

console.log("\n Scenario 2:");
let transactionStatus = "APPROVED";

if (transactionStatus === "APPROVED") {
  console.log("Transaction approved");
} else if (transactionStatus === "DECLINED") {
  console.log("Transaction declined - contact your bank");
} else if (transactionStatus === "PENDING") {
  console.log("Transaction pending");
} else {
  console.log("Unknown transaction status");
}

console.log("\n Scenario 3:");

let portalPassword = "Bank@12345";

console.log(`Password: ${portalPassword}`);
console.log(`Length: ${portalPassword.length} characters`);

if (portalPassword.length < 6) {
  console.log("Weak password - too short");
} else if (portalPassword.length < 10) {
  console.log("Medium password strength");
} else {
  console.log("Strong password");
}

console.log("\n Scenario 4:");

let score = 95;

console.log(`Loan Score: ${score}`);

if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score >= 80) {
  console.log("Grade: B (Good)");
} else if (score >= 70) {
  console.log("Grade: C (Average)");
} else if (score >= 60) {
  console.log("Grade: D (Pass)");
} else {
  console.log("Grade: F (Fail)");
}

console.log("\n Scenario 5: Part A: ");

function checkTransactionNested(accountId, amount) {
  if (accountId !== null) {
    if (amount >= 0) {
      if (amount <= 10000) {
        return "Valid: " + accountId + " for $" + amount;
      } else {
        return "Error: Amount exceeds limit";
      }
    } else {
      return "Error: Negative amount";
    }
  } else {
    return "Error: No account ID";
  }
}

console.log("\n Scenario 5: Part B: ");

function checkTransactionRewrite(accountId, amount) {
  if (accountId === null) {
    return "Error: No account ID";
  }
  if (amount < 0) {
    return "Error: Negative amount";
  }
  if (amount > 10000) {
    return "Error: Amount exceeds limit";
  }

  return "Valid: " + accountId + " for $" + amount;
}
console.log(checkTransactionRewrite(null, 300));
console.log(checkTransactionRewrite("ACC-1001", -50));
console.log(checkTransactionRewrite("ACC-1001", 15000));
console.log(checkTransactionRewrite("ACC-1001", 250));

console.log("\n Scenario 6: ");

let transactionStatuss = "DECLINED";

console.log(`Status: ${transactionStatuss}`);

switch (transactionStatuss) {
  case "APPROVED":
    console.log("Transaction approved");
    break;
  case "DECLINED":
    console.log("Transaction declined - contact your bank");
    break;
  case "PENDING":
    console.log("Transaction pending");
    break;
  case "ON_HOLD":
    console.log("Transaction on hold - review required");
    break;
  default:
    console.log("Unknown transaction status");
}

console.log("\n Scenario 7: ");

let responseCode = 51;

console.log(`Response Code: ${responseCode}`);

switch (responseCode) {
  case 0:
    console.log("Approved - transaction successful");
    break;
  case 8:
    console.log("Approved - ID verification required");
    break;
  case 5:
  case 51:
  case 61:
    console.log("Declined - insufficient funds or over limit");
    break;
  case 54:
    console.log("Declined - expired card");
    break;
  case 91:
  case 96:
  case 99:
    console.log("System error - try again later");
    break;
  default:
    console.log("Unknown response code: " + responseCode);
}

console.log("\n Scenario 8a: ");

let scoress = 85;

//for (let score of scoress) {
// process.stdout.write(`Score ${score} -> `);

switch (Math.floor(scoress / 10)) {
  case 10:
  case 9:
    console.log("Grade: A (Excellent)");
    break;
  case 8:
    console.log("Grade: B (Good)");
    break;
  case 7:
    console.log("Grade: C (Average)");
    break;
  case 6:
    console.log("Grade: D (Pass)");
    break;
  default:
    console.log("Grade: F (Fail)");
}

console.log("\n Scenario 8b: ");

let processingTime = 3.5; // transaction processing time in seconds

switch (true) {
  case processingTime < 1:
    console.log("Instant processing");
    break;
  case processingTime < 3:
    console.log("Fast processing");
    break;
  case processingTime < 6:
    console.log("Acceptable - flag if this becomes a trend");
    break;
  default:
    console.log("Slow - investigate the delay");
}

console.log("\n Scenario 8c: Snippet A:");

let alertPriority = "high";

switch (alertPriority) {
  case "High":
    console.log("Urgent");
    break;
  case "high":
    console.log("Also urgent");
    break;
}
//What does this show? Why? (Hint: `switch` uses `===`)
// output: Also urgent; case sensitive and `switch` uses `===` strict

console.log("\n Scenario 8c: Snippet B:");

let x = 2;

switch (x) {
  case 1:
    console.log("one");
  case 2:
    console.log("two");
  case 3:
    console.log("three");
  default:
    console.log("other");
}
// What does this show? Why? How do you fix it to print only `"two"`?
// output: two three other; use break;

console.log("\n Scenario 8c: Snippet C:");
/*
| Situation | Better choice |
|---|---|
| Matching one variable against 5+ fixed string/number values | `switch` |
| Checking ranges (`score >= 80`) | `if-else-if` |
| Multiple conditions combined with `&&` or `||` | `if-else-if` |
| Grouping several values with the same outcome | `switch` (fall-through) |
| Just two outcomes | ternary or `if-else` |
*/
