import React, { Component } from 'react';

class FormSelect extends Component {
    constructor(props) {
        super(props);
        //declarando prop del componente en objeto de estado
        this.state = {
            dia:'Martes'
        };
        //enlazando propiedad a metodo
        this.cambioDia = this.cambioDia.bind(this);
    }

    //retornando vista
    render() { 
        return (
            <div>
                <h1 className="display-4">Ejemplo 5</h1>
                <select className="form-control" value={this.state.dia} onChange={this.cambioDia}>
                    <option>Lunes</option>
                    <option>Martes</option>
                    <option>Miercoles</option>
                    <option>Jueves</option>
                    <option>Viernes</option>
                    <option>Sabado</option>
                    <option>Domingo</option>
                </select>
                <p>Día seleccionado: {this.state.dia}</p>
            </div>
        );
    }

    //metodo que se ejecuta en el onchange del select
    cambioDia(e){
        this.setState({
            dia: e.target.value
        });
    }
}
 
export default FormSelect;