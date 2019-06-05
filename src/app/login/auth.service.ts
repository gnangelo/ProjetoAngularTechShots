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
  mostrarCriarEmitter = new EventEmitter<boolean>();
  mostrarVotarEmitter = new EventEmitter<boolean>();
  mostrarListarEmitter = new EventEmitter<boolean>();


  constructor( private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'gngelo@gmail.com' &&
      usuario.senha === '123') {

        if (usuario.tipoUsuario === 'usuario') {

          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.mostrarVotarEmitter.emit(true);
          this.mostrarListarEmitter.emit(true);
          this.router.navigate(['/']);
        }

        if (usuario.tipoUsuario === 'admin') {
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.mostrarCriarEmitter.emit(true);
          this.mostrarListarEmitter.emit(true);
          this.router.navigate(['/']);
        }

      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.mostrarCriarEmitter.emit(false);
        this.mostrarVotarEmitter.emit(false);
        this.mostrarListarEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
