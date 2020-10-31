import React, { useState, useEffect } from 'react';
//dependencia para acceder a firestore
import {db} from "../Firebase";

//componente
const EmpleadosForm = (props) =>{
    //estructura para limpiar formulario
    const initialStateValues = {
        nombre:"",
        apellido:"",
        cargo:"",
    };
    //variable de estado
    const [values,setValues] = useState(initialStateValues);
    //metodo para poner datos de los input durante cada change
    const handleInputChange = (e) =>{
        //se toman los datos del input que active el onChange
        const {name, value} = e.target;
        //se accede a la var de estado y se agregar los valores del input
        setValues({...values,[name]:value});
    };
    //metodo para manejar el submit del formulario
    const handleSubmit = (e) =>{
        //se evita que se recargue la pagina durante el submit
        e.preventDefault();
        //se accede al metodo addOrEdit enviado como prop desde el otro componente
        props.addOrEditEmpleado(values);
        //se limpia el formulario
        setValues({...initialStateValues});
    };

    //metodo para acceder a un doc por id
    const getEmpleadoById = async (id) =>{
        //accediendo a la coleccion y buscando doc por id
        const doc = await db.collection("Empleados").doc(id).get();
        //se ponen los datos del doc en la variable de estado
        setValues({...doc.data()});
    };
    //ejecutar el siguiente codigo cada vez que se renderiza el componente
    useEffect(()=>{
        //si el currentId es vacio
        if(props.currentId === ""){
            //se limpia el formulario
            setValues({...initialStateValues});
        }else{
            //si no esta vacio
            if(props.currentId !== null && props.currentId !== undefined){
                //se obitnen los datos de un doc segun id
                getEmpleadoById(props.currentId);
            }
        }
    },[props.currentId]);
    //retornando vista
    return(
        <form onSubmit={handleSubmit} className="card card-body border-primary">
            <div className="form-group input-group">                
                <input type="text" className="form-control" placeholder="Ingrese nombre" value={values.nombre} name="nombre" onChange={handleInputChange}/>            
            </div>
            <div className="form-group input-group">                
                <input type="text" className="form-control" placeholder="Ingrese apellido" value={values.apellido} name="apellido" onChange={handleInputChange}/>            
            </div>
            <div className="form-group input-group">
                <input type="text" className="form-control" placeholder="Ingrese cargo" value={values.cargo} name="cargo" onChange={handleInputChange}/>            
            </div>
            <button className="btn btn-primary btn-block">
                {props.currentId === "" ? "Guardar":"Actualizar"}
            </button>
        </form>
    );
};

export default EmpleadosForm;