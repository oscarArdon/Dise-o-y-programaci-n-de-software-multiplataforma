import { Component, OnInit } from '@angular/core';
//importando servicios
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  //inyectando atributo para utilizar los servicios de AuthService
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
