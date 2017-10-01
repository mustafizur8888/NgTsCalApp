module App {

    class Calculator {
        firstNumber: number;
        secondNumber: number;

        doOperation(opertionType: string): number {

            switch (opertionType) {
                case "sum":
                    return Number(this.firstNumber) + Number(this.secondNumber);
                case "sub":
                    return Number(this.firstNumber - this.secondNumber);
                case "mul":
                    return Number(this.firstNumber * this.secondNumber);
                default:
                    return Number(this.firstNumber / this.secondNumber);

            }
        }
    }

    class CalController {

        calculator: Calculator;
        result: number;
        errormsg: string[];
        constructor() {
            this.calculator = new Calculator();

        }


        getResult(type: string) {
            this.errormsg = [];
            this.result = 0;

            if (this.validation(type)) {
                this.result = this.calculator.doOperation(type);

            }
        }

        validation(type: string): boolean {

            if (!this.calculator.firstNumber) {
                this.errormsg.push("First number is empty");
            }
            if (!this.calculator.secondNumber) {

                this.errormsg.push("Second number is empty");
            }
            if (this.calculator.firstNumber && isNaN(this.calculator.firstNumber)) {

                this.errormsg.push("First number textbox text is not a valid number");
            }
            if (this.calculator.secondNumber && isNaN(this.calculator.secondNumber)) {

                this.errormsg.push("Second number textbox text is not a valid number");
            }
            if (!this.calculator.secondNumber && this.calculator.firstNumber && this.calculator.secondNumber == 0 && this.calculator.firstNumber == 0 && type === "div") {
                this.errormsg.push("First,Second both number cannot be zero for division operation");
            }
            if (this.calculator.firstNumber != 0 && this.calculator.secondNumber == 0 && type === "div") {
                this.errormsg.push("Second number cannot be zero or empty for division operation");
            }
            console.log(this.errormsg);
            if (this.errormsg.length !== 0) {
                return false;
            } else {
                return true;
            }
        }


        app = angular.module("app", []);
    }

    var app = angular.module("app", []);
    app.controller("CalController", CalController);
}