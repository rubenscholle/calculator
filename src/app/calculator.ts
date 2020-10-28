export class Calculator {
  calculate(
      operator: string,
      operand1: number,
      operand2: number
      ): number {

    function add(
        operand1: number,
        operand2: number
        ): number {
      return operand1 + operand2;
    }

    function subtract(
        operand1: number,
        operand2: number
        ): number {
      return operand1 - operand2;
    }

    function multiply(
        operand1: number,
        operand2: number
        ): number {
      return operand1 * operand2;
    }

    function divide(
        operand1: number,
        operand2: number
        ): number {
      return operand1 / operand2;
    }

    let result: number;

    switch (operator) {
      case '+':
        result = add(operand1, operand2);
        break;
      case '-':
        result = subtract(operand1, operand2); 
        break;
      case '*':
        result = multiply(operand1, operand2);
        break;
      case '/':
        result = divide(operand1, operand2);  
        break;
    } 
    
    return result;
  } 
}