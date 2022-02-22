import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Paises } from "../interface/ipaises";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private _http: HttpClient) { }

  getAllPaises(): Observable<Paises[]>{
    const path = "https://localhost:44362/api/Paises";
    return this._http.get<Paises[]>(path);
  }
}
