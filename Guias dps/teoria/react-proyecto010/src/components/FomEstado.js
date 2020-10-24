import React, { Component } from 'react';

class FormEstado extends Component {
    constructor(props) {
        super(props);
        //declarando propiedades en el obj de estado del componente
        this.state = ({
            //propiedades asociadas a los componentes de la vista
            nombre: '',
            edad: '',
            estudio: false
        })
        //enlazando propiedadades a los metodos cuando hayan cambios en el form
        this.procesar = this.procesar.bind(this);
        this.cambioNombre = this.cambioNombre.bind(this);
        this.cambioEdad = this.cambioEdad.bind(this);
        this.cambioEstudio = this.cambioEstudio.bind(this);
    }

    //retornando vista
    render() {
        return (
            <div>
                <h1 className="display-4">Ejemplo 2</h1>
                <br />
                <div className="row">
                    <div className="col col-lg-5 mx-auto">
                        <form onSubmit={this.procesar}>
                            <div className="form-group">
                                <label>Ingrese nombre:</label>
                                <input type="text" className="form-control" value={this.state.nombre} onChange={this.cambioNombre} />
                            </div>
                            <div className="form-group">
                                <label>Ingrese edad:</label>
                                <input type="number" className="form-control" value={this.state.edad} onChange={this.cambioEdad} />
                            </div>
                            <div className="form-group">
                                <label>Estudios:</label>
                                <input type="checkbox" className="ml-3" value={this.state.estudio} onChange={this.cambioEstudio} />
                            </div>
                            <button className="btn btn-block btn-info" type="submit">Ingresar</button>                           
                        </form>
                    </div>
                    <div className="col col-lg-5 mx-auto">
                        <div class="card">
                            <div className="card-header">
                                <h3>Datos ingresados</h3>
                            </div>
                            <div class="card-body">
                                <p>Nombre: {this.state.nombre}</p>
                                <p>Edad: {this.state.edad}</p>
                                <p>Estudios: {this.state.estudio ? 'Con estudios' : 'Sin estudios'}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    //durante el evento submit se muestra en alert los datos ingresados
    procesar(e) {
        e.preventDefault();
        alert('Dato cargado: ' + this.state.nombre + ',' + this.state.edad + ',' + this.state.estudio);
    }
    //durante evento onChange se modifican las prop. del estado
    cambioNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    //durante evento onChange se modifican las prop. del estado
    cambioEdad(e) {
        this.setState({
            edad: e.target.value
        })
    }
    //durante evento onChange se modifican las prop. del estado
    cambioEstudio(e) {
        this.setState({
            //false
            estudio: !this.state.estudio
        })
    }
}

export default FormEstado;