import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
import Articulos from './Articulos';

function App() {
  //recursos con archivos php
  const baseUrl="https://server-datos.000webhostapp.com/apiPhpEscuela/";
  //propiedad para todos los registros de la tabla
  const [data, setData]=useState([]);
  //prop de control para manejar ventanas modales, con estado inicial = false
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  //propiedad para poner datos de un nuevo alumno o alumno seleccionado para editar
  const [alumnoSeleccionado, setalumnoSeleccionado]=useState({
    id: '',
    nombre: '',
    apellido: '',
    edad: ''
  });
  //funcion para asignar datos de alumno a prop "alumnoSeleccionado" en cada evento onChange
  const handleChange=e=>{
    //asociando name y value del form durante onchange
    const {name, value}=e.target;
    //asignando valores ingresados en el form a prop alumnoSeleccionado
    setalumnoSeleccionado((prevState)=>({...prevState, [name]: value}))
    console.log(alumnoSeleccionado);
  }

  //funciones para controlar aparicion de ventanas modales
  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  //funcion para realizar peticion get
  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      //asignando registros de la bd a la prop data por medio del setData
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  //funcion para realizar insercion de registros
  const peticionPost=async()=>{
    //creacion de formulario "virtual"
    var f = new FormData();
    //añadiendo datos del alumno al formulario con datos del prop alumnoSeleccionado
    f.append("nombre", alumnoSeleccionado.nombre);
    f.append("apellido", alumnoSeleccionado.apellido);
    f.append("edad", alumnoSeleccionado.edad);
    //indicando el tipo de peticion http
    f.append("METHOD", "POST");
    //pasando como param el formulario
    await axios.post(baseUrl, f)
    .then(response=>{
      //la peticion post retorna el registro recien ingresado con su id y luego son concatenados
      //al resto de registros mostrados en la vista
      setData(data.concat(response.data));
      //cerrando modal
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  //funcion para editar registros
  const peticionPut=async()=>{
    //creacion de formulario "virtual"
    var f = new FormData();
    //añadiendo datos del alumno al formulario con datos del prop alumnoSeleccionado
    f.append("nombre", alumnoSeleccionado.nombre);
    f.append("apellido", alumnoSeleccionado.apellido);
    f.append("edad", alumnoSeleccionado.edad);
    //definiendo el tipo de metodo http
    f.append("METHOD", "PUT");
    //se pasa como parametro el formulario y el id del alumno seleccionado
    await axios.post(baseUrl, f, {params: {id: alumnoSeleccionado.id}})
    .then(response=>{
      //la funcion retorna los datos enviados cuando la consulta sql es ejecutada
      var dataNueva= data;
      //recorriendo datos con .map
      dataNueva.map(alumno=>{
        //comparando id de alumnos
        if(alumno.id===alumnoSeleccionado.id){
          //se asignan al objeto los nuevos datos correspondientes al registro
          alumno.nombre=alumnoSeleccionado.nombre;
          alumno.apellido=alumnoSeleccionado.apellido;
          alumno.edad=alumnoSeleccionado.edad;
        }
      });
      //se asigna a la prop data todos los registros con los nuevos cambios
      setData(dataNueva);
      //cerrando modal
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }
  //funcion para eliminar registros
  const peticionDelete=async()=>{
    //creando formulario "virtual"
    var f = new FormData();
    //indicando el tipo de metodo que ocupa el formulario
    f.append("METHOD", "DELETE");
    //se envia como param el form y el id del alumno seleccionado
    await axios.post(baseUrl, f, {params: {id: alumnoSeleccionado.id}})
    .then(response=>{
      //se hace un nuevo arreglo en el que se excluye el registro con el id especificado
      setData(data.filter(alumno=>alumno.id!==alumnoSeleccionado.id));
      //cerrando modal
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  //funcion para poner datos de alumnoSeleccionado
  const seleccionarAlumno=(alumno, caso)=>{
    //se ponen datos en la prop alumnoSeleccionado
    setalumnoSeleccionado(alumno);
    //si el parametro == editar entonces se abre modal editar, sino modal eliminar es abierta
    (caso==="Editar")?
    abrirCerrarModalEditar():
    abrirCerrarModalEliminar()
  }

  //cada vez que se renderiza el componente se hace el llamado a la funcion que trae
  //todos los registros de la BD
  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <div style={{textAlign: 'center'}}>
    <br />      
    <h1 className="display-4">CRUD Alumnos</h1>
    <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar</button>
    <br /><br />
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>apellido</th>
          <th>edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(alumno=>(
          <tr key={alumno.id}>
            <td>{alumno.id}</td>
            <td>{alumno.nombre}</td>
            <td>{alumno.apellido}</td>
            <td>{alumno.edad}</td>
          <td>
          <button className="btn btn-primary" onClick={()=>seleccionarAlumno(alumno, "Editar")}>Editar</button> {"  "}
          <button className="btn btn-danger" onClick={()=>seleccionarAlumno(alumno, "Eliminar")}>Eliminar</button>
          </td>
          </tr>
        ))}
      </tbody> 

    </table>


    <Modal isOpen={modalInsertar}>
      <ModalHeader>Insertar alumno</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange}/>
          <br />
          <label>apellido: </label>
          <br />
          <input type="text" className="form-control" name="apellido" onChange={handleChange}/>
          <br />
          <label>edad: </label>
          <br />
          <input type="text" className="form-control" name="edad" onChange={handleChange}/>
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
      </ModalFooter>
    </Modal>


    
    <Modal isOpen={modalEditar}>
      <ModalHeader>Editar alumno</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange} value={alumnoSeleccionado && alumnoSeleccionado.nombre}/>
          <br />
          <label>apellido: </label>
          <br />
          <input type="text" className="form-control" name="apellido" onChange={handleChange} value={alumnoSeleccionado && alumnoSeleccionado.apellido}/>
          <br />
          <label>edad: </label>
          <br />
          <input type="text" className="form-control" name="edad" onChange={handleChange} value={alumnoSeleccionado && alumnoSeleccionado.edad}/>
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionPut()}>Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Estás seguro que deseas eliminar el alumno {alumnoSeleccionado && alumnoSeleccionado.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
      <br/>
      <h1 className="display-4">CRUD Articulos</h1>
      <Articulos/>
    </div>
  );
}

export default App;
