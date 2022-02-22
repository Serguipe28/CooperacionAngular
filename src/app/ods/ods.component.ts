import { Component, OnInit } from '@angular/core';
import { ODS } from "./interface/iods";
import { ODSService } from "./service/ods.service";

@Component({
  selector: 'app-ods',
  templateUrl: './ods.component.html',
  styleUrls: ['./ods.component.css']
})
export class ODSComponent implements OnInit {

  ods: ODS[] = [];

  constructor(private odsService: ODSService) { }

  ngOnInit(): void {
    this.odsService.getAllODS().subscribe(ods =>(this.ods = ods));
  }

}
