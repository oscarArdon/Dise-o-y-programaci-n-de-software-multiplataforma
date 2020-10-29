//Importando componente de React
import React from 'react';
//Importando componente Form
import Form from './components/Form'
import './App.css';

//componente principal
const App = () =>{
  //retornando vista del componente
  return (
    <div className="App">
      <div className="App-content">
        <p>Aquí haremos nuestro TO-DO list</p>       
        <Form/>
      </div>
    </div>
  );
}
//directiva para utilizar componente
export default App;
