class Dado{
    private valor:number;
    //las propid. static pertenecer a la clase y no a las instancias creadas
    static tiradas:number=0;

    tirar(){
        this.generar();
    }

    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
        //para acceder a prop. estaticas
        //se pone el nombre de la clase y luego la propiedades
        Dado.tiradas++;
    }

    imprimir(){
        console.log("Salió el valor: "+this.valor);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

let dado2 = new Dado();
dado2.tirar();
dado2.imprimir();
//accediendo a prop estatica de la clase
console.log("Cantidad de tiradas de dados: "+Dado.tiradas);