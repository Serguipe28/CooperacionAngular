import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ODS } from "../interface/iods";
import { ODSService } from "../service/ods.service";

@Component({
  selector: 'app-ods-list',
  templateUrl: './ods-list.component.html',
  styleUrls: ['./ods-list.component.css']
})
export class ODSListComponent implements OnInit {

  ods: ODS[] = [];
  odsSelected:number = 1;


  @Output() 
  globalSelected: EventEmitter<Number> = new EventEmitter<Number>();

  

  constructor(private odsService: ODSService) { }

  ngOnInit(): void {
    this.odsService.getAllODS().subscribe(ods =>(this.ods = ods));
  }

  onChange(){
    this.globalSelected.emit(this.odsSelected);
  }

}
