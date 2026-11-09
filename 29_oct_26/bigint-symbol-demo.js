//1. Store `Number.MAX_SAFE_INTEGER` and print it
const max = Number.MAX_SAFE_INTEGER;
console.log("max:" + max);

//2. Add `1`, `2`, and `3` to it and print each result. Notice that `+ 1` and `+ 2` give the same answer
console.log("max + 1: " + (max + 1));
console.log("max + 2: " + (max + 2));
console.log("max + 3: " + (max + 3));
console.log();

//3. Repeat using the BigInt version (`9007199254740991n` with `1n`, `2n`, `3n`)
const bigMax = 9007199254740991n;
console.log("bigMax + 1n: " + (bigMax + 1n));
console.log("bigMax + 2n: " + (bigMax + 2n));
console.log("bigMax + 3n: " + (bigMax + 3n));

//4. Print `typeof` a BigInt value
console.log("typeof bigMax: " + typeof bigMax);
console.log();

//B
//1. Create two Symbols with the same description `"labResultId"`
const sym1 = Symbol("labResultId");
const sym2 = Symbol("labResultId");

//2. Compare them with `===` and print the result
console.log("sym1 === sym2: " + (sym1 === sym2));

//3. Print `typeof` one of the Symbols
console.log("typeof sym1: " + typeof sym1);

//4. Print `.description` of each Symbol
console.log("sym1.description: " + sym1.description);
console.log("sym2.description: " + sym2.description);
