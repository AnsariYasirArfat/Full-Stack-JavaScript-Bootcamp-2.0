
const operand1 = parseFloat(prompt("Enter 1st operand:"));
const operand2 = parseFloat(prompt("Enter 2nd operand:"));
const operator = prompt("Enter an operator from these:-  +, -, *, /");

const calculator = (operand1, operand2, operator) => {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand2 === 0 ? "Cannot divide by 0" : operand1 / operand2;
      default:
        return "Invalid operator";
    }
  };
  
  
  console.log(calculator(operand1, operand2, operator));
  