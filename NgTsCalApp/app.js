var App;
(function (App) {
    var Calculator = (function () {
        function Calculator() {
        }
        Calculator.prototype.doOperation = function (opertionType) {
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
        };
        return Calculator;
    }());
    var CalController = (function () {
        function CalController() {
            this.app = angular.module("app", []);
            this.calculator = new Calculator();
        }
        CalController.prototype.getResult = function (type) {
            this.errormsg = [];
            this.result = 0;
            if (this.validation(type)) {
                this.result = this.calculator.doOperation(type);
            }
        };
        CalController.prototype.validation = function (type) {
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
            }
            else {
                return true;
            }
        };
        return CalController;
    }());
    var app = angular.module("app", []);
    app.controller("CalController", CalController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map