var Rombo = /** @class */ (function () {
    function Rombo(DiaVertical, DiaHorizontal) {
        this.DiagonalVertical = DiaVertical;
        this.DiagonalHorizontal = DiaHorizontal;
    }
    Rombo.prototype.calculo = function () {
        return this.DiagonalVertical * this.DiagonalHorizontal;
    };
    return Rombo;
}());
var calcular = new Rombo(5, 3);
console.log("El area del rombo es " + calcular.calculo());
