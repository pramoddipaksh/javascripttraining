# Functions - Exercise

**Topic:** Functions - Parameters, Return Values, Defaults, Guard Clauses, Function Expressions
**File to Create:** One file per exercise (see each exercise's filename)

---

## Learning Goals

By completing this exercise, you will:
- Create functions with parameters and return values
- Build a complete record generator using helper functions
- Use default parameters, and understand when they apply (`undefined` only)
- Rewrite nested if-else as guard clauses (early returns)
- Write function expressions and know how they differ from declarations

---

## Setup

1. Open VSCode
2. Create each file listed below in your training folder
3. Test each file by running `node <filename>.js`

---

## Exercise 1: Basic Functions - Account Data Generator

**Scenario:** Write small helper functions for generating banking customer data.

Create a file called `basic-functions.js`.

**Requirements:**
1. Write `generateAccountId(firstName, lastName)` that returns the two names lowercased and joined, e.g. `"johndoe"`.
2. Write `generateEmail(firstName, lastName)` that returns `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com` ``.
3. Write `generateTempPin(seed)` that returns `seed + "00"` (e.g. `"42" -> "4200"`).
4. Call each function with `"John"`, `"Doe"` (and `"42"` for the pin) and print the results.

**Example Output:**
```
Account ID: johndoe
Email: john.doe@examplebank.com
Temp PIN: 4200
```

---

## Exercise 2: Complete Customer Generator

**Scenario:** Combine your helper functions from Exercise 1 into one function that builds a full customer record.

Create a file called `customer-generator.js` (re-declare the three helper functions from Exercise 1 at the top).

**Requirements:**
1. Write `generateCustomer(firstName, lastName)` that returns an object with:
   - `name` - full name
   - `email` - from `generateEmail`
   - `accountId` - from `generateAccountId`
   - `balance` - `0`
   - `isActive` - `true`
2. Generate two customers and print both objects.

**Example Output:**
```
Customer 1:
{
  name: 'John Doe',
  email: 'john.doe@examplebank.com',
  accountId: 'johndoe',
  balance: 0,
  isActive: true
}

Customer 2:
{
  name: 'Jane Smith',
  email: 'jane.smith@examplebank.com',
  accountId: 'janesmith',
  balance: 0,
  isActive: true
}
```

---

## Exercise 3: Account Number Validator

**Scenario:** Write a function that checks whether an account number looks valid.

Create a file called `account-validator.js`.

**Requirements:**
1. Write `validateAccountNumber(accountNumber)` that returns `"VALID"` if the string starts with `"ACC-"` and has exactly 7 characters total, otherwise `"INVALID"`.
2. Test it with `"ACC-1001"`, `"ACC-1"`, and `"1001"`.

**Example Output:**
```
ACC-1001: VALID
ACC-1: INVALID
1001: INVALID
```

---

## Exercise 4: Default Parameters - Loan Application

**Scenario:** Most loan applications use standard terms, but some customers negotiate custom ones.

Create a file called `loan-defaults.js`.

**Requirements:**
1. Write `createLoanApplication(applicantName, amount = 5000, termMonths = 12)` that prints:
   ```
   Applicant: <applicantName>
   Amount: $<amount>
   Term: <termMonths> months
   ```
2. Call it four times:
   - With only `applicantName` (all defaults)
   - With `applicantName` and a custom `amount`
   - With `applicantName`, `amount`, and a custom `termMonths`
   - With all three fully specified

**Bonus:** Add these two lines and observe the output. Why does `""` not use the default but `undefined` does?
```javascript
createLoanApplication("Edge Case", "");        // empty string
createLoanApplication("Edge Case", undefined); // explicit undefined
```

---

## Exercise 5: Guard Clauses - Transfer Validator

**Scenario:** Refactor a nested validation function into flat guard clauses.

Create a file called `transfer-validator.js`.

**Requirements:**
1. Write the nested version first, `validateTransferNested(fromAccount, toAccount, amount)`:
   - If `fromAccount` is not empty, check `toAccount` is not empty, then check `amount > 0`, returning `"Transfer valid"` only if all three pass. Return the appropriate error message at whichever level fails (`"From account required"`, `"To account required"`, `"Amount must be positive"`).
2. Then write the guard-clause version, `validateTransferEarly(fromAccount, toAccount, amount)`, using early returns instead of nesting.
3. Test both with: `("", "ACC-2002", 500)`, `("ACC-1001", "", 500)`, `("ACC-1001", "ACC-2002", -50)`, `("ACC-1001", "ACC-2002", 500)`.

**Example Output:**
```
validateTransferEarly("", "ACC-2002", 500) → From account required
validateTransferEarly("ACC-1001", "", 500) → To account required
validateTransferEarly("ACC-1001", "ACC-2002", -50) → Amount must be positive
validateTransferEarly("ACC-1001", "ACC-2002", 500) → Transfer valid
```

---

## Exercise 6: Function Expressions

**Scenario:** Write two transfer checks, one as a function declaration and one as a function expression, and see how they differ.

Create a file called `function-expressions.js`.

**Requirements:**
1. Write a function **declaration** `isWithinLimit(amount)` that returns `true` if the amount is less than `10000`.
2. Write a function **expression** `const isPositiveAmount = function (amount) { ... };` that returns `true` if the amount is greater than 0.
3. At the very top of the file, above both functions, print `isWithinLimit(5000)`. Run it. Does it work?
4. Below both functions, print `isPositiveAmount(5000)`, `isPositiveAmount(-200)` and `isWithinLimit(25000)`.
5. Now move the `isPositiveAmount(5000)` line to the top of the file and run again. Write the error message as a comment, then move the line back.

**Example Output:**
```
isWithinLimit(5000):   true
isPositiveAmount(5000): true
isPositiveAmount(-200): false
isWithinLimit(25000):  false
```

---

## Tricky Questions

1. If you call a function with more arguments than it has parameters, does JavaScript throw an error, or silently ignore the extra ones?
2. A default parameter only kicks in for `undefined`. If you call `createLoanApplication("Ana", null)`, does `amount` become `5000`, or `null`?
3. In Exercise 6, `isWithinLimit` can be called above the line where it's written, but `isPositiveAmount` can't. What's the difference between how the two were written?

---

## Common Mistakes to Avoid

**Forgetting `return`:**
```javascript
// Wrong
function add(a, b) {
    a + b;  // Missing return!
}

// Correct
function add(a, b) {
    return a + b;
}
```

**Forgetting to pass an argument:**
```javascript
function greet(name) {
    console.log("Hello " + name);
}
greet();  // "Hello undefined"
greet("John");  // "Hello John"
```

**Assuming any falsy value triggers a default parameter:**
```javascript
function greet(name = "Guest") {
    console.log(name);
}
greet("");   // prints "" - NOT "Guest"! Only undefined triggers the default
greet(null); // prints "null" - NOT "Guest" either
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand the difference between parameters and arguments?
2. Can I build a function that returns an object combining several helper functions?
3. Do I know exactly which value triggers a default parameter (and which don't)?
4. Can I rewrite a nested if-else as guard clauses?
5. Do I know the difference between a function declaration and a function expression?
6. Do I know which of the two can be called before the line where it's written?

---

## Reflection

**Think about:**
1. How do functions make your code more maintainable than repeating logic inline?
2. Where might you use a guard-clause style function instead of nested if-else in your own code?
3. Which kind of function did you find easier to read: a declaration or an expression? Why?

---

## Need Help?

**Common Issues:**

**Return value is `undefined`**
Make sure you use `return` inside the function, not just the expression on its own.

**Parameters not working**
Check that you're passing arguments when calling the function - a missing argument becomes `undefined`.

---

## Progress Check

**You can now:**
- Create functions with parameters and return values
- Build a record generator that combines several helper functions
- Use default parameters correctly, including their `undefined`-only rule
- Rewrite nested validation logic as guard clauses
- Write function expressions and explain how they differ from declarations
