console.log("\n Exercise 2:\n");

let appointmentTypes = [
  "Annual Physical",
  "Dental Checkup",
  "Eye Exam",
  "Vaccination",
  "Follow-up Visit",
];

//2a

appointmentTypes.forEach((type) => {
  console.log(`Starting: ${type}`);
});

//2b

appointmentTypes.forEach((type, index) => {
  console.log(`${index + 1}. ${type}`);
});

//2c
let todaysAppointments = [
  {
    patientName: "Aisha Khan",
    appointmentType: "Annual Physical",
    status: "COMPLETED",
    duration: 30,
  },
  {
    patientName: "Raj Verma",
    appointmentType: "Dental Checkup",
    status: "CANCELLED",
    duration: 20,
  },
  {
    patientName: "Meera Nair",
    appointmentType: "Eye Exam",
    status: "COMPLETED",
    duration: 25,
  },
  {
    patientName: "Kabir Malhotra",
    appointmentType: "Vaccination",
    status: "COMPLETED",
    duration: 15,
  },
];

todaysAppointments.forEach((visit) => {
  const symbol = visit.status === "COMPLETED" ? "✓" : "✗";

  console.log(
    `${symbol} ${visit.patientName} - ${visit.appointmentType}: ${visit.status} (${visit.duration}m)`,
  );
});

console.log("\n Exercise 3:\n");

let patientRatings = [85, 92, 78, 95, 88, 73, 90];
//3a

let ratingPercentages = patientRatings.map((rating) => `${rating}%`);

console.log(ratingPercentages);

//3b
let ratingStatuses = patientRatings.map((rating) =>
  rating >= 80 ? "COMPLETED" : "CANCELLED",
);
console.log(ratingStatuses);

//3c
let visitSummaries = patientRatings.map((rating, index) => {
  const status = rating >= 80 ? "COMPLETED" : "CANCELLED";
  let tier = "C";

  if (rating >= 90) {
    tier = "A";
  } else if (rating >= 80) {
    tier = "B";
  }

  return {
    visitNumber: index + 1,

    rating: rating,
    status: status,
    tier: tier,
  };
});
console.log(visitSummaries);
