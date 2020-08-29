import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//modulo para trabajar con formularios
import {FormsModule} from '@angular/forms';
import { TallerMecanicaComponent } from './taller-mecanica/taller-mecanica.component';

@NgModule({
  declarations: [
    AppComponent,
    TallerMecanicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
