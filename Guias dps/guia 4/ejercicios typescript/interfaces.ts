//las interfaces declaran metodos y propiedades que deben
//implementar una o mas clases
interface Punto{
    imprimir():void;
}

class PuntoPlano implements Punto{
    //definiendo atributos de la clase en el constructor
    constructor(private x:number, private y:number){}

    //implementando metodo de la interfaz
    imprimir(){
        console.log("Punto en el plano ("+this.x+","+this.y+")");
    }
}

class PuntoEspacio implements Punto{
    constructor(private x:number, private y:number, private z:number){}

    imprimir(){
        console.log("Punto en el plano ("+this.x+","+this.y+","+this.z+")");
    }
}

let puntoPlano1:PuntoPlano;
puntoPlano1 = new PuntoPlano(10,4);
puntoPlano1.imprimir();

let puntoEspacio1:PuntoEspacio;
puntoEspacio1 = new PuntoEspacio(20,50,60);
puntoEspacio1.imprimir();