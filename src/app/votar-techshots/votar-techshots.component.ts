
import { Component, OnInit } from '@angular/core';
import { ListarTechshotsService } from './../listar-techshots.service';

@Component({
  selector: 'app-votar-techshots',
  templateUrl: './votar-techshots.component.html',
  styleUrls: ['./votar-techshots.component.css']
})
export class VotarTechshotsComponent implements OnInit {
  mockLista = [
    {
      titulo: 'lista',
      descricao: 'lista, lista, lista',
      palestrante: 'antonio',
      id: 1
    },
    {
      titulo: 'liskkkkkkkkkkta',
      descricao: 'litudokkkkkkkkkksta, lista, lista',
      palestrante: 'jose',
      id: 2
    },
    {
      titulo: 'lista',
      descricao: 'lista, lista, lista',
      palestrante: 'antonio',
      id: 2
    },
    {
      titulo: 'liskkkkkkkkkkta',
      descricao: 'litudokkkkkkkkkksta, lista, lista',
      palestrante: 'jose',
      id: 3
    },
    {
      titulo: 'lista',
      descricao: 'lista, lista, lista',
      palestrante: 'antonio',
      id: 2
    },
    {
      titulo: 'liskkkkkkkkkkta',
      descricao: 'litudokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksta, lista, lista',
      palestrante: 'jose',
      id: 3
    }
  ];
  listatechshots: Array<any>;

  constructor( private listarTechshotsService: ListarTechshotsService) { }

  ngOnInit() {
    // this.listar();
  }

  // listar() {
  //   this.listarTechshotsService.listarTechhosts().subscribe(dados => this.listatechshots = dados);
  // }

}
