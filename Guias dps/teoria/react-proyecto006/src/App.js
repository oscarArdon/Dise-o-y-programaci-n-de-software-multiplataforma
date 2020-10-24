import React,{Component} from 'react';
import './App.css';
//importando componente dado
import Dado from './Dado';
//importar componente ListadoResultado
import ListadoResultados from './ListadoResultado';

class App extends Component{
  
  constructor(props){
    super(props);
    //almacenamos en la propiedades los valores de los datos
    this.state = {
      valor1:this.generarValor(),
      valor2:this.generarValor(),
      valor3:this.generarValor(),
      //ejercicio sumas
      //vector vacio
      resultados:[]
    }
    //se enlaza el metodo tirar() cuando se presiona el boton
    this.tirar = this.tirar.bind(this);
    //se enlaza el metodo sumar() cuando se presiona el boton
    this.sumar = this.sumar.bind(this);
  }

  render(){   
    //retornando al componente dado los valores obtenidos
    return(
      <div>
        <h1>Dados</h1>
        <Dado valor={this.state.valor1}/>
        <Dado valor={this.state.valor2}/>
        <Dado valor={this.state.valor3}/>
        <button onClick={this.tirar}>Tirar</button>
        <br/>
        <hr/>
        <h1>Sumas</h1>
        <div>
          <form onSubmit={this.sumar}>
            <p>Ingrese primer valor: <input type="text" name="valor1"/></p>
            <p>Ingrese segundo valor: <input type="text" name="valor2"/></p>
            <input type="submit" value="Sumar"/>
          </form>
          <ListadoResultados resultados={this.state.resultados}/>
        </div>
      </div>
    );
  }

  sumar(){
    event.preventDefault();
    const v1= parseInt(event.target.valor1.value,10);
    const v2= parseInt(event.target.valor2.value,10);
    const suma = v1+v2;
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }

    const vec = this.state.resultados;
    vec.unshift(nuevo);
    this.setState({
      resultados: vec
    });
  }

  tirar(){
    //asignando valores de los dados a las propiedades de estado
    this.setState({
      valor1:this.generarValor(),
      valor2:this.generarValor(),
      valor3:this.generarValor()
    });    
  }

  generarValor(){
    //creando valores para los dados    
    return Math.trunc(Math.random()*6)+1;
  }
}

export default App;
