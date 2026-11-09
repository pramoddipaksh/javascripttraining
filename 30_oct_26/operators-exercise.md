# Comparison & Logical Operators - Exercise

**Topic:** Operators - Building Complex Conditions
**File to Create:** `comparison-logical-operators.js`

---

## Learning Goals

By completing this exercise, you will:
- Practice comparison operators (>, <, >=, <=, ===, !==)
- Use logical AND (&&) operator
- Use logical OR (||) operator
- Use logical NOT (!) operator
- Combine multiple conditions
- Build complex validation logic

---

## Setup

1. Open VSCode
2. Create a new file: `comparison-logical-operators.js`
3. Save it in your training folder
4. Test your code by running: `node comparison-logical-operators.js`

---

## Exercise 1: Screening Age Eligibility

**Scenario:** A screening program is only available to patients between 18 and 65.

**Requirements:**
1. Create a variable `age` with value `25`
2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"Eligible for the screening (18-65)"`
   - If no, print: `"Outside the screening's eligible age range"`

**Test Cases:**
Try running your code with these values:
- `18` -> Eligible (boundary)
- `17` -> Not eligible (too young)
- `65` -> Eligible (boundary)
- `66` -> Not eligible (too old)
- `25` -> Eligible (in range)

**Example Output:**
```
Age: 25
Eligible for the screening (18-65)
```

---

## Exercise 2: Patient Intake Validator

**Scenario:** A patient can be admitted with EITHER (a patient ID AND an insurance ID) OR a referral code.

**Requirements:**
1. Create three variables:
   - `patientId` with value `"P-1001"`
   - `insuranceId` with value `"INS-778"`
   - `referralCode` with value `""`
2. Write an if-else statement that:
   - Checks if (patientId is NOT empty AND insuranceId is NOT empty) OR referralCode is NOT empty
   - If yes, print: `"Sufficient intake information"`
   - If no, print: `"Insufficient intake information - provide patient ID+insurance ID OR a referral code"`

**Hint:** Use parentheses to group the AND condition:
```javascript
if ((condition1 && condition2) || condition3) {
```

**Test Cases:**
- `patientId="P-1001"`, `insuranceId="INS-778"`, `referralCode=""` -> Valid
- `patientId="P-1001"`, `insuranceId=""`, `referralCode=""` -> Invalid
- `patientId=""`, `insuranceId=""`, `referralCode="REF-22"` -> Valid

**Example Output:**
```
Checking intake details...
Patient ID: P-1001
Insurance ID: INS-778
Referral code: (empty)

Sufficient intake information
```

---

## Exercise 3: Appointment Status Validator

**Scenario:** An appointment is considered closed out cleanly if status is "COMPLETED" OR "RESCHEDULED", AND there are no recorded complications.

**Requirements:**
1. Create two variables:
   - `status` with value `"COMPLETED"`
   - `complications` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "COMPLETED" OR "RESCHEDULED") AND complications equals 0
   - If yes, print: `"Appointment closed out cleanly"`
   - If no, print: `"Appointment needs follow-up"`

**Test Cases:**
- `status="COMPLETED"`, `complications=0` -> Clean
- `status="RESCHEDULED"`, `complications=0` -> Clean
- `status="COMPLETED"`, `complications=2` -> Follow-up
- `status="CANCELLED"`, `complications=0` -> Follow-up

**Example Output:**
```
Status: COMPLETED
Complications: 0

Validation:
  Status is acceptable: true
  No complications: true

Appointment closed out cleanly
```

---

## Exercise 4: Wait Time Validator

**Scenario:** Clinic policy - patient wait time must be under 30 minutes.

**Requirements:**
1. Create a variable `waitTime` with value `25`
2. Write an if-else statement that:
   - Checks if waitTime < 30
   - If yes, print: `"Wait time within target (X minutes)"`
   - If no, print: `"Wait time exceeds target (X minutes, target: 30 minutes)"`

**Test Cases:**
- `25` -> within target
- `30` -> exceeds target (not less than 30)
- `29` -> within target
- `35` -> exceeds target

**Example Output:**
```
Wait Time Check
Target: 30 minutes
Actual: 25 minutes

Wait time within target (25 minutes)
```

---

## Additional Challenges

### Challenge: Complete Patient Intake Validator

**Scenario:** Complete patient intake validator with multiple validation rules.

**Requirements:**
Create a function `validatePatientIntake(patientName, contactNumber, email, age)` that validates all of these conditions:
1. Name is NOT empty AND length is between 3-40 characters
2. Contact number is NOT empty AND at least 10 digits
3. Email is NOT empty AND contains both "@" and "."
4. Age is between 0 and 120

The function should return the FIRST error it finds, or a success message if all pass.

```javascript
function validatePatientIntake(patientName, contactNumber, email, age) {
    console.log("Validating patient intake...\n");

    // Your validation logic here
    // Check each condition and return an appropriate message
    // Return the FIRST error found, or a success message if all pass
}

// Test with a valid patient
let result = validatePatientIntake(
    "Aisha Khan",
    "9876543210",
    "aisha@example.com",
    32
);
console.log(result);

// Test with an invalid patient (short name)
result = validatePatientIntake(
    "Al",
    "9876543210",
    "aisha@example.com",
    32
);
console.log(result);
```

**Expected Output for a Valid Patient:**
```
Validating patient intake...

Checking name... ok
Checking contact number... ok
Checking email... ok
Checking age... ok

All validations passed - intake accepted!
```

**Expected Output for an Invalid Patient:**
```
Validating patient intake...

Checking name... failed
Name must be 3-40 characters (current: 2)
```

---

## Tricky Questions

Think through these before checking the answers key.

1. JavaScript compares strings character by character, not numerically. What does `"10" > "9"` return?
2. `&&` and `||` don't always return `true` or `false`, they return one of the actual operand values. What does `"" || "fallback"` evaluate to?
3. If you write `if ((status = "COMPLETED"))` with a single `=` instead of `===`, does the code inside the `if` run, and what happens to `status`?

---

## Testing Your Code

**Run your file:**
```bash
node comparison-logical-operators.js
```

**You should see:**
- Output for all 4 exercises
- Clear validation messages
- Proper use of comparison and logical operators
- Correct handling of edge cases

---

## Common Mistakes to Avoid

**Using = instead of ===**
```javascript
// Wrong - this assigns!
if (age = 18) {

// Correct - this compares!
if (age === 18) {
```

**Confusing && with ||**
```javascript
// Wrong - checks if BOTH are empty (rare)
if (patientId === "" && insuranceId === "") {

// Usually you want - checks if EITHER is empty
if (patientId === "" || insuranceId === "") {
```

**Forgetting parentheses with complex conditions**
```javascript
// Confusing
if (a && b || c) {

// Clear
if ((a && b) || c) {
```

**Using > when you mean >=**
```javascript
// Wrong - 18 is not > 18, so fails!
if (age > 18) {

// Correct - 18 >= 18 is true
if (age >= 18) {
```

---

## Operator Quick Reference

**Comparison Operators:**
```
>   Greater than          (5 > 3 is true)
<   Less than             (3 < 5 is true)
>=  Greater or equal      (5 >= 5 is true)
<=  Less or equal         (5 <= 5 is true)
=== Equal to              (5 === 5 is true)
!== Not equal to          (5 !== 3 is true)
```

**Logical Operators:**
```
&&  AND - Both must be true
||  OR  - At least one must be true
!   NOT - Flip true to false, false to true
```

**Truth Tables:**
```
AND (&&)              OR (||)
T && T = T            T || T = T
T && F = F            T || F = T
F && T = F            F || T = T
F && F = F            F || F = F
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand the difference between > and >=?
2. Do I know when to use && vs ||?
3. Can I explain what ! (NOT) does?
4. Did I use parentheses to group complex conditions?
5. Did I test edge cases (boundaries)?
6. Did I use === instead of = for comparisons?

---

## Reflection

**Think about:**
1. How do these operators relate to real eligibility and validation checks?
2. Where else might you check that a value falls within a range?
3. When do you need to check multiple conditions at once?

---

## Need Help?

**Debugging tips:**
- Use `console.log()` to check condition results
- Test one condition at a time
- Check your parentheses
- Verify you're using === not =

---

## Progress Check

**You can now:**
- Use all comparison operators
- Combine conditions with logical operators
- Build complex validation logic
- Validate ranges and multiple conditions
