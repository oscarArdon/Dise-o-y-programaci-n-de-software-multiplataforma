class Persona{
    //los atrib se heredan a la clase hija
    //al igual que los metodos
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log("Nombre: "+this.nombre);
        console.log("Edad: "+this.edad);
    }
}

//clasa empleado se extiende de clase persona
//es decir hereda la clase persona
class Empleado extends Persona{
    private sueldo:number;
    constructor(nombre:string, edad:number,sueldo:number){
        super(nombre,edad);//enviando parametro a clase padre
        this.sueldo = sueldo;
    }

    imprimir(){
        super.imprimir();
        console.log("Sueldo: "+this.sueldo);
    }

    pagaImpuestos(){
        if(this.sueldo>5000){
            console.log(this.nombre+" debe pagar impuestos");
        }else{
            console.log(this.nombre+" no debe pagar impuestos");
        }
    }
}

//obj solo de clase Persona
const persona1 = new Persona('Juan',44);
persona1.imprimir();
//obje de clase hija Empleado
const empleado1 = new Empleado('Ana',22,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();