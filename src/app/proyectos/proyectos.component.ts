import { Component, OnInit } from '@angular/core';
import { Proyectos } from './interface/iproyectos';
import { ProyectosService } from './service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    this.proyectosService
      .getAllProyectos()
      .subscribe((proyectos) => (this.proyectos = proyectos));
  }
}
