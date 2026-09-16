import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.component.css',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {

  result: number | string = 0;

  add(firstNumber: string, secondNumber: string): void {
    this.result = Number(firstNumber) + Number(secondNumber);
  }

  subtract(firstNumber: string, secondNumber: string): void {
    this.result = Number(firstNumber) - Number(secondNumber);
  }

  multiply(firstNumber: string, secondNumber: string): void {
    this.result = Number(firstNumber) * Number(secondNumber);
  }

  divide(firstNumber: string, secondNumber: string): void {
    if (Number(secondNumber) === 0) {
      this.result = 'undefined';
    } else {
      this.result = Number(firstNumber) / Number(secondNumber);
    }
  }
}