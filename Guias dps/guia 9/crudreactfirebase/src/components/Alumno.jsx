import React, { useState, useEffect } from 'react';
import AlumnosForm from "./AlumnosForm";
//importando dependencia de firebase para acceder a firestore
import { db } from "../Firebase";
//importando toaster
import { toast } from "react-toastify";

//componente alumno
const Alumnos = () => {
    //variables de estado con su respectivo valor inicial
    const [Alumnos, setAlumnos] = useState([]);
    const [currentId, setCurrentId] = useState("");
    //metodo para traer todos los documentos de la coleccion
    const getAlumnos = async () => {
        //accediendo coleccion
        db.collection("Alumnos").onSnapshot((querySnapshot) => {
            const docs = [];
            //recorriendo documentos y almacenadolos en arreglo "docs"
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            //almacenando cambios en variable de estado
            setAlumnos(docs);
        });
    };
    
    //metodo para eliminar documento, recibe como parametro "id"
    const onDeleteAlumno = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar a este alumno?")) {
            //accediendo a la coleccion y eliminado el doc segun id
            await db.collection("Alumnos").doc(id).delete();
            toast("Se eliminó un alumno", {
                type: "error",
            });
        }
    };

    //se llama al metodo getAlumnos cada vez que se renderiza el componente
    useEffect(() => {
        getAlumnos();
    }, []);

    //metodo para editar documento recibiendo como parametro un json
    const addOrEditAlumno = async (AlumnoObject) => {
        try {
            //si la var de estado currentId es vacio            
            if (currentId === "") {
                //se agrega un nuevo doc a la coleccion
                await db.collection("Alumnos").doc().set(AlumnoObject);
                toast("Se agregó un alumno", {
                    type: "success",
                });
            } else {
                //si currentId no es vacio entonces se accede a un doc por "id" y se actualiza con...
                //el parametro que recibe la funcion
                await db.collection("Alumnos").doc(currentId).update(AlumnoObject);
                toast("Se actualizó un alumno", {
                    type: "info",
                });
                //se pone currentId como vacio para poder agregar nuevos documentos
                setCurrentId("");
            }
        } catch (error) {
            console.error(error);
        }
    };
    //tabla de registros
    return (
        <>
            <div className="col-md-4 p-2">
                <h2>Agregar Alumnos</h2>
                <AlumnosForm {...{ addOrEditAlumno, currentId, Alumnos }} />
            </div>
            <div className="col-md-8 p-2">
                <div className="container">
                    <h2>Lista Alumnos</h2>
                    <table className="table table-hover table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Alumnos.map((Alumno) => (
                                <tr key={Alumno.id}>
                                    <td>{Alumno.nombre}</td>
                                    <td>{Alumno.apellido}</td>
                                    <td>{Alumno.edad}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => setCurrentId(Alumno.id)}>Editar</button>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => onDeleteAlumno(Alumno.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Alumnos;