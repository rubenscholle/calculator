import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  input: string = "";
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  concatenate(character: string): void {
    this.input = this.input.concat(character);
  }


  calculate(input: string): number{
    
    let operand1: string;
    let operand2: string;
    let operator: string;
    let iOperator: number;
    let result = 0;

    let subString: string;
    
    let calculator = new Calculator();

    function getFirstNumber(input: string): string{
      let iOperator: number;
      
      if (input.search(/[\+\-\*\/]/) != -1) {
        iOperator = input.search(/[\+\-\*\/]/);
        return input.substring(0, iOperator)
      } else {
        return input
      }
    }

    function getLastNumber(input: string): string{
      let iOperator: number;
      
      while (input.search(/[\+\-\*\/]/) != -1) {
        iOperator = input.search(/[\+\-\*\/]/);
        input = input.substring((iOperator+1), input.length)
      } 
      return input
    }

    subString = input;

    operand1 = getFirstNumber(subString);
    iOperator = subString.search(/[\+\-\*\/]/);
    operator = subString[iOperator];
    subString = subString.substring(iOperator+1, subString.length);
    operand2 = getFirstNumber(subString);
    subString = subString.substring(operand2.length, subString.length);
    result = calculator.calculate(operator, Number(operand1), Number(operand2));

    while (subString.length > 1) {
      iOperator = subString.search(/[\+\-\*\/]/);
      operator = subString[iOperator];
      subString = subString.substring(iOperator+1, subString.length);
      operand2 = getFirstNumber(subString);
      result = calculator.calculate(operator, result, Number(operand2));
      subString = subString.substring(operand2.length, subString.length);
    }

    return result;
  }

}
