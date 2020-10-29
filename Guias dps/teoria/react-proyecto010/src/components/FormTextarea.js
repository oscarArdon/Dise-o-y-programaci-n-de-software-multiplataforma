import React, { Component } from 'react';

class FormTextarea extends Component {
    constructor(props) {
        super(props);
        //declarando prop del componente en objeto de estado
        this.state = {
            texto:'',
            texto2:''
        };
        //enlazando propiedad a metodo
        this.cambioTexto = this.cambioTexto.bind(this);
    }

    //retornando vista
    render() { 
        return (
            <div>
                <h1 className="display-4">Ejemplo 4</h1>
                <textarea className="form-control" value={this.state.texto} onChange={this.cambioTexto} cols="100" rows="5">                    
                </textarea>
                <p>Cantidad de caracteres ingresados: {this.state.texto.length}</p>
                <br/>
                <p>Copia de textarea original:</p>
                <textarea className="form-control" value={this.state.texto2} disabled="true" cols="100" rows="5">                    
                </textarea>
            </div>
        );
    }

    //metodo que se ejecuta en el onchange del textarea
    cambioTexto(e){
        this.setState({
            texto:e.target.value,
            texto2:e.target.value
        });
    }
}
 
export default FormTextarea;