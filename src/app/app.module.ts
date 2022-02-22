import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DestinatariosComponent } from './destinatarios/destinatarios.component';
import { PaisesComponent } from './paises/paises.component';
import { ODSComponent } from './ods/ods.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    DestinatariosComponent,
    PaisesComponent,
    ODSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
