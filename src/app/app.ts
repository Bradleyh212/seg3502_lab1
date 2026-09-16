import { Component } from '@angular/core';
import { TempConverter } from './temp-converter/temp-converter';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [TempConverter, CalculatorComponent]
})
export class App {
  title = 'lab1-temp-converter';
}
