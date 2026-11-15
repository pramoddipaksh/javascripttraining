let appointments = [
  "Annual checkup",
  "Dental cleaning",
  "Eye exam",
  "Vaccination",
  "Blood test",
];

console.log("Exercise 1:");
console.log("Today's Clinic Schedule");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
for (let i = 0; i < appointments.length; i++) {
  console.log(`${i + 1}. ${appointments[i]}`);
}
console.log("");
console.log(`Total appointments: ${appointments.length}`);

console.log("\n Exercise 1.5:");

console.log("Today's Clinic Schedule (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let appointmentNumber = 1;

for (let appointment of appointments) {
  console.log(`${appointmentNumber}. ${appointment}`);
  appointmentNumber++;
}

console.log(`\nTotal appointments: ${appointments.length}`);

console.log("\n Exercise 2:");
let appointmentStatuses = [
  "COMPLETED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "RESCHEDULED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
];

console.log("Appointment Outcomes");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("Counting outcomes...");

let completedCount = 0;
let cancelledCount = 0;
let rescheduledCount = 0;

for (let i = 0; i < appointmentStatuses.length; i++) {
  const statuss = appointmentStatuses[i];

  if (statuss === "COMPLETED") {
    completedCount++;
  } else if (statuss === "CANCELLED") {
    cancelledCount++;
  } else if (statuss === "RESCHEDULED") {
    rescheduledCount++;
  }
}

const totalAppointments = appointmentStatuses.length;
const completionRate = (completedCount / totalAppointments) * 100;
const cancellationRate = (cancelledCount / totalAppointments) * 100;

console.log("Statistics:");

console.log(`  Total appointments: ${totalAppointments}`);
console.log(`  Completed: ${completedCount}`);
console.log(`  Cancelled: ${cancelledCount}`);
console.log(`  Rescheduled: ${rescheduledCount}\n`);

console.log(`  Completion rate: ${completionRate}%`);
console.log(`  Cancellation rate: ${cancellationRate}%`);

console.log("\n Exercise 3:");

let satisfactionScores = [85, 92, 78, 95, 88, 73, 90, 87];

console.log("Patient Satisfaction Analysis");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("Scores: " + "[" + satisfactionScores + "]");

let highest = satisfactionScores[0]; // Start with first score
let total = 0;
let lowest = satisfactionScores[0];

for (let i = 0; i < satisfactionScores.length; i++) {
  total += satisfactionScores[i];

  if (satisfactionScores[i] > highest) {
    highest = satisfactionScores[i];
  }

  if (satisfactionScores[i] < lowest) {
    lowest = satisfactionScores[i];
  }
}

console.log("Calculating statistics...");
console.log("\n Results:");

const average = total / satisfactionScores.length;
console.log("Total: " + total);
console.log("Average: " + average);
console.log("Highest: " + highest);
console.log("Lowest: " + lowest);

console.log("\n Exercise 4: \n");

let appointmentTypes = [
  "Checkup",
  "Dental",
  "Eye Exam",
  "Vaccination",
  "Blood Test",
  "Follow-up",
];
let appointmentOutcomes = [
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
  "COMPLETED",
  "CANCELLED",
];

for (let i = 0; i < appointmentTypes.length; i++) {
  console.log(`${i + 1}. ${appointmentTypes[i]}: ${appointmentOutcomes[i]}`);
}

console.log(`\n Cancelled Appointments (need rebooking):`);
let cancellations = 0;
for (let i = 0; i < appointmentOutcomes.length; i++) {
  if (appointmentOutcomes[i] === "CANCELLED") {
    console.log(`${appointmentTypes[i]}`);
    cancellations++;
  }
}

console.log(`Total cancellations: ${cancellations}`);

console.log("\n Exercise 4.5: \n");
console.log("Part A: break");

let waitTimes = [12, 18, 35, 8, 42];
let checkedCount = 0;

for (let i = 0; i < waitTimes.length; i++) {
  checkedCount++;
  const currentWait = waitTimes[i];
  console.log(`  Patient ${i + 1}: ${currentWait} min`);

  if (currentWait > 30) {
    console.log(" Over 30 minutes! Alerting the doctor.");
    break;
  }
}

console.log(`\nChecked ${checkedCount} of ${waitTimes.length} patients\n`);

console.log("\n Exercise 4.5: \n");
console.log("Part B: continue");

const temperatures = [98.6, 0, 101.2, 99.1, 0, 102.4];
let totall = 0;
let readingsUsed = 0;

console.log("Temperature readings:");

for (let i = 0; i < temperatures.length; i++) {
  const temp = temperatures[i];

  if (temp === 0) {
    console.log(`Reading ${i + 1}: not taken, skipping`);
    continue;
  }

  total += temp;
  readingsUsed++;
  console.log(`Reading ${i + 1}: ${temp}`);
}
const averageTemp = total / readingsUsed;

console.log(`\nReadings used: ${readingsUsed} of ${temperatures.length}`);

console.log(`Average temperature: ${averageTemp.toFixed(1)}`);

console.log("\n Exercise 5: \n");

function bookAppointment() {
  return Math.random() > 0.7;
}

const appointmentType = "MRI Scan";
let attempts = 0;
const maxAttempts = 5;
let bookingConfirmed = false;

console.log("Appointment Booking Retry");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");
console.log(`Booking: ${appointmentType}`);
console.log(`Max attempts: ${maxAttempts}\n`);

do {
  attempts++;
  console.log(`Attempt ${attempts}...`);

  bookingConfirmed = bookAppointment();

  if (bookingConfirmed) {
    console.log("  Booking CONFIRMED!\n");
  } else {
    console.log("  Booking FAILED");
    if (attempts < maxAttempts) {
      console.log("  Retrying...\n");
    } else {
      console.log("");
    }
  }
} while (!bookingConfirmed && attempts < maxAttempts);

if (bookingConfirmed) {
  console.log(`Booking confirmed on attempt ${attempts}`);
} else {
  console.log(`Booking failed after ${maxAttempts} attempts`);
}
