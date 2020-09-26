import { Component, OnInit } from '@angular/core';
//importando modulo para formularios
import { FormGroup, FormControl } from '@angular/forms';
//importando clase de validacion
import { ValidacionesPropias } from '../validaciones-propias';

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formularioContacto = new FormGroup({
    //se pasa como parametro la funcion que validará el control "numero"
    numero: new FormControl('',[ValidacionesPropias.multiplo5])
  });

  submit(){
    alert('dato correcto');
  }

}
