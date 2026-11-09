# Loops & Iteration - Exercise

**Topic:** Loops - Automating Repetitive Tasks
**File to Create:** `loops-iteration-exercise.js`

---

## Learning Goals

By completing this exercise, you will:
- Write for loops to iterate through arrays
- Use for...of loops for cleaner array iteration
- Understand when to use for vs for...of
- Use while loops for conditional iteration
- Use do...while loops for execute-at-least-once scenarios
- Implement retry logic with do...while
- Count and analyze array elements
- Calculate totals and averages
- Apply loop control (break, continue)
- Build automated reports

---

## Setup

1. Open VSCode
2. Create a new file: `loops-iteration-exercise.js`
3. Save it in your training folder
4. Test your code by running: `node loops-iteration-exercise.js`

---

## Exercise 1: Print All Appointments

**Scenario:** Display all appointments on today's clinic schedule with numbering.

**Requirements:**
1. Create an array called `appointments` with these values:
   - "Annual checkup"
   - "Dental cleaning"
   - "Eye exam"
   - "Vaccination"
   - "Blood test"

2. Use a for loop to print each appointment with:
   - Appointment number (starting from 1, not 0!)
   - Appointment name

**Example Output:**
```
Today's Clinic Schedule
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Annual checkup
2. Dental cleaning
3. Eye exam
4. Vaccination
5. Blood test

Total appointments: 5
```

---

## Exercise 1.5: Refactor with for...of Loop

**Scenario:** Learn the modern, cleaner way to iterate arrays when you don't need the index.

**Requirements:**
1. Take the same `appointments` array from Exercise 1
2. Rewrite the loop using `for...of` instead of traditional for loop
3. Notice how the code becomes cleaner and more readable

**Traditional for loop (from Exercise 1):**
```javascript
for (let i = 0; i < appointments.length; i++) {
    console.log((i + 1) + ". " + appointments[i]);
}
```

**Your task:** Write the same output using for...of
- **Challenge:** You'll need a separate counter for numbering since for...of doesn't give you `i`
- **Hint:** Create a variable like `let number = 1` before the loop

**Example Output:**
```
Today's Clinic Schedule (for...of version)
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Annual checkup
2. Dental cleaning
3. Eye exam
4. Vaccination
5. Blood test

Total appointments: 5
```

**Solution structure:**
```javascript
console.log("Today's Clinic Schedule (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let appointmentNumber = 1;
for (let appointment of appointments) {
    // Your code here: print appointmentNumber and appointment
    // Don't forget to increment appointmentNumber!
}
```

**Key Learning:**
- **Use for...of when:** You just need the values (cleaner code)
- **Use traditional for when:** You need the index position
- **for...of syntax:** `for (let item of array)` - reads naturally!

---

## Exercise 2: Count Appointment Outcomes

**Scenario:** Analyze a day's appointment outcomes and generate statistics.

**Requirements:**
1. Create an array called `appointmentStatuses` with these values:
   - "COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"

2. Use a for loop to count:
   - Total appointments
   - COMPLETED appointments
   - CANCELLED appointments
   - RESCHEDULED appointments

3. Calculate and print:
   - Completion rate (percentage)
   - Cancellation rate (percentage)

**Example Output:**
```
Appointment Outcomes
━━━━━━━━━━━━━━━━━━━━━━━━━

Counting outcomes...

Statistics:
  Total appointments: 8
  Completed: 5
  Cancelled: 2
  Rescheduled: 1

  Completion rate: 62.5%
  Cancellation rate: 25.0%
```

---

## Exercise 3: Calculate Patient Satisfaction Scores

**Scenario:** Calculate statistics for a batch of patient satisfaction survey scores.

**Requirements:**
1. Create an array called `satisfactionScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90, 87

2. Use a for loop to calculate:
   - Total of all scores
   - Average score
   - Highest score (you'll need to track this as you loop)
   - Lowest score (you'll need to track this as you loop)

**Hint for finding highest/lowest:**
```javascript
let highest = satisfactionScores[0];  // Start with first score
for (let i = 1; i < satisfactionScores.length; i++) {
    if (satisfactionScores[i] > highest) {
        highest = satisfactionScores[i];
    }
}
```

**Example Output:**
```
Patient Satisfaction Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━

Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]

Calculating statistics...

Results:
  Total: 688
  Average: 86.0
  Highest: 95
  Lowest: 73
```

---

## Exercise 4: Find Cancelled Appointments

**Scenario:** Identify and report all cancelled appointments from a day's schedule.

**Requirements:**
1. Create two parallel arrays:
   - `appointmentTypes`: ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
   - `appointmentOutcomes`: ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]

2. Use a for loop to:
   - Print all appointment outcomes
   - Find and print ONLY the cancelled appointments with their types
   - Count total cancellations

**Example Output:**
```
Daily Appointment Report
━━━━━━━━━━━━━━━━━━━━━━━━━

All Appointments:
  1. Checkup: COMPLETED
  2. Dental: CANCELLED
  3. Eye Exam: COMPLETED
  4. Vaccination: CANCELLED
  5. Blood Test: COMPLETED
  6. Follow-up: CANCELLED

Cancelled Appointments (need rebooking):
  - Dental
  - Vaccination
  - Follow-up

Total cancellations: 3
```

---

## Exercise 4.5: Stop Early with break, Skip with continue

**Scenario:** The front desk runs two quick checks on today's queue.

- `break` stops the **whole loop**.
- `continue` skips the **rest of this round** and moves on to the next one.

### Part A: break

Find the first patient who has waited more than 30 minutes, then stop checking.

**Requirements:**
1. Create an array called `waitTimes` with these values: 12, 18, 35, 8, 42
2. Create a counter `checkedCount` starting at 0
3. Use a for loop. In each round:
   - Add 1 to `checkedCount`
   - Print the patient number and wait time
   - If the wait time is over 30, print an alert and use `break`
4. After the loop, print how many patients were checked

**Example Output:**
```
Checking wait times (stop at the first one over 30 min):
  Patient 1: 12 min
  Patient 2: 18 min
  Patient 3: 35 min
  Over 30 minutes! Alerting the doctor.

Checked 3 of 5 patients
```

### Part B: continue

Average today's temperature readings. Some readings weren't taken and are stored as 0. They must not count towards the average.

**Requirements:**
1. Create an array called `temperatures` with these values: 98.6, 0, 101.2, 99.1, 0, 102.4
2. Create `total` and `readingsUsed`, both starting at 0
3. Use a for loop. In each round:
   - If the reading is 0, print that it wasn't taken and use `continue`
   - Otherwise, add it to `total`, add 1 to `readingsUsed`, and print it
4. After the loop, print how many readings were used and the average, rounded with `.toFixed(1)`

**Example Output:**
```
Temperature readings:
  Reading 1: 98.6
  Reading 2: not taken, skipping
  Reading 3: 101.2
  Reading 4: 99.1
  Reading 5: not taken, skipping
  Reading 6: 102.4

Readings used: 4 of 6
Average temperature: 100.3
```

**Key Learning:**
- Use `break` when you've found what you need and the rest doesn't matter
- Use `continue` when some values should be skipped but the loop must finish
- Both work the same way in `for`, `for...of`, and `while` loops

---

## Exercise 5: Retry Logic with do...while

**Scenario:** Implement retry logic for an appointment booking system that occasionally fails to connect.

**Requirements:**
1. Create a function called `bookAppointment()` that randomly returns true or false:
   ```javascript
   function bookAppointment() {
       return Math.random() > 0.7;  // 30% success rate
   }
   ```

2. Use a do...while loop to:
   - Attempt the booking at least once
   - Keep trying until it succeeds OR max attempts reached
   - Track the number of attempts
   - Print the status of each attempt

3. Variables to create:
   - `appointmentType`: "MRI Scan"
   - `attempts`: 0
   - `maxAttempts`: 5
   - `bookingConfirmed`: false

4. After the loop, print whether the booking eventually succeeded or failed

**Why do...while?**
- The booking attempt must run **at least once** (can't know if it succeeds without trying!)
- We check the condition **after** each attempt
- Perfect for retry scenarios

**Example Output:**
```
Appointment Booking Retry
━━━━━━━━━━━━━━━━━━━━━━━━━

Booking: MRI Scan
Max attempts: 5

Attempt 1...
  Booking FAILED
  Retrying...

Attempt 2...
  Booking FAILED
  Retrying...

Attempt 3...
  Booking CONFIRMED!

Booking confirmed on attempt 3
```

**OR if all attempts fail:**
```
Attempt 1...
  Booking FAILED
  Retrying...

Attempt 2...
  Booking FAILED
  Retrying...

Attempt 3...
  Booking FAILED
  Retrying...

Attempt 4...
  Booking FAILED
  Retrying...

Attempt 5...
  Booking FAILED

Booking failed after 5 attempts
```

**Hint for do...while structure:**
```javascript
do {
    attempts++;
    console.log("Attempt " + attempts + "...");

    bookingConfirmed = bookAppointment();

    if (bookingConfirmed) {
        // Print success message
    } else {
        // Print failure message
        // Print retry message if attempts < maxAttempts
    }

} while (!bookingConfirmed && attempts < maxAttempts);
```

**Key Learning:**
- **do...while** runs the code block first, then checks the condition
- Perfect for scenarios where you need to try at least once
- Common scenarios: retry logic, polling, validation
- Difference from while: while might not run at all, do...while always runs once

---

## Tricky Questions

1. A `do...while` loop checks its condition after the body runs. If the condition is false from the very start, does the body still run once, or does it get skipped entirely like a regular `while` loop would?
2. `continue` inside a `for...of` loop skips to the next value, same as in a regular `for` loop. What would `break` do in a `for...of` loop?
3. In Part A of Exercise 4.5, `break` is written inside an `if` block. Does it exit just the `if`, or the whole `for` loop?
4. In Part B of Exercise 4.5, what would the average be if you forgot the `continue`, so the two 0 readings were added in and counted?

---

## Additional Challenges

### Challenge: Complete Daily Clinic Report

**Scenario:** Complete daily clinic report combining multiple metrics.

**Requirements:**
Create a comprehensive appointment report that combines everything:

1. Create three parallel arrays:
   - `appointmentTypes`: Array of 6 appointment types
   - `appointmentOutcomes`: Array of 6 outcomes (COMPLETED/CANCELLED/RESCHEDULED)
   - `appointmentDurations`: Array of 6 durations in minutes

2. Use loops to calculate:
   - Total appointments, completed, cancelled, rescheduled
   - Completion rate
   - Total duration
   - Average duration per appointment
   - List of cancelled appointments

3. Print a formatted report with all statistics

**Example Output:**
```
╔═══════════════════════════════════════════╗
║        DAILY CLINIC FINAL REPORT          ║
╚═══════════════════════════════════════════╝

Appointment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Checkup
   Outcome: COMPLETED
   Duration: 25 min

2. Dental
   Outcome: CANCELLED
   Duration: 0 min

3. Eye Exam
   Outcome: COMPLETED
   Duration: 30 min

4. Vaccination
   Outcome: COMPLETED
   Duration: 10 min

5. Blood Test
   Outcome: RESCHEDULED
   Duration: 0 min

6. Follow-up
   Outcome: CANCELLED
   Duration: 0 min

Summary Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total appointments: 6
Completed: 3 (50.0%)
Cancelled: 2 (33.3%)
Rescheduled: 1 (16.7%)

Duration:
  Total: 65 min
  Average: 10.8 min per appointment

Cancelled Appointments:
  - Dental
  - Follow-up

Overall Status: NEEDS FOLLOW-UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Mistakes to Avoid

**Off-by-one error:**
```javascript
// Wrong - tries to access beyond array
for (let i = 0; i <= appointmentOutcomes.length; i++) {  // <= is wrong!
```

**Correct:**
```javascript
for (let i = 0; i < appointmentOutcomes.length; i++) {  // < is correct
```

**Starting at wrong index:**
```javascript
// Wrong - skips first element
for (let i = 1; i < appointments.length; i++) {
```

**Correct:**
```javascript
for (let i = 0; i < appointments.length; i++) {  // Start at 0
```

**Not updating loop variable:**
```javascript
// Wrong - infinite loop!
let i = 0;
while (i < 5) {
    console.log(i);
    // Forgot i++
}
```

**Correct:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // MUST increment!
}
```

**Wrong comparison in counting:**
```javascript
// Wrong - assigns instead of compares
if (outcomes[i] = "COMPLETED") {  // Single = is assignment!
```

**Correct:**
```javascript
if (outcomes[i] === "COMPLETED") {  // === is comparison
```

---

## Loop Patterns Quick Reference

**Print all elements (traditional for):**
```javascript
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

**Print all elements (modern for...of):**
```javascript
for (let element of array) {
    console.log(element);  // Cleaner when index not needed!
}
```

**Count matching elements:**
```javascript
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === "target") {
        count++;
    }
}
```

**Calculate total:**
```javascript
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
```

**Find highest:**
```javascript
let highest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > highest) {
        highest = array[i];
    }
}
```

**Find first match:**
```javascript
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === "target") {
        found = true;
        break;  // Stop searching
    }
}
```

**Retry logic with do...while:**
```javascript
let attempts = 0;
let maxAttempts = 3;
let success = false;

do {
    attempts++;
    success = tryOperation();  // Try at least once
} while (!success && attempts < maxAttempts);
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. Do I understand when to use `<` vs `<=` in loop conditions?
2. Can I loop through an array from start to finish?
3. Do I know how to count matching elements?
4. Can I calculate totals and averages with loops?
5. Do I understand when to use break vs continue?
6. Do I understand the difference between while and do...while?
7. Can I implement retry logic with do...while?
8. Did I avoid off-by-one errors?