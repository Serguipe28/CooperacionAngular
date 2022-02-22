import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


import { ODS } from "../interface/iods";
@Injectable({
  providedIn: 'root'
})
export class ODSService {

  constructor(private _http: HttpClient) { }

  getAllODS(): Observable<ODS[]>{
    const path = "https://localhost:44362/api/ODS";
    return this._http.get<ODS[]>(path);
  } 
}
