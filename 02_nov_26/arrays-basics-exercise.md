# Arrays Basics - Exercise

**Topic:** Arrays - Storing Multiple Values
**File to Create:** `arrays-basics-practice.js`

---

## Learning Goals

By completing this exercise, you will:
- Create arrays with multiple values
- Access array elements by index
- Understand zero-based indexing
- Use the `.length` property to find the first and last elements

---

## Setup

1. Open VSCode
2. Create a new file: `arrays-basics-practice.js`
3. Save it in your training folder
4. Test your code by running: `node arrays-basics-practice.js`

---

## Exercise 1: Policy Types Array

**Scenario:** Create an array to store the policy types your agency offers.

**Requirements:**
1. Create an array called `policyTypes` with these 4 values:
   - "Auto"
   - "Home"
   - "Life"
   - "Health"

2. Print the following:
   - The complete array
   - Total number of policy types
   - The first policy type
   - The last policy type (use `.length`, not a hard-coded index!)

**Example Output:**
```
Policy Types

Types:
[ 'Auto', 'Home', 'Life', 'Health' ]

Total types: 4
First type: Auto
Last type: Health
```

---

## Exercise 2: Claim Status by Index

**Scenario:** Print each claim status in order, and show how index position relates to array position.

**Requirements:**
1. Create an array called `claimStatuses` with these 4 values:
   - "Filed"
   - "Under Review"
   - "Approved"
   - "Rejected"

2. Print each value using its index (`claimStatuses[0]`, `claimStatuses[1]`, etc.), labeled with its position (1st, 2nd, 3rd, 4th)

3. Print a small table showing position, index, and value lined up, similar to the zero-indexed visualization from class

**Example Output:**
```
Claim Statuses

First (index 0): Filed
Second (index 1): Under Review
Third (index 2): Approved
Fourth (index 3): Rejected

Position:  1st          2nd            3rd          4th
Index:     0            1              2            3
```

---

## Exercise 3: Premium Amounts and Length

**Scenario:** Store premium payment amounts and calculate values using `.length`.

**Requirements:**
1. Create an array called `premiumAmounts` with these 4 values:
   - 450, 620, 380, 900

2. Calculate and print:
   - Total number of premium amounts
   - First amount
   - Last amount (using `.length - 1`, not a hard-coded index)
   - Second-to-last amount (using `.length - 2`)

**Example Output:**
```
Premium Amounts

Amounts: [ 450, 620, 380, 900 ]
Total amounts: 4

First amount: 450
Last amount: 900
Second-to-last amount: 380
```

---

## Tricky Questions

1. An array has 4 elements, so its valid indexes are 0 through 3. What happens if you access `array[4]` - does it crash, or return something else?
2. If `array.length` is 4, what index does `array[array.length]` point to? Is that a valid element?

---

## Common Mistakes to Avoid

**Off-by-one error accessing the last element:**
```javascript
// Wrong - goes beyond the array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**Forgetting arrays are zero-indexed:**
```javascript
// Wrong - the first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand zero-based indexing?
2. Can I access the first and last elements correctly, without hard-coding the last index?
3. Can I use `.length` properly?

---

## Reflection

**Think about:**
1. How are arrays better than several individual variables holding related values?
2. Where else, outside this example, might you store an ordered list of values like this?
