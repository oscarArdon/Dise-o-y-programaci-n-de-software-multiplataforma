import { Component, OnInit } from '@angular/core';
// toastr
import { ToastrService } from 'ngx-toastr';
//importando servicio de autenticacion
import { AuthService } from '../services/auth.service';
import { ReparacionesService } from '../services/reparaciones.service';
//importando modelo de datos
import { Reparaciones } from '../models/reparaciones';

import { ActivatedRoute } from '@angular/router';
import { analytics } from 'firebase';
import { Router } from "@angular/router";
@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})

export class ReparacionesComponent implements OnInit {
  id: any; 
  
  //para almacenar todos los clientes
   reparaciones=null;
   rebaja:any;
 
   //para almacenar datos de un cliente, conectado directamente a controles del form
   reparacion =  { id:0,vehiculo:null,costo:null,cliente_id:null,descuento:null };
   select;
   contador:number=0;
  constructor(private toastr:ToastrService, public auth:AuthService,
    private reparacionesService:ReparacionesService,
    private activatedRoute: ActivatedRoute,
    public router: Router  ) { 

      this.id = this.activatedRoute.snapshot.params['id'];

    }
    

  ngOnInit(): void {
    this.seleccionarTodo();
  }

   //captura value del select en cada cambio
   onChange(event){
    this.select = event;
  }

  limpiar(){
    //limpiando variable que sirve para agregar/editar cliente
    this.reparacion = { id:0,vehiculo:null,costo:null,cliente_id:null,descuento:null };
  }

  

  insertar(){


    for (let i = 0; i < this.reparaciones.length; i++) {
      //comparando id para ver si ya existe
      if(this.id === this.reparaciones[i].cliente_id){
        this.contador++;

        
      }
    }

    //aplicando descuentos
    if (this.contador == 1 ){
      this.rebaja= this.reparacion.costo * 0.05;
    }else if (this.contador > 4){
     this.rebaja= this.reparacion.costo * 0.08;
    }else{
      this.rebaja=0;
    }
     
  this.reparacion.descuento=this.rebaja;

  this.reparacion.cliente_id=this.id;
  this.reparacionesService.insert(this.reparacion).subscribe((data)=>{
    //capturando respuesta recibida desde el backed
    if(data['resultado']=='OK'){
      this.toastr.success(data['mensaje']);

      this.limpiar();
    }else if(data['resultado']=='NO'){
      this.toastr.error( data['mensaje']);

      this.limpiar();
    }
  },(error)=>{
    this.toastr.error("Ha ocurrido un error!");
    console.log(error);
  });
  this.router.navigate(['list-reparaciones']);

}

seleccionarTodo(){
  //servicio para select * from clientes
  this.reparacionesService.select().subscribe((data)=>{
    //asignando el registros al arreglo 'clientes'
    this.reparaciones = data;
    //console.log(this.clientes);
  },(error)=>{
    this.toastr.error("Ha ocurrido un error!");
    console.log(error);
  });
}

  


}
