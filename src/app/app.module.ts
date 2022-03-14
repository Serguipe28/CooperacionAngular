import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DestinatariosComponent } from './destinatarios/destinatarios.component';
import { PaisesComponent } from './paises/paises.component';
import { ODSComponent } from './ods/ods.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { ODSListComponent } from './ods/ods-list/ods-list.component';
import { DestinatariosListComponent } from './destinatarios/destinatarios-list/destinatarios-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    DestinatariosComponent,
    PaisesComponent,
    ODSComponent,
    FiltradoComponent,
    ODSListComponent,
    DestinatariosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
