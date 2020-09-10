var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, sueldo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Sueldo: " + this.sueldo);
    };
    Empleado.prototype.pagaImpuestos = function () {
        if (this.sueldo > 5000) {
            console.log(this.nombre + " debe pagar impuestos");
        }
        else {
            console.log(this.nombre + " no debe pagar impuestos");
        }
    };
    return Empleado;
}(Persona));
//obj solo de clase Persona
var persona1 = new Persona('Juan', 44);
persona1.imprimir();
//obje de clase hija Empleado
var empleado1 = new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
