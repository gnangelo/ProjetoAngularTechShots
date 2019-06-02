import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarTechshotsService {

  techshotsUrl = 'https://virtserver.swaggerhub.com/pucmg/techshot/1.0.0/techshots';

  constructor( private http: HttpClient ) { }

  listarTechhosts() {
    return this.http.get<any[]>(`${this.techshotsUrl}`);
  }
}
