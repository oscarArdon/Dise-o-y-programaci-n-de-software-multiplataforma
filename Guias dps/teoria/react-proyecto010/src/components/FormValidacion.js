import React, { Component } from 'react';

class FormValidacion extends Component {
    constructor(props) {
        super(props);
        //declarando propiedades del componente en objeto de estado
        this.state = {
            numero:''
        };
        //enlazando propiedad a metodo cuando exista cambio en el control del form
        this.cambioNumero = this.cambioNumero.bind(this);
    }

    //retornando vista
    render() { 
        return (
            <div>
                <h1 className="display-4">Ejemplo 3</h1>
                <div className="form-group">
                  <label>Ingrese un número binario:</label>
                  <input type="text" className="form-control" value={this.state.numero} onChange={this.cambioNumero}/>                  
                </div>
            </div>
        );
    }

    //metodo que se ejecuta en el onchage del input
    cambioNumero(e){
        const entrada = e.target.value;
        let cant = 0;
        //se recorre el numero ingresado
        for(let x=0; x<entrada.length; x++){
            if(entrada[x]==='0' || entrada[x]==='1'){
                cant++;//se aumenta el cont si es 0 o 1
            }
            //si contador y la entrada son iguales reemplaza el value del input por el valor actual
            //y de esa forma se evita el ingreso de numero distintos de 0 o 1
            if(cant===entrada.length){
                this.setState({
                    numero:entrada
                });
            }
        }
    }
}
 
export default FormValidacion;