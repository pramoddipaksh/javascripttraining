# Variables and Data Types - Exercise

**Topic:** `let` and `const`, Data Types, `typeof`, Truthy/Falsy, Type Coercion, Template Literals
**File to Create:** One file per exercise (see each exercise's filename)

---

## Learning Goals

By completing this exercise, you will:
- Choose between `const` and `let`, and recognise the errors each one gives
- Work with strings, numbers, booleans, `undefined`, and `null`, and check types with `typeof`
- Apply truthy/falsy rules correctly, including the common traps with `[]` and `0`
- Use `??` when `0` is a real value
- Recognise `BigInt` and `Symbol` when you see them
- Build text, URLs, and selectors with template literals
- Handle numbers that arrive as text, the way they do when a test reads a web page

---

## Setup

1. Open VSCode
2. Create each file listed below in your training folder
3. Start every file with `"use strict";`
4. Test each file by running `node <filename>.js`

---

## Exercise 1: Clinic Configuration Variables

**Scenario:** Create configuration variables for a clinic's system settings.

Create a file called `clinic-config.js`.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create these 6 variables:
  1. Clinic name (constant)
  2. API URL (constant)
  3. Environment name (Staging, Production)
  4. Current nurse on duty
  5. Today's date
  6. Are reminders enabled? Use a real boolean (`true` or `false`, no quotes)
- Print them in a formatted way
- Then the shift changes: give the nurse-on-duty variable a new name and print it again

**Example Output:**
```
==========================================
       CLINIC SYSTEM CONFIGURATION
==========================================
Clinic Name: Sunrise Health Clinic
API URL: https://api.sunrisehealth.example.com
Environment: Staging
Nurse on Duty: Amara Okafor
Date: 2026-08-06
Reminders Enabled: true
==========================================
Shift change. Nurse on Duty: Daniel Reyes
```

---

## Exercise 2: const or let?

**Scenario:** A clinic's waiting-room screen shows four values. Some never change during the day, and some change all the time. Pick the right keyword for each one.

Create a file called `const-vs-let.js`.

**Requirements:**
1. Declare these four values. Use `const` or `let` for each, and add a short comment saying why:
   - The clinic's phone number: `"022-4000-1234"`
   - The maximum patients per day: `40`
   - The number of patients waiting: `4`
   - The current token number: `12`
2. Print all four. Then one more patient arrives and the next token is called: update the two values that change to `5` and `13`, and print them again.
3. Try giving the maximum patients per day a new value. Run the file, copy the error message into a comment, then comment the line out.
4. Try writing `const clinicCode;` with no value. Run it, copy the error into a comment, then comment it out.
5. Try declaring `let` for patients waiting a second time. Run it, copy the error into a comment, then comment it out.

**Example Output:**
```
Clinic phone: 022-4000-1234
Max patients per day: 40
Patients waiting: 4
Current token: 12

After update:
Patients waiting: 5
Current token: 13
```

**Hints:**
- Steps 4 and 5 are `SyntaxError`s, so nothing in the file runs until you comment them out. That's normal
- When you're not sure, start with `const`. If you need to change it later, JavaScript will tell you

---

## Exercise 3: Patient Profile - Mixed Data Types

**Scenario:** Build a patient profile that uses every basic data type, including `undefined` and `null`.

Create a file called `patient-profile-datatypes.js`.

**Requirements:**
```javascript
let firstName = "Aisha";        // String
let lastName = "Khan";          // String
let patientId = 1001;           // Number
let age = 34;                   // Number
let averageWaitTime = 12.5;     // Number
let isActive = true;            // Boolean
let hasInsurance = false;       // Boolean
let nextAppointment;            // not booked yet
let referralNote = null;        // deliberately empty
```

1. Print all fields in a formatted profile
2. Print `typeof` for every variable, labeled clearly
3. Reassign `age` to a string like `"thirty-four"` and print `typeof age` again. Confirm it changed

**Example Output:**
```
Patient Profile
==================
Name: Aisha Khan
Patient ID: 1001
Age: 34
Average Wait Time: 12.5 min
Active: true
Has Insurance: false
Next Appointment: undefined
Referral Note: null

Type Check:
firstName: string
lastName: string
patientId: number
age: number
averageWaitTime: number
isActive: boolean
hasInsurance: boolean
nextAppointment: undefined
referralNote: object

After reassigning age to a string:
typeof age: string
```

**Hints:**
- `typeof null` really does print `object`. It's a known quirk in JavaScript, not a mistake in your code

---

## Exercise 4: Truthy/Falsy Checks

**Scenario:** Apply truthy/falsy rules to realistic checks, including the classic traps.

Create a file called `truthy-falsy-checks.js`.

**Requirements:**
1. Given `let complaintReason = "";`, write an if-else that prints `"Complaint on file"` or `"No complaint"` based on truthiness.
2. Given `let appointmentType;` (undefined), use `||` to default it to `"General Consultation"` and print the result.
3. Given `let symptoms = [];` (an empty array), write the **wrong** check (`if (symptoms)`) and show it incorrectly reports "has symptoms." Then write the **correct** check using `.length > 0`.
4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`) and show it incorrectly reports "no complications" even when the count is a real, valid zero. Then write the **correct** check using `> 0`.
5. Given `let followUpDays = 0;` (0 means "follow up the same day"), default it to `7` using `||` and then using `??`. Print both and explain the difference in a comment.

**Example Output:**
```
No complaint

Appointment type: General Consultation

Wrong check on empty array: Has symptoms! (bug - array is truthy even when empty)
Correct check: No symptoms

Wrong check on zero: No complications (misleading - 0 is falsy)
Correct check: 0 complications recorded

Follow-up with ||: 7 days (wrong - 0 was a real value)
Follow-up with ??: 0 days (correct)
```

---

## Exercise 5: BigInt and Symbol

**Scenario:** You'll rarely use these two types, but you need to recognise them when you see them.

Create a file called `bigint-symbol-demo.js`.

**Part A - BigInt:**
1. Store `Number.MAX_SAFE_INTEGER` and print it
2. Add `1`, `2`, and `3` to it and print each result. Notice that `+ 1` and `+ 2` give the same answer
3. Repeat using the BigInt version (`9007199254740991n` with `1n`, `2n`, `3n`)
4. Print `typeof` a BigInt value

**Part B - Symbol:**
1. Create two Symbols with the same description `"labResultId"`
2. Compare them with `===` and print the result
3. Print `typeof` one of the Symbols
4. Print `.description` of each Symbol

**Example Output:**
```
max:     9007199254740991
max + 1: 9007199254740992
max + 2: 9007199254740992
max + 3: 9007199254740994

bigMax + 1n: 9007199254740992
bigMax + 2n: 9007199254740993
bigMax + 3n: 9007199254740994
typeof bigMax: bigint

sym1 === sym2: false
typeof sym1: symbol
sym1.description: labResultId
sym2.description: labResultId
```

---

## Exercise 6: Template Literals

**Scenario:** Build patient messages and test data with template literals.

Create a file called `template-literals-practice.js`.

**Requirements:**
1. Create `firstName` and `lastName` variables and combine them into `fullName` using a template literal.
2. Build an `email` from the name using `.toLowerCase()` inside a template literal: `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com` ``
3. Create a multi-line template literal that prints a visit confirmation, including the patient's name, email, and appointment type.
4. Given a consultation fee of `500` and a lab fee of `250`, print the total using a calculation **inside** `${ }`.
5. Build three pieces of test data from these values, and print them:
   ```javascript
   const baseUrl = "https://portal.sunrisehealth.example.com";
   const patientId = "P-1001";
   const visitDate = "2026-08-06";
   ```
   - The appointments page URL: `<baseUrl>/patients/<patientId>/appointments`
   - A selector for the patient's row: `[data-patient-id="<patientId>"]`
   - The message the page should show: `Appointment booked for <fullName> on <visitDate>`

**Example Output:**
```
Full Name: Aisha Khan
Email: aisha.khan@example.com

========================================
        VISIT CONFIRMATION
========================================
Patient: Aisha Khan
Email: aisha.khan@example.com
Appointment: Annual Checkup
========================================

Total fee: ₹750

TEST DATA
==================
URL: https://portal.sunrisehealth.example.com/patients/P-1001/appointments
Selector: [data-patient-id="P-1001"]
Expected message: Appointment booked for Aisha Khan on 2026-08-06
```

**Hints:**
- You can put double quotes inside backticks without escaping them
- Step 5 is how template literals show up in real Playwright tests

---

## Exercise 7: Page Text Is Always a String

**Scenario:** When a Playwright test reads text from a web page, it always gets a string, even when the text looks like a number. Practise handling that.

Create a file called `page-text-coercion.js`.

**Requirements:**
1. Start with these values:
   ```javascript
   let consultationFeeText = "500"; // read from the page
   let labFeeText = "250";          // read from the page
   let discount = 50;               // a real number in your test
   ```
2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.
3. Fix it with `Number()` so the total is `750`, and print it.
4. Write predictions, then print `consultationFeeText + discount` and `consultationFeeText - discount`.
5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`, print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`. Write a comment saying which one a test should use.
6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`, print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.
7. Store `0.1 + 0.2` in a variable called `copay`. Print it, print whether it `=== 0.3`, and print whether `copay.toFixed(2) === "0.30"`.

**Example Output:**
```
--- Adding two page values ---
consultationFeeText + labFeeText → 500250
Fixed total → 750

--- Mixing a string and a number ---
consultationFeeText + discount → 50050
consultationFeeText - discount → 450

--- Comparing page text to a number ---
displayedTotal == expectedTotal → true
displayedTotal === expectedTotal → false
Number(displayedTotal) === expectedTotal → true

--- Text that isn't a number ---
Number(waitTimeText) → NaN
Wait time is not a valid number

--- Decimals ---
0.1 + 0.2 → 0.30000000000000004
copay === 0.3 → false
copay.toFixed(2) === "0.30" → true
```

**Hints:**
- `+` joins text if either side is a string. `-`, `*`, and `/` always try to convert to numbers
- `.toFixed(2)` returns a string, which is why step 7 compares it with `"0.30"`

---

## Tricky Questions

1. `const` stops you reassigning a variable. If you store an object in a `const`, can you still change a property inside it?
2. Is `0.1 + 0.2 === 0.3` true or false?
3. If `maxRetries` is set to `0` on purpose, what does `maxRetries || 3` give?
4. If a value came back as the string `"true"`, does `value === true` ever pass?

---

## Common Mistakes to Avoid

**Assigning to a `const`:**
```javascript
const status = "SCHEDULED";
status = "COMPLETED";  // TypeError: Assignment to constant variable.
```

**Putting quotes around a number:**
```javascript
let age = "34";  // Wrong - this is a string, not a number
```
```javascript
let age = 34;    // Correct
```

**Checking an array's truthiness instead of its length:**
```javascript
let issues = [];
if (issues) { }            // Wrong - always true, even when empty
if (issues.length > 0) { } // Correct
```

**Using `||` when 0 is a real value:**
```javascript
let retries = 0;
let used = retries || 3;   // Wrong - gives 3
let used2 = retries ?? 3;  // Correct - gives 0
```

**Adding numbers that are really text:**
```javascript
let total = "500" + "250";                 // "500250"
let total2 = Number("500") + Number("250"); // 750
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I reach for `const` first, and `let` only when the value changes?
2. Do I know the three errors from Exercise 2, and what causes each one?
3. Can I explain the difference between `undefined` and `null`?
4. Do I know the falsy values in JavaScript?
5. Do I know when to use `??` instead of `||`?
6. Can I predict whether `+` will add or join?

---

## Reflection

**Think about:**
1. When should you use `const` vs `let`? What's your default choice?
2. Where might you have written a buggy truthy check like `if (count)` without realizing it?
3. Why does it matter that text read from a web page is always a string?
4. Which result in Exercise 7 surprised you most?

---

## Need Help?

**Common Issues:**

**"patientStatus is not defined"**
Make sure you declared it first:
```javascript
// Wrong
console.log(patientStatus);

// Correct
let patientStatus = "SCHEDULED";
console.log(patientStatus);
```

**"Assignment to constant variable"**
You used `const` but tried to change it. Use `let` instead.

**"Identifier has already been declared"**
You wrote `let` or `const` twice for the same name. Drop the keyword the second time: `patientsWaiting = 5;`

**Variable prints "undefined"**
You declared but didn't assign a value:
```javascript
// Wrong
let email;
console.log(email);  // undefined

// Correct
let email = "aisha@example.com";
console.log(email);
```

---

## Progress Check

**You can now:**
- Choose correctly between `const` and `let`
- Work with strings, numbers, booleans, `undefined`, and `null`, and check types with `typeof`
- Apply truthy/falsy rules correctly, including the empty-array and zero traps
- Use `??` for defaults when `0` is a valid value
- Recognise `BigInt` and `Symbol`
- Build text, URLs, and selectors with template literals
- Convert page text to numbers before doing maths or comparing
