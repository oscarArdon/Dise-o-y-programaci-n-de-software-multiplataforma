import { Component, OnInit } from '@angular/core';
//importando modulo para formularios reactivos
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //atributos
  resultado:string;
  //creando obj de la clase formgroup para modelar el formulario ppal
  //y luego obj formControl para los controles de la vista
  formAlumno = new FormGroup({
    dni:new FormControl(''),
    nombre: new FormControl(''),
    notas:new FormGroup({ //formGroup anidado
      nota1: new FormControl(''),
      nota2:new FormControl(''),
      nota3:new FormControl('')
    })
  });

  submit(){
    let nota1 = parseInt(this.formAlumno.value.notas.nota1);
    let nota2 = parseInt(this.formAlumno.value.notas.nota2);
    let nota3 = parseInt(this.formAlumno.value.notas.nota3);
    if(nota1>=4 && nota2>=4 && nota3>=4)
      this.resultado = "El alumno queda aprobado por esas notas";
    else
      this.resultado = "El alumno queda reprobado por esas notas";
  }
}
