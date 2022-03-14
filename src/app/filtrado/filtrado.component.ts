import { Component, OnInit } from '@angular/core';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ProyectosService } from '../proyectos/service/proyectos.service';
import { Proyectos } from '../proyectos/interface/iproyectos';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css'],
  providers: [ProyectosService],
})
export class FiltradoComponent implements OnInit {
  ODSSelected:Number = 2;
  DestinatarioSelected: Number = 2;
  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService) {}

  //Carga todos los elementos en el vector
  ngOnInit(): void {
    this.proyectosService
      .getAllProyectos()
      .subscribe((proyectos) => (this.proyectos = proyectos));
  }
  //Cambia el ods del delplegable
  ODSchange(selected: Number): void {
    this.ODSSelected = selected;
  }

  DestinatarioChange(selected: Number):void{
    this.DestinatarioSelected = selected;
  }
}
