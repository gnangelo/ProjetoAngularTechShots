import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  usuariosUrl = 'https://virtserver.swaggerhub.com/pucmg/techshot/1.0.0/usuarios';

  constructor( private http: HttpClient ) { }

  registrar() {
    return this.http.get<any[]>(`${this.usuariosUrl}`);
  }
}
