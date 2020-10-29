import React, { Component } from 'react';

class Articulos extends Component {

    constructor(props) {
        super(props);
        //objeto de estado para declarar propiedades del componente
        this.state = {
            //arreglo de articulos
            articulos:[{
                codigo:1,
                descripcion:'papas',
                precio:12.52
            },{
                codigo:2,
                descripcion:'naranjas',
                precio:21
            },{
                codigo:3,
                descripcion:'peras',
                precio:18.20
            }]
        }
        //enlace al metodo para cuando se presione el boton
        this.borrar = this.borrar.bind(this);
    }

    render() { 
        //retornando vista
        return (
            <div className="mt-5">
                <h1 className="display-4">Ejemplo 1</h1>                
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Código</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.articulos.map(elemento =>{
                            //añadiendo prop key al elemento tr
                            return(
                                <tr key={elemento.codigo}>
                                    <td>{elemento.codigo}</td>
                                    <td>{elemento.descripcion}</td>
                                    <td>{elemento.precio}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.borrar(elemento.codigo)}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        })}                       
                    </tbody>
                </table>
            </div>
        );
    }
    //metodo para filtrar todos los articulos que sean distintos del codigo recibido
    borrar(cod){
        var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
        this.setState({
            articulos:temp
        });
    }
}
 
export default Articulos;