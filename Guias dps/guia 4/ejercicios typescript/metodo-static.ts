class Matematica{
    static mayor(v1:number, v2:number):number{
        if(v1>v2)
            return v1;
        else
            return v2;
    }

    static menor(v1:number, v2:number):number{
        if(v1<v2)
            return v1;
        else
            return v2;
    }

    static aleatorio(inicio:number, fin:number):number{
        return Math.floor((Math.random()*(fin+1-inicio))+inicio);
    }
}

let x1=Matematica.aleatorio(1,10);
let x2=Matematica.aleatorio(1,10);

//para acceder a metodos estaticos es de la misma
//manera que las propiedades estaticas, primero Clase.metodo
console.log("El mayor entre "+x1+" y "+x2+" es "+Matematica.mayor(x1,x2));
console.log("El menor entre "+x1+" y "+x2+" es "+Matematica.menor(x1,x2));