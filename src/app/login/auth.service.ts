import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor( private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'gngelo@gmail.com' &&
      usuario.senha === '123') {

        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/votar-techshots']);

      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
  }
}
