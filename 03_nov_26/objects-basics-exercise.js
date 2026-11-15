const leaveRequest = {
  id: "LR-001",
  type: "Sick Leave",
  status: "PENDING",
  days: 2,
};

console.log("Exercise 1:\n");
console.log("Leave Request Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log(`ID: ${leaveRequest.id}`);
console.log(`Type: ${leaveRequest.type}`);
console.log(`Status: ${leaveRequest.status}`);
console.log(`Days: ${leaveRequest.days}\n`);

console.log("Adding approver...");
leaveRequest.approver = "Priya Sharma";

console.log("Changing status...\n");
leaveRequest.status = "APPROVED";

console.log("Updated Leave Request:");
console.log(leaveRequest);

console.log("Exercise 2:\n");
const employee1 = {
  employeeId: "EMP-101",
  department: "Sales",
  role: "Manager",
};

const employee2 = {
  employeeId: "EMP-102",
  department: "Sales",
  role: "Associate",
};

const employee3 = {
  employeeId: "EMP-103",
  department: "Support",
  role: "Associate",
};

const employees = [employee1, employee2, employee3];

console.log("Employee Directory");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let managerCount = 0;
let associateCount = 0;

for (let i = 0; i < employees.length; i++) {
  const currentEmployee = employees[i];

  console.log(`Employee ${i + 1}:`);
  console.log(`ID: ${currentEmployee.employeeId}`);
  console.log(`Department: ${currentEmployee.department}`);
  console.log(`Role: ${currentEmployee.role}\n`);

  if (currentEmployee.role === "Manager") {
    managerCount++;
  } else if (currentEmployee.role === "Associate") {
    associateCount++;
  }
}
console.log("Summary:");
console.log(`Total employees: ${employees.length}`);
console.log(`Managers: ${managerCount}`);
console.log(`Associates: ${associateCount}`);

console.log("Exercise 3:\n");
const leaveRequests = [
  { type: "Sick Leave", status: "APPROVED", days: 2 },
  { type: "Casual Leave", status: "REJECTED", days: 1 },
  { type: "Earned Leave", status: "APPROVED", days: 5 },
  { type: "Unpaid Leave", status: "PENDING", days: 3 },
  { type: "Sick Leave", status: "APPROVED", days: 1 },
];

console.log("Leave Requests Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let approvedCount = 0;
let rejectedCount = 0;
let pendingCount = 0;
let totalDays = 0;

for (let i = 0; i < leaveRequests.length; i++) {
  const request = leaveRequests[i];
  let statusIcon = "";

  if (request.status === "APPROVED") {
    statusIcon = "✓";
    approvedCount++;
  } else if (request.status === "REJECTED") {
    statusIcon = "✗";
    rejectedCount++;
  } else if (request.status === "PENDING") {
    statusIcon = "⊘";
    pendingCount++;
  }

  totalDays += request.days;

  console.log(`${statusIcon} ${i + 1}. ${request.type}`);
  console.log(`  Status: ${request.status}`);
  console.log(`  Days: ${request.days}\n`);
}

const totalRequests = leaveRequests.length;
const approvedRate = (approvedCount / totalRequests) * 100;
const rejectedRate = (rejectedCount / totalRequests) * 100;
const pendingRate = (pendingCount / totalRequests) * 100;

console.log("Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  Total requests: ${totalRequests}`);
console.log(`  Approved: ${approvedCount} (${approvedRate.toFixed(1)}%)`);
console.log(`  Rejected: ${rejectedCount} (${rejectedRate.toFixed(1)}%)`);
console.log(`  Pending: ${pendingCount} (${pendingRate.toFixed(1)}%)\n`);
console.log(`  Total days requested: ${totalDays}`);
