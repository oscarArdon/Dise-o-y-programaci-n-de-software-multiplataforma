import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { RegistroComponent } from './registro/registro.component';
import { ClienteComponent } from './cliente/cliente.component';

//********modulo para trabajar con formularios
import {FormsModule} from '@angular/forms';
import { Discusion1Component } from './discusion1/discusion1.component';


@NgModule({
  declarations: [
    AppComponent,
    ComboBoxComponent,
    RegistroComponent,
    ClienteComponent,
    Discusion1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
