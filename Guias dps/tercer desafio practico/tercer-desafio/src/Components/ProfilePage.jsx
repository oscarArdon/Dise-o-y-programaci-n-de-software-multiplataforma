import React, { useContext,useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import axios from 'axios';
import { Router, Link } from "@reach/router";

import Info from "./Home/Info"
import Contacto from "./Home/Contacto"
import Help from "./Home/Help"
import User from "./Home/User"
import {useForm} from 'react-hook-form'

const ProfilePage = () => {
  //recursos con archivos php
  const baseUrl="https://server-datos.000webhostapp.com/apiPhpDesafio3/";
  //propiedad para todos los registros de la tabla
  const [data, setData]=useState([]);
  const {register, handleSubmit, errors} = useForm();
  //propiedad para poner datos de una nueva ganancia o ganancia seleccionada para editar
  const [gananciaSeleccionada, setgananciaSeleccionada]=useState({
    id: '',
    nombre: '',
    monto: '',
    empleados: ''
  });
  function onSubmit(data){
    console.log("data:"+data);
  }
  //funcion para asignar datos de alumno a prop "gananciaSeleccionada" en cada evento onChange
  const handleChange=e=>{
    //asociando name y value del form durante onchange
    const {name, value}=e.target;
    //asignando valores ingresados en el form a prop alumnoSeleccionado
    setgananciaSeleccionada((prevState)=>({...prevState, [name]: value}))
    console.log(gananciaSeleccionada);
  }
  const handleChangeSelect=e=>{
    //asociando name y value del form durante onchange
    //alert(e.target.value);
    gananciaSeleccionada.nombre = e.target.value;
  }

  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();
  };

  //funcion para realizar insercion de registros
  const peticionPost=async()=>{
    //creacion de formulario "virtual"
    var f = new FormData();
    //añadiendo datos del alumno al formulario con datos del prop alumnoSeleccionado
    f.append("nombre", gananciaSeleccionada.nombre);
    f.append("monto", gananciaSeleccionada.monto);
    f.append("empleados", gananciaSeleccionada.empleados);
    //indicando el tipo de peticion http
    f.append("METHOD", "POST");
    //pasando como param el formulario
    await axios.post(baseUrl, f)
    .then(response=>{
      //la peticion post retorna el registro recien ingresado con su id y luego son concatenados
      //al resto de registros mostrados en la vista
      setData(data.concat(response.data)); 
    }).catch(error=>{
      console.log(error);
    })
  }

  return (

    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <span class="font-semibold text-xl tracking-tight">Control de Tienda</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
      </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
      </a>
            <a class="font-semibold text-l tracking-tight text-teal-200 hover:text-white mr-4">
              User : {displayName}
            </a>
            <a class="font-semibold text-l tracking-tight text-teal-200 hover:text-white">
              {email}
            </a>
          </div>
          <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0" onClick={() => { signOut() }}>
              Cerrar Sesión</button>
          </div>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-lg-6 mx-auto">
            <div class="card">
              <div class="card-body">
              <h1 class="display-5">Ganancias</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-group">
                    <label for="nombres">Nombre de la empresa</label>
                    <select ref={register} class="form-control" onChange={handleChangeSelect}>
                      <option value="sucursalA">Sucursal A</option>
                      <option value="sucursalB">Sucursal B</option>
                      <option value="sucursalC">Sucursal C</option>
                    </select>                                      
                  </div>
                  
                  <div class="form-group">
                    <label for="apellidos">Monto de ganancia</label>
                    <input ref={register({required:true, pattern:/[1,9]\d{3,}\.\d{2}$/i})} style={{...StyleSheet.input, borderColor:errors.monto && "red"}} type="number" autoComplete="off" name="monto" class="form-control" onChange={handleChange} placeholder="$00.00">
                    </input>
                    {errors.monto && <span className="text-danger">Campo requerido, ingresar ganancias mayores a $1000.00</span>}
                  </div>
                  <div class="form-group">
                    <label for="dui">Empleados</label>
                    <input ref={register({required:true,pattern:/\b[1-9]\d+\b/i})} style={{...StyleSheet.input, borderColor:errors.empleados && "red"}} type="number" autoComplete="off" name="empleados" class="form-control" onChange={handleChange} min="0" >
                    </input>
                    {errors.empleados && <span className="text-danger">Campo requerido, la cantidad de empleados debe ser mayor a 10</span>}
                  </div>
                  <button type="submit" id="agregar" class="btn btn-success" onClick={()=>peticionPost()}>Agregar</button>             
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ProfilePage;

