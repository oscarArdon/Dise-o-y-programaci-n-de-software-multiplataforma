import { Component } from '@angular/core';
//importando clase Alumno
import { Alumno } from "./models/alumno";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  valid;
  //arreglo de tipo Alumno, que tiene tres registros almacenados
  alumnoArray:Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos", age:35, direccion:"Soyapango", telefono: "2222-4444", correo: "alex.campos@gmail.com"},
    {id:2, name:"Maria", lastname:"Lopez", age:20, direccion:"San Salvador", telefono: "2223-4445", correo: "maria.lopez@gmail.com"},
    {id:3, name:"Juan", lastname:"Castro", age:25, direccion:"San Miguel", telefono: "2224-4446", correo: "juan.castro@gmail.com"}
  ]
  
  //atributo de tipo Alumno para almacenar datos de alumno seleccionado
  //si el id esta en 0 siginifica que se pueden agregar nuevos datos
  //si no vale 0 sigifica que se va a editar un alumno
  selectedAlumno:Alumno= {id:0, name:'', lastname:'', age:0, direccion:'', telefono:'', correo:''};
  reset(){
    this.selectedAlumno = {id:0, name:'', lastname:'', age:0, direccion:'', telefono:'', correo:''};
  }
  

  //metodo que recibe como parametro el objeto alumno a editar
  openForEdit(alumno:Alumno):void{
    //se asigna al atributo selectedAlumno el obj alumno a editar
    this.selectedAlumno = alumno;
  }

  addOrEdit():void{
    if(this.selectedAlumno.id === 0){//insertando alumno
      this.selectedAlumno.id = this.alumnoArray.length+1;//creando id alumno
      this.alumnoArray.push(this.selectedAlumno);
    }
    //la edicion se realiza de una vez debido al binding del ngmodel en el form
    //por lo tanto solo se limpian los controles del form
    //reset a atributo selectedAlumno para limpiar pantalla
    this.reset();
  }

  delete():void{
    if(confirm('¿Esta seguro de eliminar el registro?')){
      //para eliminar el registro se realiza un filter al arreglo para no almacenar el alumno seleccionado
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      //limpiando el registro seleccionado
      this.reset();
    }
  }
}
