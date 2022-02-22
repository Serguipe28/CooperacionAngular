import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Destinatarios } from "../interface/idestinatarios";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinatariosService {

  constructor(private _http: HttpClient) { }

  getAllDestinatarios(): Observable<Destinatarios[]>{
    const path = "https://localhost:44362/api/Destinatarios";
    return this._http.get<Destinatarios[]>(path);
  }
}
