// 1. Declare these four values
const clinicsPhone = "022-4000-1234";
const maximumPatientPerDay = 40;
let patientsWaiting = 4;
let tokenNumber = 12;

// 2. Print all four
console.log(`Clinic Phone: ${clinicsPhone}`);
console.log(`Max patients per day: ${maximumPatientPerDay}`);
console.log(`Patients waiting: ${patientsWaiting}`);
console.log(`Current token: ${tokenNumber}`);

//one more patient arrives and the next token is called: update the two values that change to `5` and `13`, and print them again.
console.log("After update:");

patientsWaiting = 5;
console.log(`Updated patients waiting: ${patientsWaiting}`);
tokenNumber = 13;
console.log(`Current token: ${tokenNumber}`);

//3. Try giving the maximum patients per day a new value. Run the file, copy the error message into a comment, then comment the line out.
//maximumPatientPerDay = 60; // TypeError: Assignment to constant variable.

//4. Try writing `const clinicCode;` with no value. Run it, copy the error into a comment, then comment it out.
//const clinicCode; // SyntaxError: Missing initializer in const declaration

//5. Try declaring `let` for patients waiting a second time. Run it, copy the error into a comment, then comment it out.
//let maximumPatientPerDay; // SyntaxError: Identifier 'maximumPatientPerDay' has already been declared
