function add(a, b) {
  //a and b are parameters
  return a + b;
}
console.log(multiply(7, 8));
//function expression i.e. declaring a function and assigning it to a variable
//function expressions are not hoisted
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4));
let multiply1 = multiply;

multiply1(5, 3);
