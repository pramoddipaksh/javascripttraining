# Arrow Functions & Array Methods Deep Dive - Exercise

**Topics:** Arrow function syntax, forEach, map, filter, find/findIndex, some/every, reduce, method chaining
**File to Create:** `arrow-functions-array-methods-exercise.js`

---

## Setup

Create a new file called `arrow-functions-array-methods-exercise.js` in your training folder and run it with `node arrow-functions-array-methods-exercise.js` as you go.

---

## Exercise 1: Convert to Arrow Functions

Convert the following traditional functions to arrow functions:

```javascript
// Exercise 1a: Convert this function
function greetPatient(name) {
    return "Hello, " + name;
}

// Exercise 1b: Convert this function
function isEligibleForVaccine(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Exercise 1c: Convert this function
function calculateBill(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
}
```

**Your arrow functions:**

```javascript
// 1a: Arrow function for greetPatient
const greetPatient = // YOUR CODE HERE

// 1b: Arrow function for isEligibleForVaccine (hint: use ternary operator)
const isEligibleForVaccine = // YOUR CODE HERE

// 1c: Arrow function for calculateBill
const calculateBill = // YOUR CODE HERE

// Test them
console.log(greetPatient("Aisha"));       // "Hello, Aisha"
console.log(isEligibleForVaccine(25));    // true
console.log(calculateBill(100, 3));       // 330
```

---

## Exercise 2: forEach() - Process Every Visit

```javascript
let appointmentTypes = ["Annual Physical", "Dental Checkup", "Eye Exam", "Vaccination", "Follow-up Visit"];
```

1. **2a:** Use `forEach` to print `"Starting: <type>"` for every entry in `appointmentTypes`.
2. **2b:** Use `forEach` with the index parameter to print a numbered list: `"1. Annual Physical"`, `"2. Dental Checkup"`, and so on.
3. **2c:** Given this array of visit objects, use `forEach` to print a report. Use `✓` for `"COMPLETED"` and `✗` for anything else, in the format `<symbol> <patientName> - <appointmentType>: <status> (<duration>m)`.
   ```javascript
   let todaysAppointments = [
       { patientName: "Aisha Khan",      appointmentType: "Annual Physical", status: "COMPLETED", duration: 30 },
       { patientName: "Raj Verma",       appointmentType: "Dental Checkup",  status: "CANCELLED",  duration: 20 },
       { patientName: "Meera Nair",      appointmentType: "Eye Exam",        status: "COMPLETED",  duration: 25 },
       { patientName: "Kabir Malhotra",  appointmentType: "Vaccination",     status: "COMPLETED",  duration: 15 }
   ];
   ```

Expected output:
```
Starting: Annual Physical
Starting: Dental Checkup
Starting: Eye Exam
Starting: Vaccination
Starting: Follow-up Visit

1. Annual Physical
2. Dental Checkup
3. Eye Exam
4. Vaccination
5. Follow-up Visit

✓ Aisha Khan - Annual Physical: COMPLETED (30m)
✗ Raj Verma - Dental Checkup: CANCELLED (20m)
✓ Meera Nair - Eye Exam: COMPLETED (25m)
✓ Kabir Malhotra - Vaccination: COMPLETED (15m)
```

---

## Exercise 3: map() - Transform Every Rating

```javascript
let patientRatings = [85, 92, 78, 95, 88, 73, 90];
```

1. **3a:** Use `map` to turn each rating into a percentage string, e.g. `85` becomes `"85%"`.
2. **3b:** Use `map` to turn each rating into `"COMPLETED"` if it's 80 or above, otherwise `"CANCELLED"`.
3. **3c:** Use `map` (with the index parameter) to turn each rating into an object: `{ visitNumber, rating, status, tier }`, where `visitNumber` is the 1-based position, `status` follows the same rule as 3b, and `tier` is `"A"` for 90+, `"B"` for 80-89, `"C"` below 80.

Expected output:
```
[
  '85%', '92%',
  '78%', '95%',
  '88%', '73%',
  '90%'
]
[
  'COMPLETED',
  'COMPLETED',
  'CANCELLED',
  'COMPLETED',
  'COMPLETED',
  'CANCELLED',
  'COMPLETED'
]
[
  { visitNumber: 1, rating: 85, status: 'COMPLETED', tier: 'B' },
  { visitNumber: 2, rating: 92, status: 'COMPLETED', tier: 'A' },
  { visitNumber: 3, rating: 78, status: 'CANCELLED', tier: 'C' },
  { visitNumber: 4, rating: 95, status: 'COMPLETED', tier: 'A' },
  { visitNumber: 5, rating: 88, status: 'COMPLETED', tier: 'B' },
  { visitNumber: 6, rating: 73, status: 'CANCELLED', tier: 'C' },
  { visitNumber: 7, rating: 90, status: 'COMPLETED', tier: 'A' }
]
```

---

## Exercise 4: filter() - Select Visits

```javascript
let allVisits = [
    { visitType: "Annual Physical",  status: "COMPLETED", duration: 30, priority: "high"   },
    { visitType: "Dental Checkup",   status: "CANCELLED", duration: 20, priority: "medium" },
    { visitType: "Eye Exam",         status: "COMPLETED", duration: 25, priority: "high"   },
    { visitType: "Vaccination",      status: "COMPLETED", duration: 15, priority: "low"    },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 45, priority: "high"   },
    { visitType: "Follow-up Visit",  status: "CANCELLED", duration: 20, priority: "high"   }
];
```

1. **4a:** `filter` to get only `"CANCELLED"` visits. Print each `visitType`.
2. **4b:** `filter` to get visits longer than 25 minutes. Print each as `"<visitType> (<duration>m)"`.
3. **4c:** `filter` to get visits that are both `"COMPLETED"` and `priority === "high"`. Print each `visitType`.

Expected output:
```
cancelled: [ 'Dental Checkup', 'Follow-up Visit' ]
long: [ 'Annual Physical (30m)', 'Physical Therapy (45m)' ]
highPriorityCompleted: [ 'Annual Physical', 'Eye Exam', 'Physical Therapy' ]
```

---

## Exercise 5: find() and findIndex() - Locate a Specific Visit

```javascript
let visitCollection = [
    { visitType: "Annual Physical",  status: "COMPLETED", duration: 30, department: "General Medicine" },
    { visitType: "Dental Checkup",   status: "CANCELLED", duration: 20, department: "Dental"           },
    { visitType: "Eye Exam",         status: "COMPLETED", duration: 25, department: "General Medicine" },
    { visitType: "Physical Therapy", status: "COMPLETED", duration: 50, department: "Rehab"             },
    { visitType: "Follow-up Visit",  status: "CANCELLED", duration: 15, department: "General Medicine" }
];
```

1. **5a:** `find` the first `"CANCELLED"` visit and print it with `JSON.stringify`.
2. **5b:** `findIndex` of the first `"CANCELLED"` visit, print the index.
3. **5c:** `find` a visit longer than 40 minutes, print its `visitType`.
4. **5d:** `find` the first visit in `"General Medicine"`, print its `visitType`.
5. **5e:** `find` a visit with status `"RESCHEDULED"` (there isn't one). Print the result, then `findIndex` for the same condition and print that result too.
6. **5f:** `find` the `"Physical Therapy"` visit, change its `status` to `"CANCELLED"`, then print the updated status.

Expected output:
```
firstCancelled: {"visitType":"Dental Checkup","status":"CANCELLED","duration":20,"department":"Dental"}
firstCancelledIndex: 1
longVisit: Physical Therapy
firstGenMed: Annual Physical
notFound find: undefined
notFound findIndex: -1
updated: CANCELLED
```

---

## Exercise 6: some() and every() - Boolean Checks

```javascript
let visitBatch = [
    { visitType: "Annual Physical", status: "COMPLETED", rating: 85, duration: 30 },
    { visitType: "Eye Exam",        status: "COMPLETED", rating: 92, duration: 25 },
    { visitType: "Dental Checkup",  status: "COMPLETED", rating: 78, duration: 40 },
    { visitType: "Vaccination",     status: "COMPLETED", rating: 88, duration: 15 }
];
```

1. **6a:** `some` visit `"CANCELLED"`?
2. **6b:** `some` visit with `rating < 80`?
3. **6c:** `some` visit with `duration > 35`?
4. **6d:** `every` visit `"COMPLETED"`?
5. **6e:** `every` visit with `rating >= 80`?
6. **6f:** `every` visit with `duration < 60`?

Expected output:
```
someCancelled: false
someLowRating: true
someLongDuration: true
everyCompleted: true
everyHighRating: false
everyFast: true
```

---

## Exercise 7: reduce() - Combine Into a Single Value

```javascript
let visitRatings = [85, 92, 78, 95, 88, 73, 90];
```

1. **7a:** `reduce` to sum all ratings.
2. **7b:** `reduce` to calculate the average (sum divided by length, `.toFixed(2)`).
3. **7c:** `reduce` to find the maximum rating.
4. **7d:** `reduce` to find the minimum rating.

Then, given this array:
```javascript
let weeklyVisits = [
    { visitType: "Annual Physical", status: "COMPLETED" },
    { visitType: "Dental Checkup",  status: "CANCELLED" },
    { visitType: "Eye Exam",        status: "COMPLETED" },
    { visitType: "Vaccination",     status: "COMPLETED" },
    { visitType: "Follow-up Visit", status: "CANCELLED" }
];
```

5. **7e:** `reduce` into a summary object `{ completed, cancelled, total }` counting each status.
6. **7f:** `reduce` to group `visitType` values by `status` into an object, e.g. `{ COMPLETED: [...], CANCELLED: [...] }`.

Expected output:
```
sum: 601
avg: 85.86
max: 95
min: 73
summary: {"completed":3,"cancelled":2,"total":5}
grouped: {
  "COMPLETED": [
    "Annual Physical",
    "Eye Exam",
    "Vaccination"
  ],
  "CANCELLED": [
    "Dental Checkup",
    "Follow-up Visit"
  ]
}
```

---

## Challenge: Chain Array Methods and Build a Report

**Part A - Chaining.** Given this array:
```javascript
let detailedVisits = [
    { visitType: "Annual Physical",  status: "COMPLETED", rating: 85, duration: 30 },
    { visitType: "Dental Checkup",   status: "CANCELLED", rating: 72, duration: 20 },
    { visitType: "Eye Exam",         status: "COMPLETED", rating: 95, duration: 25 },
    { visitType: "Vaccination",      status: "COMPLETED", rating: 88, duration: 15 },
    { visitType: "Physical Therapy", status: "COMPLETED", rating: 92, duration: 45 },
    { visitType: "Follow-up Visit",  status: "CANCELLED", rating: 65, duration: 20 }
];
```

First write the four steps separately (filter the `"COMPLETED"` visits, map to their ratings, reduce to a sum, divide by the count) with a `console.log` after each step. Then write the exact same calculation as a single chained expression.

Expected output:
```
step1 count: 4
step2: [ 85, 95, 88, 92 ]
step3: 360
step4: 90.00
chained: 90.00
```

**Part B - Complete report.** Given this array:
```javascript
let clinicVisits = [
    { department: "General Medicine", visitType: "Annual Physical - Aisha Khan", status: "COMPLETED", duration: 30, followUps: 0 },
    { department: "General Medicine", visitType: "Follow-up - Raj Verma",        status: "CANCELLED", duration: 20, followUps: 2 },
    { department: "Dental",           visitType: "Checkup - Meera Nair",         status: "COMPLETED", duration: 25, followUps: 0 },
    { department: "Dental",           visitType: "Cleaning - Aisha Khan",        status: "COMPLETED", duration: 20, followUps: 0 },
    { department: "Rehab",            visitType: "Session - Raj Verma",          status: "COMPLETED", duration: 45, followUps: 0 },
    { department: "Rehab",            visitType: "Assessment - Meera Nair",      status: "CANCELLED", duration: 30, followUps: 1 }
];
```

Build a `clinicReport` object with these fields, then print it with `console.log(JSON.stringify(clinicReport, null, 2))`:
- `total` - total number of visits
- `completed` - count of `"COMPLETED"` visits
- `cancelled` - count of `"CANCELLED"` visits
- `completionRate` - `"<percent>%"` (2 decimal places)
- `totalDuration` - `"<minutes>m"` (sum of all `duration`)
- `avgDuration` - `"<minutes>m"` (2 decimal places)
- `longestVisit` - the visit object with the highest `duration`
- `totalFollowUps` - sum of all `followUps`
- `departments` - array of unique department names, in first-seen order
- `cancelledVisits` - array of `"<department>: <visitType>"` for cancelled visits only

Expected output:
```
{
  "total": 6,
  "completed": 4,
  "cancelled": 2,
  "completionRate": "66.67%",
  "totalDuration": "170m",
  "avgDuration": "28.33m",
  "longestVisit": {
    "department": "Rehab",
    "visitType": "Session - Raj Verma",
    "status": "COMPLETED",
    "duration": 45,
    "followUps": 0
  },
  "totalFollowUps": 3,
  "departments": [
    "General Medicine",
    "Dental",
    "Rehab"
  ],
  "cancelledVisits": [
    "General Medicine: Follow-up - Raj Verma",
    "Rehab: Assessment - Meera Nair"
  ]
}
```

---

## Watch Out For

**`forEach` never returns anything useful.** It always returns `undefined`, and you can't `break` out of it early. If you need to stop early or build a new array, reach for `find`/`some` or `map`/`filter` instead.

**`map` always returns the same length as the original array.** If you want a shorter array, that's `filter`'s job, not `map`'s.

**`find` returns the element, `findIndex` returns the position, neither one throws when nothing matches.** `find` gives you `undefined`, `findIndex` gives you `-1`. Always check for that before using the result.

**`reduce` needs an initial value almost every time.** Skipping the second argument makes `reduce` use the array's first element as the starting accumulator, which quietly breaks anything that expects an object or a specific starting number (like starting a sum at `0` or a minimum search at `Infinity`).

---

## Tricky Questions

1. If you write `let obj = { name: "Aisha", greet: () => console.log(this.name) }` and call `obj.greet()`, what does it log, and why?
2. `every()` on an empty array returns `true`, but `some()` on an empty array returns `false`. Why does that make sense?

---

## Quick Reference

```javascript
// Arrow function syntax
const fn = (a, b) => a + b;              // implicit return
const fn2 = (a, b) => { return a + b; }; // explicit return, braces required

// forEach - runs a function per element, returns undefined
arr.forEach((item, index) => { ... });

// map - transforms every element, same length as original
let mapped = arr.map(item => ...);

// filter - keeps only matching elements, can be shorter
let filtered = arr.filter(item => ...);

// find / findIndex - first match only (or undefined / -1)
let item = arr.find(item => ...);
let index = arr.findIndex(item => ...);

// some / every - boolean checks
let any = arr.some(item => ...);
let all = arr.every(item => ...);

// reduce - collapse to a single value
let total = arr.reduce((acc, item) => acc + item, 0);

// chaining
let result = arr.filter(x => ...).map(x => ...).reduce((a, x) => ..., 0);
```

---

## Before You Move On

Can you explain the difference between `map` and `filter` in one sentence each? Do you know which array methods stop iterating early once they have their answer (`find`, `some`, `every`) versus which ones always scan the whole array (`map`, `filter`, `forEach`, `reduce`)? Could you write the chaining exercise from memory without looking back at the step-by-step version?
