var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + " y edad: " + this.edad);
    };
    return Persona;
}());
var persona1;
persona1 = new Persona('Juan', 45);
persona1.imprimir();
