import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//importando modulo de formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  //Objeto para input del form
  actividad = new FormControl();

  lista:string[];
  
  constructor() { }

  //cuando se carga el componente
  ngOnInit(): void {
    this.lista=[];//vaciando la lista
    //se guarda en 'arreglo' el json del localStorage 'actividades'
    let arreglo = JSON.parse(localStorage.getItem("actividades"));
    if(arreglo != null){//si 'arreglo' no es null
      for(let actividad of arreglo){//se recorre 'arreglo'
        this.lista.push(actividad);//se guarda en lista los item de 'arreglo' que esten registrados previamente
      }
    }
  }

  agregar(){
    //se agrega la cadena del input al array lista
    this.lista.push(this.actividad.value);    
    //se guarda en localStorage 'actividades' el json del array 'lista'
    localStorage.setItem('actividades',JSON.stringify(this.lista));
    //se limpia el input del form
    this.actividad.setValue('');
  }

  borrar(pos:number){
    //se borra el item del array 'lista' indicado por el param pos
    this.lista.splice(pos,1);
    //se limpia el localStorage
    localStorage.clear();
    //y se vuelve a crear con los elementos restantes del array 'lista'
    localStorage.setItem('actividades',JSON.stringify(this.lista));
  }

  borrarTodas(){
    //se limpia completamente el localStorage
    localStorage.clear();
    //limpiando el array
    this.lista=[];
  }

}
