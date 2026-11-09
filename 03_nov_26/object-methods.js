let appointmentInfo = {
  type: "Checkup",
  status: "COMPLETED",
  duration: 25,
  doctor: "Dr. Patel",
};

let keys = Object.keys(appointmentInfo);
let values = Object.values(appointmentInfo);
console.log(keys);
console.log(values);

for (let key of Object.keys(appointmentInfo)) {
  console.log("*************" + key + ":" + appointmentInfo[key]);
}

let entries = Object.entries(appointmentInfo);
console.log(entries);
console.log(entries[0][1]);

let objectFromArrayOfArray = Object.fromEntries([
  ["name", "Mark"],
  ["Phone", "53454534343"],
]);
console.log(objectFromArrayOfArray);
