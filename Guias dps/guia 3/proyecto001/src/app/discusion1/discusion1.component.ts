import { Component, OnInit } from '@angular/core';
//importando modulos
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-discusion1',
  templateUrl: './discusion1.component.html',
  styleUrls: ['./discusion1.component.css']
})
export class Discusion1Component implements OnInit {
  //declarando propiedades
  ingresados = true;
  enviado = false;//prop para manipular boton de envio
  cantidad=null;//cant de empleados
  contador=0;
  msg:string;

  registro=[];//array
  empleado:any;//json para almacenar calculo de empleado
  nombre:string;
  sBase:number;//salario base
  isss:number;
  renta:number;
  afp:number;
  sFinal:number;//salario final

  constructor(){
  }

  ngOnInit(): void {
    this.nombre='';
    this.sBase=null;
  }

  onSubmit(){
    this.enviado = true;
    this.ingresados = false;   
    this.registro = []; 
    this.msg="Agregar ("+this.contador+"/"+this.cantidad+")";
  }

  agregar(){
    this.contador++;    
    this.msg="Agregar ("+this.contador+"/"+this.cantidad+")";
    //calculo de los descuentos
    this.isss=this.sBase*0.073;
    this.renta=this.sBase*0.11;
    this.afp=this.sBase*0.051;
    //salario final
    this.sFinal = this.sBase-(this.isss+this.renta+this.afp);
    //llenando empleado
    this.empleado = {'nombre':this.nombre,'sBase':this.sBase,'isss':this.isss,'renta':this.renta,'afp':this.afp,'sFinal':this.sFinal};
    this.registro.push(this.empleado);
    
    //reiniciando variables
    this.ngOnInit();
  }

  fin(){
    this.ingresados=true;
    this.enviado = false;
    this.contador = 0;
    this.cantidad = 0;
  }

}
