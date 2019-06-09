import { ListarTechshotsService } from './../listar-techshots.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-techshots',
  templateUrl: './editar-techshots.component.html',
  styleUrls: ['./editar-techshots.component.css']
})
export class EditarTechshotsComponent implements OnInit {

  listatechshots: Array<any>;

  constructor( private listarTechshotsService: ListarTechshotsService ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listarTechshotsService.listarTechhosts().subscribe(dados => this.listatechshots = dados);
  }

}
