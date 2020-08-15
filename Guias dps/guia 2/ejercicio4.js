var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
        this.operaciones();
    }
    Calculadora.prototype.operaciones = function () {
        var suma = this.numero1 + this.numero2;
        var resta = this.numero1 - this.numero2;
        var multiplicacion = this.numero1 * this.numero2;
        var division;
        console.log("/-------------------------------------------------------/");
        console.log("Suma: " + this.numero1 + " + " + this.numero2 + " = " + suma);
        console.log("Suma: " + this.numero1 + " - " + this.numero2 + " = " + resta);
        console.log("Suma: " + this.numero1 + " * " + this.numero2 + " = " + multiplicacion);
        if (this.numero2 != 0) {
            division = this.numero1 / this.numero2;
            console.log("Suma: " + this.numero1 + " / " + this.numero2 + " = " + division);
        }
        else {
            console.log("Error, numero dividido entre cero!");
        }
    };
    return Calculadora;
}());
var calculadora1 = new Calculadora(10, 5);
var calculadora2 = new Calculadora(8, 10);
var calculadora3 = new Calculadora(2, 0);
