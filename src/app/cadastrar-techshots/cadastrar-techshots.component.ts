import { Component, OnInit } from '@angular/core';
import { TechShot } from './techshot-models';

@Component({
  selector: 'app-cadastrar-techshots',
  templateUrl: './cadastrar-techshots.component.html',
  styleUrls: ['./cadastrar-techshots.component.css']
})
export class CadastrarTechshotsComponent implements OnInit {

  private techShot: TechShot = new TechShot();

  constructor() { }

  ngOnInit() {
  }

  // cadastro de tech shots
  cadastrarTechShots() {}

  // cancelamento de cadastro tech shots
  cancelarCadastro() {}

}
