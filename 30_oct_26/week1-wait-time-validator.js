// 1. Create a variable `waitTime` with value `25`

const waitTime = 25;

/* 2. Write an if-else statement that:
   - Checks if waitTime < 30
   - If yes, print: `"Wait time within target (X minutes)"`
   - If no, print: `"Wait time exceeds target (X minutes, target: 30 minutes)"` */

console.log("Wait Time Check");
console.log("Target: 30 minutes");
console.log("Actual: " + `${waitTime} minutes)`);

if (waitTime < 30) {
  console.log(`"Wait time within target (${waitTime} minutes)"`);
} else {
  console.log(
    `"Wait time exceeds target (${waitTime} minutes, target: 30 minutes )"`,
  );
}
