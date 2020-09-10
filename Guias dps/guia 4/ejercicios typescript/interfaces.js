var PuntoPlano = /** @class */ (function () {
    //definiendo atributos de la clase en el constructor
    function PuntoPlano(x, y) {
        this.x = x;
        this.y = y;
    }
    //implementando metodo de la interfaz
    PuntoPlano.prototype.imprimir = function () {
        console.log("Punto en el plano (" + this.x + "," + this.y + ")");
    };
    return PuntoPlano;
}());
var PuntoEspacio = /** @class */ (function () {
    function PuntoEspacio(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PuntoEspacio.prototype.imprimir = function () {
        console.log("Punto en el plano (" + this.x + "," + this.y + "," + this.z + ")");
    };
    return PuntoEspacio;
}());
var puntoPlano1;
puntoPlano1 = new PuntoPlano(10, 4);
puntoPlano1.imprimir();
var puntoEspacio1;
puntoEspacio1 = new PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();
