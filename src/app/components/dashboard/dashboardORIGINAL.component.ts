// import { Component, inject, OnInit } from '@angular/core';
// import { IDados } from '../../interfaces/dados.interface';
// import { DadosListService } from '../../services/dados-list.service';
// import { AsyncPipe } from '@angular/common';
// import { Observable, of } from 'rxjs';
// import { DadosListResponse } from '../../types/dados-list-response';

// @Component({
//   selector: 'app-dashboard',
//   imports: [ AsyncPipe ],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent implements OnInit {
//   dadosList: IDados[] =[];

//   dadosList$: Observable<DadosListResponse> = of([])

//   private readonly _dadosListService = inject(DadosListService)

//   ngOnInit(): void {
//     this._dadosListService.getDados().subscribe({ 
//       next: (data) => {
//         console.log ('Dados Recebidos: ', data);
//       },
//       error: (error) => {
//         console.error('Erro ao buscar dados: ', error)
//       },
//     });
//   }

// }
