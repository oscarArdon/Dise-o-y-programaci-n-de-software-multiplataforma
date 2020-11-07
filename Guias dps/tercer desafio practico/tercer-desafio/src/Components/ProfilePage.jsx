import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import { Router, Link } from "@reach/router";

import Info from "./Home/Info"
import Contacto from "./Home/Contacto"
import Help from "./Home/Help"
import User from "./Home/User"

const ProfilePage = () => {

  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();
  };

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
                <form >
                  <div class="form-group">
                    <label for="nombres">Nombre de la empresa</label>
                    <input type="text" autoComplete="off" required pattern="^[a-zA-Z\s]*$" name="nombres" class="form-control" placeholder="Nombre">
                    </input>
                  </div>

                  <div class="form-group">
                    <label for="apellidos">Monto de ganancia</label>
                    <input type="text" autoComplete="off" required pattern="^[a-zA-Z\s]*$" name="apellidos" class="form-control" placeholder="$00.00">
                    </input>
                  </div>
                  <div class="form-group">
                    <label for="dui">Empleados</label>
                    <input type="number" autoComplete="off" required pattern="^\d{8}-\d{1}$" name="dui" class="form-control" min="0" >
                    </input>
                  </div>
                  <button type="button" class="btn btn-success  ">Agregar</button>
             
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

