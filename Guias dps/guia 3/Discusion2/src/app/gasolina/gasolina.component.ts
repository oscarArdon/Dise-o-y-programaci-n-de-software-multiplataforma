import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.css']
})
export class GasolinaComponent implements OnInit {
  tipo;
  opcion:string;
  cantidad:number;
  total:number;


  constructor() { }

  ngOnInit() {
    this.tipo = ["Regular","Especial","Diesel"];
    this.opcion="Selecciona";
    this.cantidad=0;
    this.total=0;

  }

  calcular() {
    switch(this.opcion){
    case'Especial':
    this.total=this.cantidad * 4.25;
    break;
    case'Regular':
    this.total=this.cantidad * 4.05;
    break;
    case'Diesel':
   
    this.total=this.cantidad * 3.96;
    break;
    }
    }
   

}
