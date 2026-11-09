function add(a, b) {
  //a and b are parameters
  return a + b;
}

add(4, 5);

const addExpre = function (a, b) {
  return a + b;
};

addExpre(4, 3);

//arrow function
const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(4, 3));

const addArrow1 = (a, b) => a + b;

function getSalutation(name) {
  return `Hi, ${name}, How are you?`;
}

const getSalArrow = (name) => `Hi, ${name}, How are you?`;
console.log(getSalArrow("Bill"));

const helloArrow = () => "How are you doing";

const validatePolicyEmail = (email) => {
  console.log("Validating: " + email);

  if (email.includes("@") && email.includes(".")) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

console.log(validatePolicyEmail("ad@bfe.com"));
