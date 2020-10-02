import { Component, OnInit } from '@angular/core';
// toastr
import { ToastrService } from 'ngx-toastr';
//importando servicio de autenticacion
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})

export class ReparacionesComponent implements OnInit {

  constructor(private toastr:ToastrService, public auth:AuthService) { }

  ngOnInit(): void {
  }

}
