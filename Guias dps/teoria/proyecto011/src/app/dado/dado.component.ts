import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  //atributo valor usado en juegodados.component.html
  //es usado como parametro de la componente padre
  @Input() valor:number;

  constructor() { }

  ngOnInit(): void {
  }

}
