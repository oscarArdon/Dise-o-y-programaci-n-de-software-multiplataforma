var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.mayor = function (v1, v2) {
        if (v1 > v2)
            return v1;
        else
            return v2;
    };
    Matematica.menor = function (v1, v2) {
        if (v1 < v2)
            return v1;
        else
            return v2;
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
var x1 = Matematica.aleatorio(1, 10);
var x2 = Matematica.aleatorio(1, 10);
//para acceder a metodos estaticos es de la misma
//manera que las propiedades estaticas, primero Clase.metodo
console.log("El mayor entre " + x1 + " y " + x2 + " es " + Matematica.mayor(x1, x2));
console.log("El menor entre " + x1 + " y " + x2 + " es " + Matematica.menor(x1, x2));
