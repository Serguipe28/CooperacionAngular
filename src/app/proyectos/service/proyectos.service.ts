import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Proyectos } from "../interface/iproyectos";


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private _http: HttpClient) { }

  getAllProyectos(): Observable<Proyectos[]>{
    const path = "https://localhost:44362/api/Proyectos";
    return this._http.get<Proyectos[]>(path);

  }
}
