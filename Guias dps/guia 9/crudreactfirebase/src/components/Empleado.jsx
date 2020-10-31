import React, { useState, useEffect } from 'react';
import AlumnosForm from "./EmpleadosForm";
//importando dependencia de firebase para acceder a firestore
import { db } from "../Firebase";
//importando toaster
import { toast } from "react-toastify";

//componente Empleados
const Empleados = () => {
    //variables de estado con su respectivo valor inicial
    const [Empleados, setEmpleados] = useState([]);
    const [currentId, setCurrentId] = useState("");
    //metodo para traer todos los documentos de la coleccion
    const getEmpleados = async () => {
        //accediendo coleccion
        db.collection("Empleados").onSnapshot((querySnapshot) => {
            const docs = [];
            //recorriendo documentos y almacenadolos en arreglo "docs"
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            //almacenando cambios en variable de estado
            setEmpleados(docs);
        });
    };
    
    //metodo para eliminar documento, recibe como parametro "id"
    const onDeleteEmpleado = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar a este empleado?")) {
            //accediendo a la coleccion y eliminado el doc segun id
            await db.collection("Empleados").doc(id).delete();
            toast("Se eliminó un empleado", {
                type: "error",
            });
        }
    };

    //se llama al metodo getAlumnos cada vez que se renderiza el componente
    useEffect(() => {
        getEmpleados();
    }, []);

    //metodo para editar documento recibiendo como parametro un json
    const addOrEditEmpleado = async (EmpleadoObject) => {
        try {
            //si la var de estado currentId es vacio            
            if (currentId === "") {
                //se agrega un nuevo doc a la coleccion
                await db.collection("Empleados").doc().set(EmpleadoObject);
                toast("Se agregó un empleado", {
                    type: "success",
                });
            } else {
                //si currentId no es vacio entonces se accede a un doc por "id" y se actualiza con...
                //el parametro que recibe la funcion
                await db.collection("Empleados").doc(currentId).update(EmpleadoObject);
                toast("Se actualizó un empleado", {
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
                <h2>Agregar Empleados</h2>
                <AlumnosForm {...{ addOrEditEmpleado, currentId, Empleados }} />
            </div>
            <div className="col-md-8 p-2">
                <div className="container">
                    <h2>Lista Empleados</h2>
                    <table className="table table-hover table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Empleados.map((Empleado) => (
                                <tr key={Empleado.id}>
                                    <td>{Empleado.nombre}</td>
                                    <td>{Empleado.apellido}</td>
                                    <td>{Empleado.cargo}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => setCurrentId(Empleado.id)}>Editar</button>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => onDeleteEmpleado(Empleado.id)}>Eliminar</button>
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

export default Empleados;