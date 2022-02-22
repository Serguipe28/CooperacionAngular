import { Component, OnInit } from '@angular/core';
import { DestinatariosService } from './service/destinatarios.service';
import { Destinatarios } from './interface/idestinatarios';

@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.component.html',
  styleUrls: ['./destinatarios.component.css'],
})
export class DestinatariosComponent implements OnInit {
  destinatarios: Destinatarios[] = [];

  constructor(private destinatariosService: DestinatariosService) {}

  ngOnInit(): void {
    this.destinatariosService
      .getAllDestinatarios()
      .subscribe((destinatarios) => (this.destinatarios = destinatarios));
  }
}
