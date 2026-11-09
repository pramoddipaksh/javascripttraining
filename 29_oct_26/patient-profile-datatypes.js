// Declare patient profile variables
let firstName = "Aisha"; // String
let lastName = "Khan"; // String
let patientId = 1001; // Number
let age = 34; // Number
let averageWaitTime = 12.5; // Number
let isActive = true; // Boolean
let hasInsurance = false; // Boolean
let nextAppointment; // not booked yet
let referralNote = null; // deliberately empty

//1. Print all fields in a formatted profile

console.log("Patient Profile");
console.log("=================");
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Patient ID: ${patientId}`);
console.log(`Age: ${age}`);
console.log(`Avg Wait Time: ${averageWaitTime} mins`);
console.log(`Active: ${isActive}`);
console.log(`Has Insurance: ${hasInsurance}`);
console.log(`Next Appointment: ${nextAppointment}`);
console.log(`Referral Note: ${referralNote}`);
console.log("");
//2. Print `typeof` for every variable, labeled clearly
console.log("Type Check:");
console.log(`firstName: ${typeof firstName}`);
console.log(`lastName: ${typeof lastName}`);
console.log(`patientId: ${typeof patientId}`);
console.log(`age: ${typeof age}`);
console.log(`averageWaitTime: ${typeof averageWaitTime}`);
console.log(`isActive: ${typeof isActive}`);
console.log(`hasInsurance: ${typeof hasInsurance}`);
console.log(`nextAppointment: ${typeof nextAppointment}`);
console.log(`referralNote: ${typeof referralNote}`);

//3. Reassign `age` to a string like `"thirty-four"` and print `typeof age` again. Confirm it changed
age = "thirty-four";
console.log(`typeof age: ${typeof age}`);
