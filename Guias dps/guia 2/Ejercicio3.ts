class  Empleado{
    Nombre:string;
    Salario:number;
    isss:number=0.03;
    afp:number=0.044;


    constructor(nombr:string,sald:number){
        this.Nombre= nombr;
        this.Salario=sald;
    }

    calculodeSalario(){
        this.isss=this.Salario*this.isss;
        this.afp=this.Salario*this.afp;
        return this.Salario - this.isss - this.afp;
    }

    
}
let prediccion = new Empleado("ronald",500);
console.log("El salario final de "+ prediccion.Nombre + " es " + prediccion.calculodeSalario());
