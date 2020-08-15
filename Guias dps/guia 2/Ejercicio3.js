var Empleado = /** @class */ (function () {
    function Empleado(nombr, sald) {
        this.isss = 0.03;
        this.afp = 0.044;
        this.Nombre = nombr;
        this.Salario = sald;
    }
    Empleado.prototype.calculodeSalario = function () {
        this.isss = this.Salario * this.isss;
        this.afp = this.Salario * this.afp;
        return this.Salario - this.isss - this.afp;
    };
    return Empleado;
}());
var prediccion = new Empleado("ronald", 500);
console.log("El salario final de " + prediccion.Nombre + " es " + prediccion.calculodeSalario());
