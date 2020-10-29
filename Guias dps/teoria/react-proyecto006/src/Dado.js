import React,{Component} from 'react';
//hoja de estilos para la vista
import './Dado.css'

class Dado extends Component{
    render(){
        //retornando vista y recibiendo el valor enviado desde el App.js
        return (
            <div className="Dado-recuadro">{this.props.valor}</div>
        );
    }
}

export default Dado;