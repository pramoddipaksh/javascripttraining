greet();
function greet() {
  console.log("Hello From HR Payroll Team!!");
}

function greetUser(name) {
  console.log(`Hello ${name}, How are you?`);
}

greetUser("Mark");

greetUser("Steve");
greetUser();

function getFullName(firstName, lastName, dob) {
  let fullName = `${firstName} ${lastName}`;
  console.log(`Hello ${fullName}, How are you?`);
  return fullName;
}

let fullName = getFullName("Steve", "Jobs", "02-Nov-1999");
console.log(fullName);

console.log(getFullName("Bill", "Gates"));

function add(a, b) {
  //a and b are parameters
  return a + b;
}

let finalResult = add(3, 5) + add(6, 7);
console.log(finalResult);
console.log(add(3, 4));

function generateEmployeeEmail(firstName, lastName) {
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplecorp.com`;
  return email;
}

function generateEmployeeId(firstName, lastName) {
  return firstName.toLowerCase() + lastName.toLowerCase();
}

function generateEmployee(firstName, lastName) {
  return {
    name: firstName + " " + lastName,
    email: generateEmployeeEmail(firstName, lastName),
    employeeId: generateEmployeeId(firstName, lastName),
    tempPassword: "Onboard@123",
    department: "Unassigned",
    isActive: true,
  };
}

let emp1 = generateEmployee("Bill", "Gates");
console.log(emp1);

function createEmpRecord(name, age = 25, city = "New York") {
  return [name, city, age];
}

console.log(createEmpRecord("Bill", 21, "Pune"));
console.log(createEmpRecord("Bill", 21));
console.log(createEmpRecord("Bill"));
console.log(createEmpRecord());

function validateNewHireNested(employeeId, department, age) {
  if (employeeId !== "") {
    if (department.length >= 3) {
      if (age >= 18) {
        return "Valid new hire";
      } else {
        return "Must be 18+";
      }
    } else {
      return "Department name too short";
    }
  } else {
    return "Employee ID required";
  }
}

//early return - guard
function validateNewHireNestedUsingEarlyReturn(employeeId, department, age) {
  if (employeeId === "") {
    //guard
    return "Employee ID required";
  }
  if (department.length < 3) {
    //guard
    return "Department name too short";
  }
  if (age < 18) {
    //guard
    return "Must be 18+";
  }
  return "Valid new hire"; //happy path
}
console.log(
  "EmpId is blank - ",
  validateNewHireNestedUsingEarlyReturn("", "ABCD", 34),
);
console.log(
  "Departmet is 2 chars - ",
  validateNewHireNestedUsingEarlyReturn("40394", "AX", 34),
);

console.log(
  "Age is less than 18 - ",
  validateNewHireNestedUsingEarlyReturn("49395", "ABCD", 17),
);
