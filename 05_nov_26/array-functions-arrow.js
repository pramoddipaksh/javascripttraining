let claimApprovalScores = [85, 92, 78, 95, 88, 73, 90];

let highScores = claimApprovalScores.filter((a) => {
  return a > 80;
});

console.log("set1", highScores);

const isHighScore = (score) => score > 85;

let highScoreSet2 = claimApprovalScores.filter(isHighScore);
console.log("set2", highScoreSet2);

let evenIndexedScores = claimApprovalScores.filter(
  (score, index) => index % 2 === 0,
);

console.log(evenIndexedScores);

let decisions = claimApprovalScores.map((score) => {
  if (score >= 80) {
    return [score, "APPROVED"];
  } else {
    return [score, "REJECTED"];
  }
});
console.log(decisions);

let multiplyScores = claimApprovalScores.map((score) => score * 2);
console.log(multiplyScores);
console.log(claimApprovalScores);
