import { Component, OnInit } from '@angular/core';
//importando servicios para autenticacion
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  //inyectando servicios en la clase
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
