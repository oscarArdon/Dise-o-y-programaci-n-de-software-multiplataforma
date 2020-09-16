import { Injectable } from '@angular/core';
//firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//modelo
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //traer datos de firebase
  alumnoList:AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo Alumno
  selectedAlumno:Alumno = new Alumno();

  //inyectando atributo a la clase
  constructor(private firebase:AngularFireDatabase) { }

  // Traer todos los productos desde firebase 
  getAlumnos(){
    return this.alumnoList = this.firebase.list('alumno');
  }

  //creando un nuevo alumno recibiendo param de tipo Alumno
  insertAlumno(alumno:Alumno){
    this.alumnoList.push({
      name:alumno.name,
      lastname:alumno.lastname,
      age:alumno.age
    });
  }

  //actualizando alumno recibiendo un param de tipo Alumno
  updateAlumno(alumno:Alumno){
    this.alumnoList.update(alumno.$key,{
      name:alumno.name,
      lastname:alumno.lastname,
      age:alumno.age
    });
  }
  
  //eliminando alumno de la bd
  deleteAlumno($key:string){
    this.alumnoList.remove($key);
  }
}
