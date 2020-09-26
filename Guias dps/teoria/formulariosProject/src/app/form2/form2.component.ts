import { Component, OnInit } from '@angular/core';
//importando modulo de formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
//importando modulo para formularios
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})

export class Form2Component implements OnInit {

  //atributos de clase
  datos:string;

  constructor() { }

  ngOnInit(): void {
  }

  //creando obj FormGroup para el form de la vista y le pasamos al constructor
  //...un obj literal con la creacion de un obj formControl por cada componente visual de la vista
  //a cada obj de los input se le pasa un string vacio como valor inicial
  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit(){
    this.datos = `Nombre=${this.formularioContacto.value.nombre}, 
                  Mail=${this.formularioContacto.value.mail}, 
                  Mensaje=${this.formularioContacto.value.mensaje}.
                `;
  }

}
