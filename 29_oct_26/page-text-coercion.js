/*1. Start with these values:
   ```javascript
   let consultationFeeText = "500"; // read from the page
   let labFeeText = "250";          // read from the page
   let discount = 50;               // a real number in your test
   ```
*/

let consultationFeeText = "500"; // read from the page
let labFeeText = "250"; // read from the page
let discount = 50; // a real number in your test

console.log("--- Adding two page values ---");

//2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.

console.log(
  `consultationFeeText + labFeeText → ${consultationFeeText + labFeeText}`,
);

//3. Fix it with `Number()` so the total is `750`, and print it.

let fixedTotal = Number(consultationFeeText) + Number(labFeeText);

console.log(`Fixed total → ${fixedTotal}`);
console.log("");

//4. Write predictions, then print `consultationFeeText + discount` and `consultationFeeText - discount`.

console.log(
  `consultationFeeText + discount → ${consultationFeeText + discount}`,
);
console.log(
  `consultationFeeText - discount → ${consultationFeeText - discount}`,
);
console.log("");

//5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`, print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`. Write a comment saying which one a test should use.

let displayedTotal = "750";
let expectedTotal = 750;

console.log(
  `displayedTotal == expectedTotal → ${displayedTotal == expectedTotal}`,
);
console.log(
  `displayedTotal === expectedTotal → ${displayedTotal === expectedTotal}`,
);
console.log(
  `Number(displayedTotal) === expectedTotal → ${Number(displayedTotal) === expectedTotal}`,
);
// Comment: === should be used always

//6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`, print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.

let waitTimeText = "about 20 mins";
let convertWaitTime = Number(waitTimeText);
console.log(`Number(waitTimeText) → ${convertWaitTime}`);

if (Number.isNaN(convertWaitTime)) {
  console.log("Wait time is not a valid number");
}

//7. Store `0.1 + 0.2` in a variable called `copay`. Print it, print whether it `=== 0.3`, and print whether `copay.toFixed(2) === "0.30"`.
let copay = 0.1 + 0.2;
console.log(`0.1 + 0.2 → ${copay}`);
console.log(`copay === 0.3 → ${copay === 0.3}`);
console.log(`copay.toFixed(2) === "0.30" → ${copay.toFixed(2) === "0.30"}`);
