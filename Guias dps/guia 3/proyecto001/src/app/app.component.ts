import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//en este caso la clase AppComponent representa los datos de un empleado
  title = 'proyecto001';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700,1600,1900];
  activo = true;
  sitio = 'http://www.google.com';

  esActivo():string{
    if(this.activo)
      return 'Trabajador activo';
    else
      return 'Trabajador inactivo';
  }

  ultimos3Sueldos(){
    let suma=0;
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }
    return suma;
  }

  //Capturador de eventos
  contador=1;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
  
}
