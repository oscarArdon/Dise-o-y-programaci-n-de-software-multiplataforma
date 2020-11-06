import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import para rutas
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
/*BrowserRouter: inyecta prop al componente para acceder al historial de navegacion
  Route: componente utilizado para crear rutas a otros componentes
  Link: utilizado para los enlaces, como las etiquetas 'a' en html */

//importando componentes
import Home from './components/Home';
import Contacto from './components/Contacto';
import Info from './components/Info';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
        <nav class="navbar navbar-dark">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Inicio</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/contacto">Contactos</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
  );
}

export default App;
