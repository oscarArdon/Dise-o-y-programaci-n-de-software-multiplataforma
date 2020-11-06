import React, { useState } from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const signInWithEmailAndPasswordHandler = (event) => {

    event.preventDefault(); //DOM -> POST , GET -> PHP , JAVA , ASP , ETC

    console.log(" SignIn - signInWithEmailAndPasswordHandler ");
    const user = auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error, por favor revisar credenciales -> " + error);
      console.error("Error signing in with password and email ", error);
    });
    console.log(" SignIn - signInWithEmailAndPassword ");
    console.log(" const user :  " + user);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };


  return (
    
    <div className="">
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
        </ul>
      </nav>
      <div className="mt-8">
        <div className="border border-green-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form>
            {error !== null && (
              <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <div className="text-4xl ...">Iniciar sesión</div>
            <br></br>
            <div className="form-group">
              <label>Correo Electronico</label>
              <br></br>
              <input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                name="userEmail" autoComplete="off"
                placeholder="Ingresar email"
                onChange={(event) => onChangeHandler(event)} />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <br></br>
              <input type="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                name="userPassword"
                placeholder="Ingresar password"
                onChange={(event) => onChangeHandler(event)} />
            </div>
              <br></br>
            <button type="submit" className="shadow bg-green-500 hover:bg-green-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              onClick={(event) => { signInWithEmailAndPasswordHandler(event) }}
            ><i className="fa fa-lock"></i>  Ingresar</button>
            <p className="text-center my-3">
              {" "}
              <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                No tiene cuenta ?
          </Link>{" "}
              <br />{" "}

            </p>
          </form>
          <button className="shadow bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={() => { signInWithGoogle(); }}><i className="fab fa-google"></i>  Ingresar con Google
          </button>
        </div>
      </div>
    </div>

  );
};

export default SignIn;
