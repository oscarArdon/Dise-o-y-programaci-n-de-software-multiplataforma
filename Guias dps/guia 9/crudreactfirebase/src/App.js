import logo from './logo.svg';
import './App.css';
import Alumno from "./components/Alumno";
import Empleado from "./components/Empleado";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootswatch/dist/cosmo/bootstrap.css";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Alumno />
      </div>
      <br/>
      <hr/>
      <br/>
      <div className="row">
        <Empleado />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
