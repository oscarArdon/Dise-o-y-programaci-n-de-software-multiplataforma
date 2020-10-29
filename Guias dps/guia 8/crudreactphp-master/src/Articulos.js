import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';

function Articulos() {
  //recursos con archivos php
  const baseUrl="https://server-datos.000webhostapp.com/apiPhpEscuela/articulos/";
  //propiedad para todos los registros de la tabla
  const [data, setData]=useState([]);
  //prop de control para manejar ventanas modales, con estado inicial = false
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  //propiedad para poner datos de un nuevo alumno o alumno seleccionado para editar
  const [articuloSeleccionado, setarticuloSeleccionado]=useState({
    codigo: '',
    nombre: '',
    existencias: ''
  });
  //funcion para asignar datos de alumno a prop "alumnoSeleccionado" en cada evento onChange
  const handleChange=e=>{
    //asociando name y value del form durante onchange
    const {name, value}=e.target;
    //asignando valores ingresados en el form a prop alumnoSeleccionado
    setarticuloSeleccionado((prevState)=>({...prevState, [name]: value}))
    console.log(articuloSeleccionado);
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
    f.append("nombre", articuloSeleccionado.nombre);
    f.append("existencias", articuloSeleccionado.existencias);    
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
    f.append("nombre", articuloSeleccionado.nombre);
    f.append("existencias", articuloSeleccionado.existencias);    
    //definiendo el tipo de metodo http
    f.append("METHOD", "PUT");
    //se pasa como parametro el formulario y el id del alumno seleccionado
    await axios.post(baseUrl, f, {params: {codigo: articuloSeleccionado.codigo}})
    .then(response=>{
      //la funcion retorna los datos enviados cuando la consulta sql es ejecutada
      var dataNueva= data;
      //recorriendo datos con .map
      dataNueva.map(articulo=>{
        //comparando id de alumnos
        if(articulo.codigo===articuloSeleccionado.codigo){
          //se asignan al objeto los nuevos datos correspondientes al registro
          articulo.nombre=articuloSeleccionado.nombre;
          articulo.existencias=articuloSeleccionado.existencias;          
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
    await axios.post(baseUrl, f, {params: {codigo: articuloSeleccionado.codigo}})
    .then(response=>{
      //se hace un nuevo arreglo en el que se excluye el registro con el id especificado
      setData(data.filter(articulo=>articulo.codigo!==articuloSeleccionado.codigo));
      //cerrando modal
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  //funcion para poner datos de alumnoSeleccionado
  const seleccionarArticulo=(articulo, caso)=>{
    //se ponen datos en la prop alumnoSeleccionado
    setarticuloSeleccionado(articulo);
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
    <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar</button>
    <br /><br />
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Existencias</th>          
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(articulo=>(
          <tr key={articulo.codigo}>
            <td>{articulo.codigo}</td>
            <td>{articulo.nombre}</td>
            <td>{articulo.existencias}</td>            
          <td>
          <button className="btn btn-primary" onClick={()=>seleccionarArticulo(articulo, "Editar")}>Editar</button> {"  "}
          <button className="btn btn-danger" onClick={()=>seleccionarArticulo(articulo, "Eliminar")}>Eliminar</button>
          </td>
          </tr>
        ))}
      </tbody> 

    </table>


    <Modal isOpen={modalInsertar}>
      <ModalHeader>Insertar articulo</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange}/>
          <br />
          <label>Existencias: </label>
          <br />
          <input type="text" className="form-control" name="existencias" onChange={handleChange}/>
          <br />          
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
      </ModalFooter>
    </Modal>


    
    <Modal isOpen={modalEditar}>
      <ModalHeader>Editar articulo</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input type="text" className="form-control" name="nombre" onChange={handleChange} value={articuloSeleccionado && articuloSeleccionado.nombre}/>
          <br />
          <label>apellido: </label>
          <br />
          <input type="text" className="form-control" name="existencias" onChange={handleChange} value={articuloSeleccionado && articuloSeleccionado.existencias}/>
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
        ¿Estás seguro que deseas eliminar el articulo {articuloSeleccionado && articuloSeleccionado.nombre}?
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

    </div>
  );
}

export default Articulos;
