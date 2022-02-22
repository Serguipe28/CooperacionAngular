import { Component, OnInit } from '@angular/core';
import { Paises } from "./interface/ipaises";
import { PaisesService } from "./service/paises.service";

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Paises[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.getAllPaises().subscribe(paises => (this.paises = paises));
  }

}
