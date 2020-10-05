import { Component, OnInit } from '@angular/core';
// toastr
import { ToastrService } from 'ngx-toastr';
//importando servicio de autenticacion
import { AuthService } from '../services/auth.service';
import { ReparacionesService } from '../services/reparaciones.service';
@Component({
  selector: 'app-list-reparaciones',
  templateUrl: './list-reparaciones.component.html',
  styleUrls: ['./list-reparaciones.component.css']
})
export class ListReparacionesComponent implements OnInit {
  reparaciones=null;
  select;
  reparacion =  {id:0,vehiculo:null,costo:null,cliente_id:null,descuento:null, nombres:null, apellidos:null,dui:null };
  constructor(private toastr:ToastrService, public auth:AuthService,
    private reparacionesService:ReparacionesService) { }

    ngOnInit(): void {
      //actualizando lista de clientes al cargar componente
      this.seleccionarTodo();
 
      
    }

     //captura value del select en cada cambio
  onChange(event){
    this.select = event;
  }

  //captura una tecla al dejar de presionarla
  onKey(event:any){
    //array para almacenar registros coincidentes
    var arr = [];
    var cont:number=0;
    //alert(event.target.value);    
    //for para recorrer array con todos los registros de la tabla
    for (let index = 0; index < this.reparaciones.length; index++) {
  
      if(this.select == 'nombre'){//busqueda por nombre...
        //si se encuentra una coincidencia de busqueda se almacena en el nuevo arreglo
        if(this.reparaciones[index].nombres.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.reparaciones[index]);
        } 
      }else if(this.select == 'apellido'){//busqueda por apellido...
        if(this.reparaciones[index].apellidos.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.reparaciones[index]);
        }
      }else if(this.select == 'dui'){//busqueda por dui...
        if(this.reparaciones[index].dui.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.reparaciones[index]);
        }
      }        
    }

    //se asignan registros que coinciden con la busqueda
    this.reparaciones = arr;
    //si se deja vacia la caja de busqueda se reestablecen los registros en la tabla
    if(event.target.value == '')
      this.seleccionarTodo();
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

    eliminar(id){
      if(confirm("¿Estas seguro de eliminar esta reparación?")){
        //eliminado cliente por medio del servicio del backend
        this.reparacionesService.delete(id).subscribe((data)=>{
          //capturando respuestas del backend
          if(data['resultado']=='OK'){
            this.toastr.success(data['mensaje']);
            this.seleccionarTodo();        
          }else if(data['resultado']=='NO'){
            this.toastr.error(data['mensaje']);
            this.seleccionarTodo();
          }
        },(error)=>{
          this.toastr.error("Ha ocurrido un error!");
          console.log(error);
        });
      }
    }
    cadena:any;
    cadena1:any;
    monto:any;
    monto1:any;
    seleccionarticket(id){
      //seleccionando cliente a editar...
      this.reparacionesService.getreparacionid(id).subscribe((data)=>{
        //asignando cliente a los controles del formulario
        this.reparacion = data[0];
        this.monto1=this.reparacion.costo - this.reparacion.descuento;
        this.cadena1="TICKET \n" + "\n" + "Cliente : " + this.reparacion.nombres+ " , " + this.reparacion.apellidos + "\n" + "Numero de DUI: " + this.reparacion.dui + "\n" + "Costo de reparacion: $" + this.reparacion.costo + "\n" + "Descuento: -$" + this.reparacion.descuento + "\n" + "Monto total a pagar: $" + this.monto1 + "\n" + "\n"+ "GRACIAS POR SU VISITA";  
        alert(this.cadena1);

        console.log(data);
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      });

  
      

    }

    generartxt(id){
        this.reparacionesService.getreparacionid(id).subscribe((data)=>{
        //asignando cliente a los controles del formulario
        this.reparacion = data[0];
        this.monto=this.reparacion.costo - this.reparacion.descuento;
        this.cadena="TICKET \n" + "\n" + "Cliente : " + this.reparacion.nombres+ " , " + this.reparacion.apellidos + "\n" + "Numero de DUI: " + this.reparacion.dui + "\n" + "Automovil: "+ this.reparacion.vehiculo + "\n" + "Costo de reparacion: $" + this.reparacion.costo + "\n" + "Descuento: -$" + this.reparacion.descuento + "\n" + "Monto total a pagar: $" + this.monto + "\n" + "\n"+ "GRACIAS POR SU VISITA";  
        
        let link = document.createElement('a');
        link.download = 'ticket -'+ this.reparacion.dui + '.txt';
        
        let blob = new Blob([this.cadena], {type: 'text/plain'});
        
        link.href = URL.createObjectURL(blob);
        
        link.click();
        
        URL.revokeObjectURL(link.href);

        console.log(data);
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      });



    }

    


  

}
