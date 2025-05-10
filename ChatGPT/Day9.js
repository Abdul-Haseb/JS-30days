const calculator = (num1, num2, operation) => {
  let total = 0;
  if (
    operation === "add" &&
    typeof num1 === "number" &&
    typeof (num2 === "number")
  ) {
    total = num1 + num2;
  }
  if (
    operation === "subtract" &&
    typeof num1 === "number" &&
    typeof (num2 === "number")
  ) {
    if (num2 > num1) {
      total = num2 - num1;
    } else {
      total = num1 - num2;
    }
  }
  if (
    operation === "multiply" &&
    typeof num1 === "number" &&
    typeof (num2 === "number")
  ) {
    total = num1 * num2;
  }
  return total;
};

console.log(calculator(2, 3, "add"));
console.log(calculator(2, 4, "subtract"));
console.log(calculator(2, 2, "multiply"));
