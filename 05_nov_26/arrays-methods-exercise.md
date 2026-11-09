# Array Methods - Exercise

**Topic:** Arrays - push, pop, unshift, shift, indexOf, slice, splice
**File to Create:** One file per exercise (see each exercise's filename)

---

## Learning Goals

By completing this exercise, you will:
- Create arrays and access elements by index and `.length`
- Add elements with `push()` and `unshift()`
- Remove elements with `pop()` and `shift()`
- Find elements with `indexOf()`
- Extract array portions with `slice()` (without modifying the original)
- Modify arrays in place with `splice()` (remove, insert, replace)
- Understand the core difference: `slice()` copies, `splice()` mutates
- Build claim and policy record collections

---

## Setup

1. Open VSCode
2. Create each file listed below in your training folder
3. Test each file by running `node <filename>.js`

---

## Exercise 1: Claims Queue Array

**Scenario:** Create an array to store today's incoming claim types.

Create a file called `claims-queue.js`.

**Requirements:**
1. Create an array called `claimTypes` with these 5 values:
   - "Auto collision"
   - "Water damage"
   - "Theft claim"
   - "Fire damage"
   - "Liability claim"

2. Print the following:
   - The complete array
   - Total number of claims
   - The first claim
   - The last claim (use `.length`, not a hard-coded index!)

**Example Output:**
```
Claims Queue

Claims:
[ 'Auto collision',
  'Water damage',
  'Theft claim',
  'Fire damage',
  'Liability claim' ]

Total claims: 5
First claim: Auto collision
Last claim: Liability claim
```

---

## Exercise 2: Claims Processing Tracker

**Scenario:** Build a claim decisions array dynamically as claims get processed.

Create a file called `claims-tracker.js`.

**Requirements:**
1. Create an empty array called `claimDecisions`
2. "Process" 5 claims by adding these decisions one by one:
   - "APPROVED"
   - "APPROVED"
   - "REJECTED"
   - "APPROVED"
   - "PENDING_DOCS"
3. After adding each decision, print: "Claim X processed: [DECISION]"
4. At the end, print:
   - Total claims processed
   - The complete decisions array
   - Check if "REJECTED" exists (using `indexOf`)

**Example Output:**
```
Processing Claims...

Claim 1 processed: APPROVED
Claim 2 processed: APPROVED
Claim 3 processed: REJECTED
Claim 4 processed: APPROVED
Claim 5 processed: PENDING_DOCS

Processing Summary:
Total claims processed: 5
Decisions: [ 'APPROVED', 'APPROVED', 'REJECTED', 'APPROVED', 'PENDING_DOCS' ]
Contains rejections: Yes (found at index 2)
```

---

## Exercise 3: Policyholder Email Management

**Scenario:** Manage policyholder emails using array methods.

Create a file called `policyholder-emails.js`.

**Requirements:**
1. Create an array called `policyholderEmails` with these initial values:
   - "alice@example.com"
   - "ben@example.com"
   - "chloe@example.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "dev@example.com" to the END
   - Add "admin@example.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count

**Example Output:**
```
Policyholder Email Management

Initial emails:
[ 'alice@example.com', 'ben@example.com', 'chloe@example.com' ]
Count: 3

After adding dev@example.com to end:
[ 'alice@example.com', 'ben@example.com', 'chloe@example.com', 'dev@example.com' ]

After adding admin@example.com to beginning:
[ 'admin@example.com', 'alice@example.com', 'ben@example.com', 'chloe@example.com', 'dev@example.com' ]

After removing last email:
[ 'admin@example.com', 'alice@example.com', 'ben@example.com', 'chloe@example.com' ]

After removing first email:
[ 'alice@example.com', 'ben@example.com', 'chloe@example.com' ]

Final count: 3
```

---

## Exercise 4: Premium Amounts Analysis

**Scenario:** Store and analyze a batch of premium payment amounts.

Create a file called `premium-analysis.js`.

**Requirements:**
1. Create an array called `premiumAmounts` with these values:
   - 850, 1200, 640, 990, 1450, 720, 1100

2. Calculate and print:
   - Total number of amounts
   - First amount
   - Last amount
   - Check if amount 990 exists in the array

**Example Output:**
```
Premium Amounts Analysis

Amounts: [ 850, 1200, 640, 990, 1450, 720, 1100 ]
Total amounts: 7

First amount: 850
Last amount: 1100

Checking for specific amounts...
Amount 990 found: Yes (at index 3)
Amount 500 found: No (index: -1)
```

---

## Exercise 5: slice() - Extract Claim Batches

**Scenario:** You have one day's full claim queue, but you often want to work with just a slice of it (e.g. "morning batch only") without touching the original array.

Create a file called `claim-batches-slice.js`.

**Requirements:**
1. Create an array called `claimQueue` with these 6 values:
   - "Morning1", "Morning2", "Morning3", "Afternoon1", "Afternoon2", "Afternoon3"

2. Using `.slice()` (never modify `claimQueue` directly), create:
   - `morningBatch` - the first 3 claims
   - `afternoonBatch` - the last 3 claims (use a **negative** index)
   - `middleBatch` - claims from index 2 up to (not including) index 5
   - `queueCopy` - a full copy of the entire array (call `.slice()` with no arguments)

3. Print each new array, and finish by printing `claimQueue` again to prove the original array is still unchanged.

**Example Output:**
```
Full Claim Queue: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]

Morning batch only (first 3): [ 'Morning1', 'Morning2', 'Morning3' ]
Afternoon batch only (last 3): [ 'Afternoon1', 'Afternoon2', 'Afternoon3' ]
Middle batch (index 2-5): [ 'Morning3', 'Afternoon1', 'Afternoon2' ]
Full copy: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]

Original claim queue unchanged: [ 'Morning1', 'Morning2', 'Morning3', 'Afternoon1', 'Afternoon2', 'Afternoon3' ]
```

---

## Exercise 6: splice() - Modify Claim List In Place

**Scenario:** Unlike `slice()`, `splice()` changes the array it's called on - perfect for editing a claim list directly as it moves through review.

Create a file called `claim-list-splice.js`.

**Requirements:**
1. Create an array called `claimList` with these 5 values:
   - "Auto", "Home", "Health", "Travel", "Life"
2. Print the original array.
3. **Step 1 - Remove:** Use `.splice()` to remove 1 element at index 2. Store the removed element(s) in a variable and print them, then print the array afterward.
4. **Step 2 - Insert:** Use `.splice()` to insert `"Marine"` and `"Pet"` at index 1, **without removing anything** (`deleteCount` of 0). Print the array afterward.
5. **Step 3 - Replace:** Use `.splice()` to replace the element at index 0 with `"Motorcycle"`. Print the array afterward.
6. Print a closing note confirming that `.splice()` modifies the original array (unlike `.slice()`).

**Example Output:**
```
Original claim list: [ 'Auto', 'Home', 'Health', 'Travel', 'Life' ]

Step 1 - Remove 1 element at index 2:
  Removed: [ 'Health' ]
  Array now: [ 'Auto', 'Home', 'Travel', 'Life' ]

Step 2 - Insert 'Marine' and 'Pet' at index 1 (nothing removed):
  Array now: [ 'Auto', 'Marine', 'Pet', 'Home', 'Travel', 'Life' ]

Step 3 - Replace element at index 0 with 'Motorcycle':
  Array now: [ 'Motorcycle', 'Marine', 'Pet', 'Home', 'Travel', 'Life' ]

Key point: splice() modifies the ORIGINAL array!
```

---

## Tricky Questions

1. `indexOf()` and `includes()` both use strict equality (`===`) to compare. Does `claimDecisions.indexOf("approved")` (lowercase) find an entry stored as `"APPROVED"`?
2. If you assign to an index far beyond an array's current length (e.g. `arr[10] = "x"` on an empty array), what happens to the indexes you skipped, and what does `.length` become?

---

## Additional Challenges

### Challenge 1: Complete Claims Report with Parallel Arrays

**Scenario:** Complete claims report with parallel arrays.

Create a file called `claims-report.js`.

**Requirements:**
Create a claims report system with parallel arrays (same index = related data):

1. Create three arrays:
   - `claimTypes` - Array of 5 claim types
   - `claimStatuses` - Array of 5 statuses (APPROVED/REJECTED/PENDING_DOCS)
   - `processingDays` - Array of 5 processing times in days

2. Print a formatted report for each claim showing:
   - Claim number
   - Claim type
   - Status
   - Processing time

3. At the end, calculate and print:
   - Total claims
   - Total processing time (sum of all days)

**Example Output:**
```
════════════════════════════════════════
         CLAIMS PROCESSING REPORT
════════════════════════════════════════

Claim 1: Auto collision - minor damage
  Status: APPROVED
  Processing time: 3 days

Claim 2: Water damage - kitchen
  Status: REJECTED
  Processing time: 5 days

Claim 3: Theft claim - electronics
  Status: APPROVED
  Processing time: 2 days

Claim 4: Fire damage - garage
  Status: APPROVED
  Processing time: 7 days

Claim 5: Liability claim
  Status: PENDING_DOCS
  Processing time: 0 days

════════════════════════════════════════
              SUMMARY
════════════════════════════════════════
Total claims: 5
Total processing time: 17 days
════════════════════════════════════════
```

---

### Challenge 2: slice() vs splice() Face-off

**Scenario:** Prove to yourself, side by side, which method mutates the original array and which one doesn't.

Create a file called `slice-vs-splice.js`.

**Requirements:**
1. Create two **identical** arrays: `arrayA` and `arrayB`, both `["A", "B", "C", "D"]`.
2. Call `arrayA.slice(1, 3)` and store the result in `slicedResult`.
3. Call `arrayB.splice(1, 2)` and store the result in `splicedResult`.
4. Print `slicedResult`, then `arrayA` (should be unchanged).
5. Print `splicedResult`, then `arrayB` (should be modified).
6. Print a one-line takeaway summarizing the difference between the two methods.

**Example Output:**
```
Starting arrays:
  arrayA: [ 'A', 'B', 'C', 'D' ]
  arrayB: [ 'A', 'B', 'C', 'D' ]

After arrayA.slice(1, 3):
  Returned: [ 'B', 'C' ]
  arrayA: [ 'A', 'B', 'C', 'D' ]  (UNCHANGED)

After arrayB.splice(1, 2):
  Returned: [ 'B', 'C' ]
  arrayB: [ 'A', 'D' ]  (MODIFIED!)

Takeaway: slice() extracts a copy and leaves the original alone.
splice() edits the original array directly.
```

> **Want more on this?** `slice()`/spread only copy one level deep - see the dedicated shallow-vs-deep-copy exercise in `7-objects/` for the gotcha with nested arrays and objects.

---

## Common Mistakes to Avoid

**Off-by-one error accessing last element:**
```javascript
// Wrong - goes beyond array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**Confusing push/pop with unshift/shift:**
```javascript
// push/pop work at the END
array.push("item");    // Add to end
array.pop();           // Remove from end

// unshift/shift work at the BEGINNING
array.unshift("item"); // Add to beginning
array.shift();         // Remove from beginning
```

**Forgetting arrays are zero-indexed:**
```javascript
// Wrong - first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

**Assuming slice() modifies the array (or that splice() doesn't):**
```javascript
// slice() NEVER changes the original - it returns a new array
let original = ["A", "B", "C"];
let copy = original.slice(1);
console.log(original); // ["A", "B", "C"] - unchanged!

// splice() ALWAYS changes the original - it mutates in place
original.splice(1, 1);
console.log(original); // ["A", "C"] - changed!
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand zero-based indexing?
2. Can I access first and last elements correctly?
3. Do I know when to use push vs unshift?
4. Do I know when to use pop vs shift?
5. Can I use `.length` properly?
6. Do I understand how `indexOf()` works?
7. Can I extract a portion of an array with `slice()` without changing the original?
8. Can I remove, insert, and replace elements with `splice()`?
9. Do I understand the key difference between `slice()` and `splice()`?

---

## Reflection

**Think about:**
1. How are arrays better than several individual variables holding related values?
2. Where else, outside this example, might you track a growing list of items?
3. When would you reach for `slice()` instead of `splice()`, or vice versa?

---

## Need Help?

**If you're stuck:**
1. Review the lesson materials
2. Check the presentation slides
3. Look at the demo code files
4. Remember: arrays start at index 0
5. Use `console.log()` to inspect arrays
6. Ask in the class forum

---

## Progress Check

**You can now:**
- Create and use arrays
- Access elements by index
- Add and remove elements
- Find elements in arrays
- Extract array subsets with `slice()`
- Remove/insert/replace elements with `splice()`
- Manage collections of records
