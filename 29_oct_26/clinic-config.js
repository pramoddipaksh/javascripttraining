// 1. Declare configuration variables with const and let

const clinicName = "Sunrise Health Clinic"; // const
const apiUrl = "https://api.sunrisehealth.example.com"; // const
let environmentName = "Staging"; // let; staging or production
let currentNurseOnDuty = "Jay Kane"; // let;
let todaysDate = "2026-08-06"; // let
let remindersEnabled = true; // let; Toggled true/false

// 2. Print system configuration layout
console.log("==========================================");
console.log("       CLINIC SYSTEM CONFIGURATION        ");
console.log("==========================================");
console.log(`Clinic Name: ${clinicName}`);
console.log(`API URL: ${apiUrl}`);
console.log(`Environment: ${environmentName}`);
console.log(`Nurse on Duty: ${currentNurseOnDuty}`);
console.log(`Date: ${todaysDate}`);
console.log(`Reminders Enabled: ${remindersEnabled}`);
console.log("==========================================");

// 3. Update the variable that changes shift switch
currentNurseOnDuty = "Daniel Reyes";

// 4. Print the updated nurse identity
console.log(`Shift change. Nurse on Duty: ${currentNurseOnDuty}`);
