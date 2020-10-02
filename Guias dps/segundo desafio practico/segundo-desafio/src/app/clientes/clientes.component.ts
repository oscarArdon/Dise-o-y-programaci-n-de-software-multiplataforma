import { Component, OnInit } from '@angular/core';
// toastr
import { ToastrService } from 'ngx-toastr';
//importando servicio de autenticacion
import { AuthService } from '../services/auth.service';
//importando servicio de backend
import { ClientesService } from '../services/clientes.service';
//importando modelo de datos
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //para almacenar todos los clientes
  clientes=null;
  //para almacenar datos de un cliente, conectado directamente a controles del form
  cliente =  { id:0,nombres:null,apellidos:null,dui:null };
  select;
  constructor(
    private toastr: ToastrService, 
    public auth:AuthService,
    private clientesService:ClientesService) { }
  
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
    //alert(event.target.value);    
    //for para recorrer array con todos los registros de la tabla
    for (let index = 0; index < this.clientes.length; index++) {
      if(this.select == 'nombre'){//busqueda por nombre...
        //si se encuentra una coincidencia de busqueda se almacena en el nuevo arreglo
        if(this.clientes[index].nombres.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.clientes[index]);
        } 
      }else if(this.select == 'apellido'){//busqueda por apellido...
        if(this.clientes[index].apellidos.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.clientes[index]);
        }
      }else if(this.select == 'dui'){//busqueda por dui...
        if(this.clientes[index].dui.indexOf(event.target.value) > -1){
          //alert(this.clientes[index].nombres);     
          arr.push(this.clientes[index]);
        }
      }        
    }
    //se asignan registros que coinciden con la busqueda
    this.clientes = arr;
    //si se deja vacia la caja de busqueda se reestablecen los registros en la tabla
    if(event.target.value == '')
      this.seleccionarTodo();
  }

  limpiar(){
    //limpiando variable que sirve para agregar/editar cliente
    this.cliente = { id:0,nombres:null,apellidos:null,dui:null };
  }

  seleccionarTodo(){
    //servicio para select * from clientes
    this.clientesService.select().subscribe((data)=>{
      //asignando el registros al arreglo 'clientes'
      this.clientes = data;
      //console.log(this.clientes);
    },(error)=>{
      this.toastr.error("Ha ocurrido un error!");
      console.log(error);
    });
  }

  //bandera para validar que dui sea unico
  repetido:boolean = false;
  insertar(){
    //recorriendo arreglo 'clientes'
    for (let i = 0; i < this.clientes.length; i++) {
      //comparando dui para ver si ya existe
      if(this.cliente.dui === this.clientes[i].dui){
        this.repetido = true;
        break;
      }else{
        this.repetido = false;
      }
    }
    //si el dui no esta repetido...
    if(this.repetido == false){    
      //insertando nuevo cliente por medio del servicio  
      this.clientesService.insert(this.cliente).subscribe((data)=>{
        //capturando respuesta recibida desde el backed
        if(data['resultado']=='OK'){
          this.toastr.success(data['mensaje']);
          this.seleccionarTodo();
          this.limpiar();
        }else if(data['resultado']=='NO'){
          this.toastr.error(data['mensaje']);
          this.seleccionarTodo();
          this.limpiar();
        }
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      });
    }else{
      this.toastr.error("El DUI que desea ingresar ya existe!");
    }  
  }

  eliminar(id){
    if(confirm("¿Estas seguro de eliminar a este cliente?, todas las reparaciones"+
    " asociadas a él tambien serán eliminadas")){
      //eliminado cliente por medio del servicio del backend
      this.clientesService.delete(id).subscribe((data)=>{
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

  seleccionarCliente(id){
    //seleccionando cliente a editar...
    this.clientesService.getCliente(id).subscribe((data)=>{
      //asignando cliente a los controles del formulario
      this.cliente = data[0];
    },(error)=>{
      this.toastr.error("Ha ocurrido un error!");
      console.log(error);
    });
  }

  modificar(){
    //recorriendo arreglo 'clientes' para verificar que no se cambie numero de dui a uno existente
    for (let i = 0; i < this.clientes.length; i++) {
      //se verifica que no se ingrese dui de otro cliente ingresado en la bd
      if((this.cliente.dui === this.clientes[i].dui) && (this.cliente.id !== this.clientes[i].id)){
        this.repetido = true;
        break;
      }else{
        this.repetido = false;
      }
    }
    //si el dui no esta duplicado...
    if(this.repetido == false){     
      //actualizando cliente por medio del servicio backend 
      this.clientesService.update(this.cliente).subscribe((data)=>{
        //capturando respuestas del backend
        if(data['resultado']=='OK'){
          this.toastr.success(data['mensaje']);
          this.seleccionarTodo();
          this.limpiar();
        }else if(data['resultado']=='NO'){
          this.toastr.error(data['mensaje']);
          console.log(JSON.stringify(data['mensaje']));
          this.seleccionarTodo();
          this.limpiar();
        }
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      });
    }else{
      this.toastr.error("El DUI que desea ingresar ya existe!");
    }
  }

}
