// 1a:
function addThree(a, b, c) {
  return a + b + c;
}
let visitCounts = [4, 7, 5];

// old
console.log(addThree(visitCounts[0], visitCounts[1], visitCounts[2])); // 16

// spread operator
console.log(addThree(...visitCounts)); // 16

// 1b: use `Math.max()` and `Math.min()`
let waitTimes = [12, 45, 9, 30];

let longestWait = Math.max(...waitTimes);
let shortestWait = Math.min(...waitTimes);

console.log("Longest wait:", longestWait);
console.log("Shortest wait:", shortestWait);

// 1c: Merge two arrays into one using spread. Don't use `.concat()`
let morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM"];
let afternoonSlots = ["2:00 PM", "2:30 PM"];

let allSlots = [...morningSlots, ...afternoonSlots];

console.log(allSlots); // ["9:00 AM", "9:30 AM", "10:00 AM", "2:00 PM", "2:30 PM"]
