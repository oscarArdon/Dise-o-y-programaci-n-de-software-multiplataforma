import React from 'react';
import './App.css';
//Importando componentes
import Articulos from './components/Articulos';
import FormEstado from './components/FomEstado';
import FormSelect from './components/FormSelect';
import FormTextarea from './components/FormTextarea';
import FormValidacion from './components/FormValidacion';
import AppF from './components/AppF';

function App() {
  return (
    <div className="container mb-5">
      <Articulos/>
      <br/>
      <hr/>
      <br/>
      <FormEstado/>
      <br/>
      <hr/>
      <br/>
      <FormValidacion/>
      <br/>
      <hr/>
      <br/>
      <FormTextarea/>
      <br/>
      <hr/>
      <br/>
      <FormSelect/>
      <br/>
      <hr/>
      <br/>
      <AppF/>
    </div>
  );
}

export default App;
