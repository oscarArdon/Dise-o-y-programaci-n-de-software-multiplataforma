class Dado{
    //a las clases tmb se les puede poner ambito de alcance
    private valor:number;

    public tirar(){
        this.generar();
    }
    
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    
    public imprimir(){
        console.log("Salió valor "+this.valor);
    }
}

//dado1 solo tiene acceso a los modificadores public
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();