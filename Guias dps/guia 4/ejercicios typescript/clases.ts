class Persona{
    nombre:string;
    edad:number;
    //el constructor es lo primero que se ejecuta al crear un objeto de la clase
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log("Nombre: "+this.nombre+" y edad: "+this.edad);
    }
}

let persona1:Persona;
persona1 = new Persona('Juan',45);
persona1.imprimir();