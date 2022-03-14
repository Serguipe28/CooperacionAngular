import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Destinatarios } from "../interface/idestinatarios";
import { DestinatariosService } from "../service/destinatarios.service";

@Component({
  selector: 'app-destinatarios-list',
  templateUrl: './destinatarios-list.component.html',
  styleUrls: ['./destinatarios-list.component.css'],
  providers: [DestinatariosService]
})
export class DestinatariosListComponent implements OnInit {

  destinatarios: Destinatarios[] = []
  destinatariosSelected:number = 1;


  @Output() 
  globalSelected: EventEmitter<Number> = new EventEmitter<Number>();

  constructor(private destinatariosService: DestinatariosService) { }

  ngOnInit(): void {
    this.destinatariosService.getAllDestinatarios().subscribe(destinatarios => (this.destinatarios = destinatarios));
  }

  onChange(){
    this.globalSelected.emit(this.destinatariosSelected);

  }

}
