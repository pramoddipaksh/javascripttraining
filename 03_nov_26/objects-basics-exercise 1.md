# Objects Basics - Exercise

**Topic:** Objects - Structured Employee Data
**File to Create:** `objects-basics-exercise.js`

---

## Learning Goals

By completing this exercise, you will:
- Create objects with key-value pairs
- Access object properties with dot and bracket notation
- Modify and add object properties
- Delete object properties with the `delete` keyword
- Create object methods (functions inside objects)
- Use the `this` keyword in methods
- Create arrays of objects

---

## Setup

1. Open VSCode
2. Create a new file: `objects-basics-exercise.js`
3. Save it in your training folder
4. Test your code by running: `node objects-basics-exercise.js`

---

## Exercise 1: Create a Leave Request Object

**Scenario:** Create a structured leave request object.

**Requirements:**
1. Create an object called `leaveRequest` with these properties:
   - id: "LR-001"
   - type: "Sick Leave"
   - status: "PENDING"
   - days: 2

2. Print each property using dot notation
3. Add a new property `approver` with value "Priya Sharma"
4. Modify the `status` to "APPROVED"
5. Print the complete object

**Example Output:**
```
Leave Request Details
━━━━━━━━━━━━━━━━━━━━━━━━━

ID: LR-001
Type: Sick Leave
Status: PENDING
Days: 2

Adding approver...
Changing status...

Updated Leave Request:
{
  id: 'LR-001',
  type: 'Sick Leave',
  status: 'APPROVED',
  days: 2,
  approver: 'Priya Sharma'
}
```

---

## Exercise 2: Employee Records

**Scenario:** Create multiple employee objects.

**Requirements:**
1. Create 3 employee objects with these properties:
   - employeeId
   - department
   - role

2. Store all 3 employees in an array called `employees`

3. Loop through the array and print each employee's details

4. Count how many employees have role "Manager" vs "Associate"

**Example Output:**
```
Employee Directory
━━━━━━━━━━━━━━━━━━━━━━━━━

Employee 1:
  ID: EMP-101
  Department: Sales
  Role: Manager

Employee 2:
  ID: EMP-102
  Department: Sales
  Role: Associate

Employee 3:
  ID: EMP-103
  Department: Support
  Role: Associate

Summary:
  Total employees: 3
  Managers: 1
  Associates: 2
```

---

## Exercise 3: Leave Requests Array

**Scenario:** Create an array of leave request objects and calculate statistics.

**Requirements:**
1. Create an array called `leaveRequests` with 5 request objects
2. Each request object should have:
   - type (leave type)
   - status ("APPROVED", "REJECTED", or "PENDING")
   - days (number of days)

3. Loop through and print each request

4. Calculate and print:
   - Total requests
   - Approved count
   - Rejected count
   - Pending count
   - Approval rate (percentage)
   - Total days requested

**Example Output:**
```
Leave Requests Report
━━━━━━━━━━━━━━━━━━━━━━━━━

✓ 1. Sick Leave
  Status: APPROVED
  Days: 2

✗ 2. Casual Leave
  Status: REJECTED
  Days: 1

✓ 3. Earned Leave
  Status: APPROVED
  Days: 5

⊘ 4. Unpaid Leave
  Status: PENDING
  Days: 3

✓ 5. Sick Leave
  Status: APPROVED
  Days: 1

Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━
  Total requests: 5
  Approved: 3 (60.0%)
  Rejected: 1 (20.0%)
  Pending: 1 (20.0%)

  Total days requested: 12
```

---

## Exercise 4: Object Methods and 'this' Keyword

**Scenario:** Create objects with methods to simulate a payroll run.

**Requirements:**
1. Create an object called `payrollRun` with:
   - name: "March Payroll"
   - totalEmployees: 5
   - processedEmployees: 0

2. Add these methods to the object:
   - `start()` - prints "Running payroll: [name]"
   - `process()` - increments processedEmployees and prints the count
   - `getReport()` - prints a summary with completion rate

3. Call the methods to:
   - Start the run
   - Process 3 employees
   - Generate the report

4. Create a second object `leaveRequest` with methods:
   - `submit()` - sets status to "SUBMITTED" and records submit time
   - `approve()` - sets status to "APPROVED" and calculates processing time
   - `reject(reason)` - sets status to "REJECTED" with reason
   - Properties: type, status, submitTime

**Example Output:**
```
Payroll Run with Methods
━━━━━━━━━━━━━━━━━━━━━━━━━

Running payroll: March Payroll

✓ Employee processed! Total: 1
✓ Employee processed! Total: 2
✓ Employee processed! Total: 3

Payroll Report:
  Name: March Payroll
  Total employees: 5
  Processed: 3 (60.0%)
  Remaining: 2

━━━━━━━━━━━━━━━━━━━━━━━━━

Leave Request with Methods:

✓ Submitted: Sick Leave
  Status: SUBMITTED

✓ Sick Leave APPROVED
  Processing time: 0.05s
```

**Hints:**
- Use `this.propertyName` inside methods to access object properties
- For processing time: `Date.now()` gives current time in milliseconds
- Use `function() { }` syntax for methods, not arrow functions (for `this` to work)

---

## Exercise 5: Deleting Properties

**Scenario:** Clean up temporary fields from an employee record before archiving it.

**Requirements:**
1. Create an object `employeeRecord` with:
   - employeeId: "EMP-101"
   - department: "Sales"
   - tempNote: "temporary"
   - debugInfo: "some debug data"

2. Print the object before cleanup

3. Use `delete` to remove:
   - tempNote
   - debugInfo

4. Print the object after cleanup

5. Use the `in` operator to check if `tempNote` still exists

**Example Output:**
```
Archive Employee Record
━━━━━━━━━━━━━━━━━━━━━━━━━

Before cleanup:
{
  employeeId: 'EMP-101',
  department: 'Sales',
  tempNote: 'temporary',
  debugInfo: 'some debug data'
}

After cleanup:
{
  employeeId: 'EMP-101',
  department: 'Sales'
}

Does 'tempNote' exist? false
Does 'employeeId' exist? true

✓ Record ready to archive!
```

---


## Common Mistakes to Avoid

**Missing commas:**
```javascript
// Wrong
let obj = {
    type: "Leave"
    status: "APPROVED"  // Missing comma!
};
```

**Correct:**
```javascript
let obj = {
    type: "Leave",     // Comma here
    status: "APPROVED"
};
```

**Wrong property access:**
```javascript
let request = { type: "Sick Leave" };
console.log(request.status);  // undefined (property doesn't exist)
```

**Confusing array and object syntax:**
```javascript
// Array - square brackets
let arr = [1, 2, 3];

// Object - curly braces
let obj = { a: 1, b: 2 };
```

---

## Tricky Questions

1. If you delete a property from an object with `delete`, and then check `"propertyName" in obj`, does it behave any differently from checking `obj.propertyName === undefined`?
2. `for...in` loops over an object's own keys as strings. If you accidentally use `for...in` on an array instead of an object, what do you actually get back on each iteration?

---

## Object Patterns Quick Reference

**Create object:**
```javascript
let obj = {
    key1: "value1",
    key2: 123,
    key3: true
};
```

**Access properties:**
```javascript
obj.key1              // Dot notation (most common)
obj["key1"]           // Bracket notation (dynamic)
```

**Modify object:**
```javascript
obj.key1 = "new";     // Change existing
obj.newKey = "add";   // Add new property
```

**Array of objects:**
```javascript
let arr = [
    { type: "Sick Leave", status: "APPROVED" },
    { type: "Casual Leave", status: "REJECTED" }
];

// Access
arr[0].type            // "Sick Leave"
arr[1].status          // "REJECTED"
```

**Loop through array of objects:**
```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].type);
    console.log(arr[i].status);
}
```

**Loop through object properties:**
```javascript
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand the difference between objects and arrays?
2. Can I create objects with multiple properties?
3. Do I know when to use dot vs bracket notation?
4. Can I delete properties using the `delete` keyword?
5. Can I create object methods (functions inside objects)?
6. Do I understand how to use `this` keyword in methods?
7. Can I create and loop through arrays of objects?
8. Do I understand how to access nested properties?