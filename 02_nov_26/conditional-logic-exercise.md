# Conditional Logic - Exercise

**Topic:** Conditional Logic & Validation
**File to Create:** `conditional-validation.js`

---

## Learning Goals

By completing this exercise, you will:
- Practice if-else statements
- Use else if for multiple conditions
- Write validation logic for real scenarios
- Use switch statements for fixed-value matching
- Group multiple cases with intentional fall-through
- Use switch with expressions (computed values, `switch(true)` for ranges)
- Know when to choose switch vs if-else-if vs ternary
- Build confidence with decision-making code

---

## Setup

1. Open VSCode
2. Create a new file: `conditional-validation.js`
3. Save it in your training folder
4. Test your code by running: `node conditional-validation.js`

---

## Exercise 1: Customer Email Validation

**Scenario:** Before approving a new account, validate the customer's email address.

**Requirements:**
1. Create a variable `email` with value `"customer@examplebank.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"Valid email format"`
   - If no, print: `"Invalid email format"`

**Hint:** Use the `.includes()` method:
```javascript
email.includes("@")  // Returns true if email contains @
```

**Test Cases:**
- `"customer@examplebank.com"` -> Valid
- `"notanemail"` -> Invalid
- `"missing@domain"` -> Invalid (no dot)

**Example Output:**
```
Testing email: customer@examplebank.com
Valid email format
```

---

## Exercise 2: Transaction Status Categorizer

**Scenario:** Your banking system returns different transaction statuses. You need to display appropriate messages.

**Requirements:**
1. Create a variable `transactionStatus` with value `"APPROVED"`
2. Write an if-else-if statement that handles:
   - `"APPROVED"` -> Print: `"Transaction approved"`
   - `"DECLINED"` -> Print: `"Transaction declined - contact your bank"`
   - `"PENDING"` -> Print: `"Transaction pending"`
   - Anything else -> Print: `"Unknown transaction status"`

**Test Cases:**
Try running your code with each of these values:
- `"APPROVED"`
- `"DECLINED"`
- `"PENDING"`
- `"ON_HOLD"`

**Example Output:**
```
Transaction Status: APPROVED
Transaction approved
```

---

## Exercise 3: Online Banking Password Strength Checker

**Scenario:** Validate password strength when a customer registers for online banking.

**Requirements:**
1. Create a variable `portalPassword` with value `"Bank@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters -> `"Weak password - too short"`
   - Less than 10 characters -> `"Medium password strength"`
   - 10 or more characters -> `"Strong password"`

**Test Cases:**
- `"Bank"` (4 chars) -> Weak
- `"Bank@123"` (8 chars) -> Medium
- `"Bank@12345"` (10 chars) -> Strong

**Hint:** Use `.length` property:
```javascript
portalPassword.length  // Returns the number of characters
```

**Example Output:**
```
Password: Bank@123
Length: 8 characters
Medium password strength
```

---

## Exercise 4: Loan Risk Score Grading

**Scenario:** Convert loan application risk scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above -> `"Grade: A (Excellent)"`
   - 80-89 -> `"Grade: B (Good)"`
   - 70-79 -> `"Grade: C (Average)"`
   - 60-69 -> `"Grade: D (Pass)"`
   - Below 60 -> `"Grade: F (Fail)"`

**Test Cases:**
- `95` -> A
- `85` -> B
- `75` -> C
- `65` -> D
- `50` -> F

**Important:** Pay attention to the ORDER of conditions! Most specific first.

**Example Output:**
```
Loan Score: 85
Grade: B (Good)
```

---

## Exercise 5: Early Return Pattern

**Scenario:** Refactor a nested transaction validation function to use guard clauses.

**Part A - Understand the nested version:**
```javascript
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
```

**Part B - Rewrite using early return (guard clauses):**
- Check each error condition first and return immediately
- The happy path should be the last line

**Test with:** `(null, 300)`, `("ACC-1001", -50)`, `("ACC-1001", 15000)`, `("ACC-1001", 250)`

**Expected Output (same for both versions):**
```
Error: No account ID
Error: Negative amount
Error: Amount exceeds limit
Valid: ACC-1001 for $250
```

---

## Exercise 6: Switch - Basic Value Matching

**Scenario:** Exercise 2 used if-else-if to handle transaction statuses. Rewrite it using `switch` and notice how much cleaner it reads when matching one variable against several fixed values.

**Requirements:**
1. Create a variable `transactionStatus` with value `"DECLINED"`
2. Use a `switch` statement to print:
   - `"APPROVED"` -> `"Transaction approved"`
   - `"DECLINED"` -> `"Transaction declined - contact your bank"`
   - `"PENDING"` -> `"Transaction pending"`
   - `"ON_HOLD"` -> `"Transaction on hold - review required"`
   - anything else -> `"Unknown transaction status"`

**Starter template:**
```javascript
let transactionStatus = "DECLINED";

switch (transactionStatus) {
    case "APPROVED":
        // your code
        break;
    // add remaining cases
}
```

**Test with:** `"APPROVED"`, `"DECLINED"`, `"PENDING"`, `"ON_HOLD"`, `"UNKNOWN"`

**Tricky question:** What happens if you remove all the `break` statements? Predict before trying.

---

## Exercise 7: Switch - Grouping Cases (Multiple Cases, One Outcome)

**Scenario:** Map transaction response codes to categories. Some codes share the same message - use fall-through to group them.

**Requirements:**

```javascript
let responseCode = 51;

switch (responseCode) {
    case 0:
        // "Approved - transaction successful"
        break;
    case 8:
        // "Approved - ID verification required"
        break;
    case 5:
    case 51:
    case 61:
        // Group these: "Declined - insufficient funds or over limit"
        // (5, 51, and 61 all print the same message - intentional fall-through)
        break;
    case 54:
        // "Declined - expired card"
        break;
    case 91:
    case 96:
    case 99:
        // Group these: "System error - try again later"
        break;
    default:
        // "Unknown response code: " + responseCode
}
```

**Test with:** `0`, `8`, `5`, `51`, `61`, `54`, `91`, `96`, `99`, `77`

**Key concept:** When multiple `case` labels appear with no `break` between them, they all fall through to the same block. This is the only intentional use of fall-through.

---

## Exercise 8: Switch with Expressions

`switch` compares using `===`. So you can switch on any expression that produces a value, not just a plain variable.

### 8a: Switch on a computed value (grade buckets)

Instead of `if (score >= 90)` chains, compute the "tens digit" and switch on that:

```javascript
let score = 85;

// Math.floor(85 / 10) = 8 -> maps to grade B
switch (Math.floor(score / 10)) {
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
```

**Test with scores:** `100`, `95`, `85`, `75`, `65`, `55`

**Why `case 10` and `case 9` are grouped:** A score of 100 gives `Math.floor(100/10) = 10`, so it needs its own case that falls through to the grade A block.

### 8b: Switch on `true` - range matching with expressions

When you need range checks but want switch style, switch on the literal `true` and put the condition in each `case`:

```javascript
let processingTime = 3.5;  // transaction processing time in seconds

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
```

**Test with processing times:** `0.5`, `2`, `4`, `8`

**Note:** `switch(true)` works because each `case` expression evaluates to `true` or `false`. The first `case` that equals `true` wins. Use this sparingly - if-else-if is often clearer for ranges.

### 8c: Tricky questions - predict the output before running

**Snippet A - what prints?**
```javascript
let alertPriority = "high";

switch (alertPriority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
```
What does this show? Why? (Hint: `switch` uses `===`)

**Snippet B - what prints?**
```javascript
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
```
What does this show? Why? How do you fix it to print only `"two"`?

**Snippet C - switch vs if-else, which should you choose?**

| Situation | Better choice |
|---|---|
| Matching one variable against 5+ fixed string/number values | `switch` |
| Checking ranges (`score >= 80`) | `if-else-if` |
| Multiple conditions combined with `&&` or `||` | `if-else-if` |
| Grouping several values with the same outcome | `switch` (fall-through) |
| Just two outcomes | ternary or `if-else` |

---

## Additional Challenges

### Challenge: Complete Customer Onboarding Validation

**Scenario:** Complete customer onboarding validation before creating an account.

**Requirements:**
Create a validation function that checks:
1. Full name is not empty
2. Portal password is not empty
3. Portal password is at least 8 characters
4. Email contains `@` and `.`

```javascript
function validateCustomerOnboarding(fullName, portalPassword, email) {
    console.log("Validating customer onboarding data...\n");

    // Write your if-else-if logic here
    // Check each condition and return an appropriate message
}

// Test it
let result = validateCustomerOnboarding("Aisha Khan", "Bank@2026", "aisha@example.com");
console.log(result);
```

**Expected Output:**
```
Validating customer onboarding data...

Name: Aisha Khan - ok
Password: Bank@2026 - ok
Email: aisha@example.com - ok

All validations passed - account ready to open!
```

**If validation fails:**
```
Validating customer onboarding data...

Error: Password must be at least 8 characters
```

---

## Tricky Questions

1. If you remove the curly braces `{ }` after an `if` with two statements below it, which line actually belongs to the `if` - just the next one, or every line until the next blank line?
2. If you remove every `break` from a `switch` statement, does it stop at the first matching case, or keep running every case below it too?
3. Can you chain multiple `? :` ternaries together? Does that make a line easier or harder to read compared to an if-else-if chain?

---

## Self-Check Questions

Before you finish, ask yourself:

1. Did all the exercises run without errors?
2. Did I test each exercise with different values?
3. Do I understand when to use `if` vs `else if` vs `else`?
4. Did I use `===` for comparisons (not `=`)?
5. Did I put my conditions in the right order?
6. Can I explain why each condition is checked?