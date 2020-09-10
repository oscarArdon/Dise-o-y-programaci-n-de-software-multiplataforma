class Articulo{
    readonly codigo:number;
    descripcion:string;
    precio:number;

    constructor(codigo:number,descripcion:string,precio:number){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;    
    }

    imprimir(){
        console.log("Codigo: "+this.codigo+", Descripcion: "+this.descripcion+", Precio: "+this.precio);
    }
}
//una propiedad con el modificador readonly
//no puede ser modificado una vez sea cargado en el constructor
let articulo1:Articulo;
articulo1 = new Articulo(1,'papas',12.5);
articulo1.imprimir();