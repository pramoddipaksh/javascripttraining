let empIds = [342, 42, 523, 53, 56, 2523];

const appointment = {
  type: "checkup",
  status: "PENDIND",
  duration: 25,
  date: {
    startDate: "03-Nov-26",
    endDate: "04-Nov-26",
  },
  getStatus() {
    return this.status;
  },
  setStatus: function (status) {
    this.status = status;
  },
};

for (let key in appointment) {
  console.log("*************" + key + ":" + appointment[key]);
}
console.log(appointment.getStatus());
console.log(appointment.type); //dot notation

console.log(appointment["type"]); //using []

console.log(appointment.date.endDate);

appointment.doctor = "Dr. Patel";
console.log(appointment);
appointment.status = "COMPLETED";
console.log(appointment);
delete appointment.duration;
console.log(appointment);
console.log("doctor1" in appointment);
console.log(appointment.doctor1);
