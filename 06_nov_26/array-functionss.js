/**
 * Revision
 * - Arrow functions
 * - slice and splice
 * - filter, map
 * - copy using slice
 * -
 */
let claimApprovalScores = [85, 92, 78, 95, 88, 73, 90];
let firtLowerScore = claimApprovalScores.find((score) => score < 80);
console.log(firtLowerScore);

let isAllElementHigher = claimApprovalScores.every((score) => score >= 90);
console.log(isAllElementHigher);

let atleastOneElement = claimApprovalScores.some((score) => score < 80);
console.log(atleastOneElement);

let seeTotalSumOfScores = claimApprovalScores.reduce(
  (sum, score) => sum + score,
  0,
);
let seeMultiplicationValue = claimApprovalScores.reduce(
  (mult, score) => mult * score,
  1,
);

//sum 0
//sum 85
//sum 177
//sum

console.log(seeTotalSumOfScores);
