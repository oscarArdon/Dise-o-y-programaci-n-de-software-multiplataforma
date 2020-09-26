import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

//service
import {AlumnoService} from '../../../services/alumno.service';
//modelo
import{Alumno} from '../../../models/alumno';
//toastr
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {

  //inyectando atrib al momento de iniciar el componente
  constructor(
    public alumnoService:AlumnoService,
    public toastr:ToastrService
  ) { }
  
  // Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit(){
    this.alumnoService.getAlumnos();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(alumnoForm:NgForm){
    if (alumnoForm.value.$key == null){
      this.alumnoService.insertAlumno(alumnoForm.value);
      this.resetForm(alumnoForm);
      this.toastr.success('Operacion exitosa','Alumno registrado');
    }else{
      this.alumnoService.updateAlumno(alumnoForm.value);
      this.resetForm(alumnoForm);
      this.toastr.success('Operacion exitosa','Alumno modificado');
    }
  }

  //Para limpiar form
  resetForm(alumnoForm?:NgForm){
    if(alumnoForm != null)
      alumnoForm.reset();
    this.alumnoService.selectedAlumno = new Alumno();
  }

}
