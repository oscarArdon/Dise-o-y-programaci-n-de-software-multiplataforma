var Dado = /** @class */ (function () {
    function Dado() {
    }
    Dado.prototype.tirar = function () {
        this.generar();
    };
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
        //para acceder a prop. estaticas
        //se pone el nombre de la clase y luego la propiedades
        Dado.tiradas++;
    };
    Dado.prototype.imprimir = function () {
        console.log("Salió el valor: " + this.valor);
    };
    //las propid. static pertenecer a la clase y no a las instancias creadas
    Dado.tiradas = 0;
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
var dado2 = new Dado();
dado2.tirar();
dado2.imprimir();
//accediendo a prop estatica de la clase
console.log("Cantidad de tiradas de dados: " + Dado.tiradas);
