import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techShots';

  mostrarMenu: boolean = false;
  mostrarCriar: boolean = false;
  mostrarVotar: boolean = false;
  mostrarListar: boolean = false;

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.authService.mostrarCriarEmitter.subscribe(
      mostrar => this.mostrarCriar = mostrar
    );
    this.authService.mostrarVotarEmitter.subscribe(
      mostrar => this.mostrarVotar = mostrar
    );
    this.authService.mostrarListarEmitter.subscribe(
      mostrar => this.mostrarListar = mostrar
    );
  }
}
