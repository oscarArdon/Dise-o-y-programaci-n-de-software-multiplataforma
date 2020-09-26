import { Component, OnInit } from '@angular/core';
//Importando directivas para formularios
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  //Atributos de la clase
  conversion:string;
  potenciaNumero:number;
  cantidad:number;

  //creando obj FormGroup para el form de la vista y le pasamos al constructor
  //...un obj literal con la creacion de un obj formControl por cada componente visual de la vista
  //a cada obj de los input se le pasa un string vacio como valor inicial
  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.formularioConversion.value.base == "hexadecimal")
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);

    if(this.formularioConversion.value.base == "octal")
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);

    this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal),parseInt(this.formularioConversion.value.potencia));

    if(this.formularioConversion.value.largo)
      this.cantidad = this.formularioConversion.value.numerodecimal.length;
  }

}
