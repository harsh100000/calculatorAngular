import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
    projectTitle: string = "Calculator";
    displayValue: string = "";

    onButtonClick(value: string) {
        if (this.displayValue == "INVALID INPUT") {
            this.displayValue = "";
            this.displayValue = this.displayValue + value;
        }
        else {
            this.displayValue = this.displayValue + value;
        }
    }
    onButtonClickClr() {
        this.displayValue = "";
    }

    onButtonClickAns() {
        let result: string = "";
        try {
            result = eval(this.displayValue);
            this.displayValue = result;
        } catch (error) {
            this.displayValue = "INVALID INPUT";
        }

    }
}
