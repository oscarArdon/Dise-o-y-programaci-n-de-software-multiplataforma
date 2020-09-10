//las clases abstractas no pueden ser instanciadas
abstract class Operacion{
    public valor1:number;
    public valor2:number;
    public resultado:number=0;

    constructor(v1:number,v2:number){
        this.valor1=v1;
        this.valor2=v2;
    }
    //este metodo obliga a todas las clases hijas a implementar dicho metodo
    abstract operar():void;

    imprimir(){
        console.log("Resultado: "+this.resultado);
    }
}

class Suma extends Operacion{
    constructor(v1:number,v2:number){
        //pasando param a constructor class Operacion
        super(v1,v2);
    }
    //utilizando metodo abstracto declarado en clase padre
    operar(){
        this.resultado=this.valor1+this.valor2;
    }
}

class Resta extends Operacion{
    constructor(v1:number,v2:number){
        //pasando param a constructor class Operacion
        super(v1,v2);
    }
    //utilizando metodo abstracto declarado en clase padre
    operar(){
        this.resultado=this.valor1-this.valor2;
    }
}

let suma1:Suma;
suma1 = new Suma(10,4);
suma1.operar();
suma1.imprimir();

let resta1:Resta;
resta1 = new Resta(10,4);
resta1.operar();
resta1.imprimir();