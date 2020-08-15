class  Rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;

    constructor(DiaVertical:number,DiaHorizontal:number){
        this.DiagonalVertical= DiaVertical;
        this.DiagonalHorizontal=DiaHorizontal;
    }

    calculo(){
        return this.DiagonalVertical * this.DiagonalHorizontal;
    }

    
}
let calcular = new Rombo(5,3);
console.log("El area del rombo es " + calcular.calculo());
