var Articulo = /** @class */ (function () {
    function Articulo(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Articulo.prototype.imprimir = function () {
        console.log("Codigo: " + this.codigo + ", Descripcion: " + this.descripcion + ", Precio: " + this.precio);
    };
    return Articulo;
}());
//una propiedad con el modificador readonly
//no puede ser modificado una vez sea cargado en el constructor
var articulo1;
articulo1 = new Articulo(1, 'papas', 12.5);
articulo1.imprimir();
