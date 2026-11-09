//Spread operator
// ...

function addThree(a, b, c) {
  return a + b + c;
}
let claimAmounts = [10, 20, 30, 40];

let sum = addThree(
  claimAmounts[0],
  claimAmounts[1],
  claimAmounts[2],
  claimAmounts[3],
);
console.log(sum);

//Spread operator n(...) in a function argument i.e. when you are calling a function ,
// unpacks an array into individual arguments
let sumUsingSpread = addThree(...claimAmounts); //[10, 20,30] - 10, 20, 30
console.log(sumUsingSpread);

let processingDurations = [2.5, 1.8, 4.1, 3.2];
let maxValue = Math.max(5, 7, 3, 7, 2342, 6);
Math.max(...processingDurations); //Math.max(2.5, 1.8, 4.1, 3.2)

console.log(maxValue);

let autoClaimTypes = ["collision", "theft"];
let propertyClaimTypes = ["fire", "flood"];
let allClaimTypes = autoClaimTypes + ", " + propertyClaimTypes;
let allClaimTypes1 = [...autoClaimTypes, ...propertyClaimTypes];
let allClaimTypes2 = [autoClaimTypes, propertyClaimTypes];
console.log(allClaimTypes1);
console.log(allClaimTypes);
console.log(allClaimTypes2);
