import { Component, OnInit } from '@angular/core';
//importando modulo para formularios, controles y validators
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //atributos
  resultado:string;

  //creando obj FormGroup para formulario y FormControles para inputs
  //los controles tiene como primer parametro un valor vacio como valor inicial
  //y segundo parametro un array con las reglas de validacion
  formularioContacto = new FormGroup({
    nombre:new FormControl('',[Validators.required,Validators.minLength(10)]),
    mail: new FormControl('',[Validators.required, Validators.minLength(10)]),
    mensaje: new FormControl('',[Validators.required, Validators.maxLength(500)])
  });

  submit(){
    if(this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}
