import { Component, OnInit } from '@angular/core';
//importando modulos
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-taller-mecanica',
  templateUrl: './taller-mecanica.component.html',
  styleUrls: ['./taller-mecanica.component.css']
})
export class TallerMecanicaComponent implements OnInit {

  nuevoCliente = true;
  conta:number=0;
  contador:number = 0;
  registro = [];//array para almacenar clientes
  cliente:any;//objeto para almacenar datos de cliente
  nombre:string;
  dui:string;
  registroReparacion = [];//array para almacenar reparaciones
  reparacion:any;
  vehiculo:string;
  costo:number;
  result: any;

  clienteId:number;//propiedad para registrar reparaciones bajo id de cliente

  constructor() { }

  ngOnInit(): void {
    this.nombre='';

    this.dui='';
    this.vehiculo='';
    this.costo=null;
    this.nuevoCliente = true;//reset a form para agregar nuevos clientes
  }  
  agregar(){
    
    let error=false;
    //verificando que dui no este registrado
    for (let i = 0; i < this.registro.length; i++) {
      if((this.dui == this.registro[i].dui) && this.nuevoCliente){
        alert("Error: El dui que desea ingresar ya existe!");
        error = true;
        break;
      }else{
        error = false;
      }      
    }
    //registrando cliente y su primera reparacion
    if(this.nuevoCliente==true && error==false){      
      this.contador++;
      this.conta = 0;
      this.reparacion = {"clave":this.contador,"vehiculo":this.vehiculo,"costo":this.costo};
      this.cliente = {"id":this.contador,"nombre":this.nombre,"dui":this.dui,"registro":this.registroReparacion.push(this.reparacion)};
      this.registro.push(this.cliente);
      this.ngOnInit();
    }
    //registrando reparacion de un cliente en especifico
    if(!this.nuevoCliente && error==false){
      this.conta++;
      this.reparacion = {"clave":this.clienteId,"vehiculo":this.vehiculo,"costo":this.costo,"idrepa":this.conta};
      this.registroReparacion.push(this.reparacion);
      this.ngOnInit();
      

    }


    
  }

  //reset a form para poder registrar solo reparaciones
  resetForm(cliente:any):void{
    this.nuevoCliente = false;
    this.nombre = cliente.nombre;
    this.dui = cliente.dui;   
    this.clienteId = cliente.id; 
  }

  reparacionCliente = [];
  verReparaciones(cliente:any):void{
    this.reparacionCliente = []
    for (let j = 0; j < this.registroReparacion.length; j++) {
      if(this.registroReparacion[j].clave == cliente.id){
        this.reparacionCliente.push(this.registroReparacion[j]);
      }
      
    }
  }

 monto = [];
  ticket(cliente: any):void{
    var total:number;

    for (let x = 0 ; x< this.registroReparacion.length; x++){
      if (this.registroReparacion[x].idrepa == 2) {
        total =  this.registroReparacion[x].costo - (this.registroReparacion[x].costo * 0.05);
       this.result={"descon":total};
       this.monto.push(this.result);
      }else if(this.registroReparacion[x] != 2) {
        this.monto.push(0);

      }
    }
 
  }
    
  }


