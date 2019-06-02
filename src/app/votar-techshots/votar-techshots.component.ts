
import { Component, OnInit } from '@angular/core';
import { ListarTechshotsService } from './../listar-techshots.service';

@Component({
  selector: 'app-votar-techshots',
  templateUrl: './votar-techshots.component.html',
  styleUrls: ['./votar-techshots.component.css']
})
export class VotarTechshotsComponent implements OnInit {

  listatechshots: Array<any>;

  constructor( private listarTechshotsService: ListarTechshotsService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarTechshotsService.listarTechhosts().subscribe(dados => this.listatechshots = dados);
  }

}
