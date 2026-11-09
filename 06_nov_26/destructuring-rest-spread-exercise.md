# Destructuring, Rest & Spread - Exercise

**Topics:** Spread in function calls, rest parameters, array and object destructuring
**File to Create:** `destructuring-rest-spread-exercise.js`

---

## Setup

Create a new file called `destructuring-rest-spread-exercise.js` in your training folder and run it with `node destructuring-rest-spread-exercise.js` as you go.

---

## Exercise 1: Spread Operator

1. **1a:** This function takes 3 individual numbers, not an array:
   ```javascript
   function addThree(a, b, c) {
       return a + b + c;
   }
   let visitCounts = [4, 7, 5];
   ```
   Call `addThree` twice: once the old way using `visitCounts[0]`, `visitCounts[1]`, `visitCounts[2]`, and once using spread to pass all three values from the array in one go.

2. **1b:** Given this array, use `Math.max()` and `Math.min()` with spread to find the longest and shortest wait time.
   ```javascript
   let waitTimes = [12, 45, 9, 30];
   ```

3. **1c:** Merge these two arrays into one, in order, using spread. Don't use `.concat()`.
   ```javascript
   let morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM"];
   let afternoonSlots = ["2:00 PM", "2:30 PM"];
   ```

4. **1d:** Spread this array into `console.log` so each department prints as its own separate argument, not as one array. Don't use `.join()` or a loop.
   ```javascript
   let departmentList = ["cardiology", "neurology", "pediatrics"];
   ```

5. **1e:** Build a new settings object from `defaultSettings`, but with `reminderCount` overridden to `2`. Don't mutate `defaultSettings` itself.
   ```javascript
   let defaultSettings = { slotDuration: 30, reminderCount: 0, remindersEnabled: true };
   ```

6. **1f:** This function takes 3 individual numbers:
   ```javascript
   function calculateRange(a, b, c) {
       return Math.max(a, b, c) - Math.min(a, b, c);
   }
   let checkupTimes = [12, 45, 9];
   ```
   Call it using spread to pass in all 3 numbers from `checkupTimes`.

Expected output:
```
Without spread: 16
With spread:    16
Longest wait:  45 min
Shortest wait: 9 min
Merged slots: [ '9:00 AM', '9:30 AM', '10:00 AM', '2:00 PM', '2:30 PM' ]
cardiology neurology pediatrics
{ slotDuration: 30, reminderCount: 2, remindersEnabled: true }
{ slotDuration: 30, reminderCount: 0, remindersEnabled: true }
Range: 36
```

---

## Exercise 2: Rest Parameters

1. **2a:** Write a function `logResultsFixed(r1, r2, r3)` that prints `"Result 1: <r1>"`, `"Result 2: <r2>"`, `"Result 3: <r3>"`. Call it once with `("COMPLETED", "CANCELLED", "COMPLETED")`, then call it again adding `"RESCHEDULED"` as a 4th argument and observe that it's silently ignored.

2. **2b:** Write `logResults(...results)` using a rest parameter that:
   - Prints `"Number of results: <count>"`
   - Prints `"Results array: <results>"`
   - Uses `forEach` to print `"  Visit <n>: <result>"` for each one

   Call it once with `("COMPLETED", "CANCELLED", "COMPLETED")` and once with `("COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED")`.

3. **2c:** Write `sumVisitDurations(...durations)` that:
   - Prints `"Calculating sum of durations: <durations>"`
   - Uses `reduce` to calculate the total and the average (`.toFixed(2)`)
   - Prints both, and returns the total

   Call it once with 3 durations `(30, 45, 20)` and once with 6 `(15, 30, 45, 60, 20, 25)`.

4. **2d:** Write `processBatch(batchName, department, ...patientIds)`, mixing regular parameters with a rest parameter. It should print the batch name, the department, a numbered list of patient IDs, and the total count.

   Call it with:
   ```javascript
   processBatch("Morning Batch", "Cardiology", "PT-1001", "PT-1002", "PT-1003");
   processBatch("Afternoon Batch", "Dental", "PT-2001", "PT-2002", "PT-2003", "PT-2004", "PT-2005");
   ```

5. **2e:** Write `validateAll(...conditions)` that checks each condition in order, prints `"  ✓ Condition <n> passed"` for a truthy one, or `"  ✗ Condition <n> failed!"` and returns `false` immediately on the first falsy one. If every condition passes, print `"✓ All conditions passed!"` and return `true`.

   Test it with:
   ```javascript
   let patient = {
       email: "aisha.khan@example.com",
       age: 25,
       insuranceId: "INS-12345678",
       active: true
   };

   validateAll(
       patient.email.includes("@"),
       patient.age >= 18,
       patient.insuranceId.length >= 8,
       patient.active === true
   );

   let patient2 = { email: "invalid-email", age: 15, insuranceId: "INS-1", active: false };
   validateAll(patient2.email.includes("@"), patient2.age >= 18);
   ```

Expected output:
```
With 3 arguments (works):
Result 1: COMPLETED
Result 2: CANCELLED
Result 3: COMPLETED

With 4 arguments (4th is ignored!):
Result 1: COMPLETED
Result 2: CANCELLED
Result 3: COMPLETED
  ^ 'RESCHEDULED' was ignored!

With 3 arguments:
Number of results: 3
Results array: COMPLETED,CANCELLED,COMPLETED

  Visit 1: COMPLETED
  Visit 2: CANCELLED
  Visit 3: COMPLETED

With 5 arguments (all handled!):
Number of results: 5
Results array: COMPLETED,CANCELLED,COMPLETED,RESCHEDULED,COMPLETED

  Visit 1: COMPLETED
  Visit 2: CANCELLED
  Visit 3: COMPLETED
  Visit 4: RESCHEDULED
  Visit 5: COMPLETED

Sum of 3 durations:
Calculating sum of durations: 30,45,20
  Total: 95
  Average: 31.67

Sum of 6 durations:
Calculating sum of durations: 15,30,45,60,20,25
  Total: 195
  Average: 32.50

Processing 3 patients:
Batch: Morning Batch
Department: Cardiology
Patients to process:
  1. PT-1001
  2. PT-1002
  3. PT-1003
Total: 3 patients

Processing 5 patients:
Batch: Afternoon Batch
Department: Dental
Patients to process:
  1. PT-2001
  2. PT-2002
  3. PT-2003
  4. PT-2004
  5. PT-2005
Total: 5 patients

Validating valid patient:
Checking 4 conditions:
  ✓ Condition 1 passed
  ✓ Condition 2 passed
  ✓ Condition 3 passed
  ✓ Condition 4 passed
✓ All conditions passed!

Validating invalid patient:
Checking 2 conditions:
  ✗ Condition 1 failed!
```

---

## Exercise 3: Destructuring

1. **3a - Array destructuring.** Given:
   ```javascript
   let visitDurations = [45, 38, 32, 41, 25];
   ```
   - Pull the first three values into `longest`, `second`, `third` using array destructuring.
   - Use comma-skipping to pull only the third value into a variable called `thirdLongest`.
   - Use destructuring combined with rest to grab the first value into `topDuration` and collect everything else into `remainingDurations`.

2. **3b - Object destructuring.** Given:
   ```javascript
   let visitRecord = { visitType: "Annual Physical", status: "COMPLETED", duration: 30, department: "General Medicine" };
   ```
   - Destructure `visitType`, `status`, and `duration` into variables with the same names.
   - Destructure again, renaming `visitType` to `recordType`, `status` to `recordStatus`, and `department` to `recordDept`.
   - Destructure a third time, pulling `visitType` (renamed to `vType`) plus two keys that don't exist on the object, `followUps` (default `0`) and `reminderLimit` (default `3`).

3. **3c - Destructuring in function parameters.** Write two versions of a function that prints a visit summary:
   - `reportVisitOld(record)` using plain dot notation (`record.visitType`, etc.)
   - `reportVisit({ visitType: rType, status: rStatus, duration: rDuration, department: rDept = "Unknown" })` destructuring directly in the parameter list, with a default for `department`

   Call both with `visitRecord` from 3b.

4. **3d - Nested destructuring.** Given:
   ```javascript
   let apiResponse = { status: 200, body: { patientId: "PT-3001", appointmentId: "APT-7001", outcome: "COMPLETED" } };
   ```
   In one statement, destructure `status` (renamed to `httpStatus`) at the top level, and `patientId` plus `outcome` from the nested `body` object.

Expected output:
```
Without destructuring:
  first=45, second=38, third=32

With destructuring:
  longest=45, second=38, third=32
  thirdLongest only (skipped first two): 32

--- Array destructuring + rest ---
  topDuration:        45
  remainingDurations: 38,32,41,25

Without destructuring:
  Annual Physical: COMPLETED

With destructuring:
  Annual Physical: COMPLETED (30m)

--- Renaming while destructuring ---
  recordType:   Annual Physical
  recordStatus: COMPLETED
  recordDept:   General Medicine

--- Default values in destructuring ---
  vType:        Annual Physical
  followUps:    0  <- key not in object, default used
  reminderLimit:3  <- key not in object, default used

Old way (dot notation inside function):
Annual Physical: COMPLETED (30m)
With param destructuring:
Annual Physical: COMPLETED (30m in General Medicine)

API response (nested destructuring):
  httpStatus:    200
  patientId:     PT-3001
  outcome:       COMPLETED
```

---

## Watch Out For

**Spread (`...arr`) unpacks, rest (`...args`) packs.** Same three dots, opposite direction depending on where they appear. In a function call they spread an array into arguments; in a function's parameter list they collect arguments into an array.

**Object spread only makes a shallow copy.** `{ ...original, key: newValue }` copies the top-level keys, but if one of those values is itself an object or array, both the copy and the original still point at the same nested object.

**Extra arguments beyond a function's named parameters are silently dropped, not an error.** This is exactly the bug rest parameters fix. If a function might receive a variable number of inputs, use `...args` instead of a fixed list of names.

**Skipping array elements with commas leaves a gap, not `undefined` in a visible way.** `let [, , third] = arr` looks unusual the first time you see it, but it's just destructuring with the first two positions left unnamed.

---

## Tricky Questions

1. If you write `function f(a, b, ...rest) {}` and call `f(1, 2, 3, 4, 5)`, what does `rest` contain?
2. Can you use a rest parameter anywhere in a parameter list, or does it have to be last? What happens if you try `function f(...rest, last) {}`?

---

## Quick Reference

```javascript
// Spread - unpacks an array into individual arguments/elements
fn(...arr);
let merged = [...arr1, ...arr2];
let copy = { ...original, key: newValue };
console.log(...arr);           // each element as a separate argument

// Rest - packs individual arguments into an array
function fn(...args) { }
function fn(first, second, ...rest) { }

// Array destructuring
let [a, b] = arr;
let [, , third] = arr;              // skip elements
let [first, ...rest] = arr;         // destructuring + rest

// Object destructuring
let { key1, key2 } = obj;
let { key1: renamed } = obj;
let { key1 = "default" } = obj;
function fn({ key1, key2 = "default" }) { }

// Nested destructuring
let { a, b: { c, d } } = obj;
```

---

## Before You Move On

Can you explain the difference between spread and rest even though they use the exact same three dots? Do you know what happens to arguments beyond what a function declares if it doesn't use a rest parameter? Can you write a destructuring pattern that renames a key AND gives it a default value at the same time? Can you combine array destructuring with rest in one line?
