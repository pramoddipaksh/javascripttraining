//1. Create `firstName` and `lastName` variables and combine them into `fullName` using a template literal.
const firstName = "Aisha";
const lastName = "Khan";
const fullName = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`);

//2. Build an `email` from the name using `.toLowerCase()` inside a template literal: `` `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com` ``
const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
console.log(`Email: ${email}`);
console.log("");

//3. Create a multi-line template literal that prints a visit confirmation, including the patient's name, email, and appointment type.
const appointmentType = "Annual Checkup";
const visitConfirmation = `========================================
        VISIT CONFIRMATION
========================================
Patient: ${fullName}
Email: ${email}
Appointment: ${appointmentType}
========================================`;
console.log(visitConfirmation);
console.log();

//4. Given a consultation fee of `500` and a lab fee of `250`, print the total using a calculation **inside** `${ }`.

const consultationFee = 500;
const labFee = 250;
console.log(`Total fee: ₹${consultationFee + labFee}`);
console.log("");

//5. Build three pieces of test data from these values, and print
//them:
const baseUrl = "https://portal.sunrisehealth.example.com";
const patientId = "P-1001";
const visitDate = "2026-08-06";

const appointmentsUrl = `${baseUrl}/patients/${patientId}/appointments`;
const selectPatientRow = `[data-patient-id="${patientId}"]`;
const Message = `Appointment booked for ${fullName} on ${visitDate}`;

console.log("TEST DATA");
console.log("==================");
console.log(`URL: ${appointmentsUrl}`);
console.log(`Selector: ${selectPatientRow}`);
console.log(`Expected message: ${Message}`);
