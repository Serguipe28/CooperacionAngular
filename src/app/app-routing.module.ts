import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DestinatariosComponent } from './destinatarios/destinatarios.component';
import { ODSComponent } from './ods/ods.component';
import { PaisesComponent } from './paises/paises.component';
import { FiltradoComponent } from './filtrado/filtrado.component';

const routes: Routes = [
  { path: 'Proyectos', component: ProyectosComponent },
  { path: 'Destinatarios', component: DestinatariosComponent },
  { path: 'ODS', component: ODSComponent },
  { path: 'Paises', component: PaisesComponent },
  { path: 'Filtrado', component: FiltradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
