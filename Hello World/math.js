// Helper function to log activities (Internal use only)
const logAction = (name, result) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] Operation: ${name} | Result: ${result}`);
};

function add(a, b) {
  const res = a + b;
  logAction('Add', res);
  return res;
}

function subtract(a, b) {
  const res = a - b;
  logAction('Subtract', res);
  return res;
}

function multiply(a, b) {
  const res = a * b;
  logAction('Multiply', res);
  return res;
}

function divide(a, b) {
  if (b === 0) {
    console.error("Attempted to divide by zero!");
    throw new Error("Division by zero is not allowed");
  }
  const res = a / b;
  logAction('Divide', res);
  return res;
}

function sum(...nums) {
  const res = nums.reduce((acc, curr) => acc + curr, 0);
  logAction('Sum Total', res);
  return res;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sum,
};