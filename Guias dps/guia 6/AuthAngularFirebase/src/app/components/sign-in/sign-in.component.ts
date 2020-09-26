import { Component, OnInit } from '@angular/core';
//importando sevicio AuthService
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //inyectando atributo a la clase para usar los servicios de autenticacion
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
