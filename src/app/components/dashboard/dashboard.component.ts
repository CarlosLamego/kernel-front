import { Component, inject, OnInit } from '@angular/core';
import { IDados } from '../../interfaces/dados.interface';
import { DadosListService } from '../../services/dados-list.service';
import { AsyncPipe } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';
import { DadosListResponse } from '../../types/dados-list-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  // Lista para armazenar os dados localmente
  dadosList: IDados[] = [];
  userData: any = {};
  authToken: string | null = null;

  // Observable para uso no template com pipe async
  dadosList$: Observable<DadosListResponse> = of([]);

  // Injetar o serviço usando o método inject
  private readonly _dadosListService = inject(DadosListService);

  ngOnInit() {
    // Buscar os dados e atribuir ao observable
    // this.dadosList$ = this._dadosListService.getDados().pipe(
    //   catchError((error) => {
    //     // console.error('Erro ao buscar dados:', error);
    //     return of([]); // Retornar array vazio em caso de erro
    //   })
    // );

    const storedData = localStorage.getItem('userData');
    const token = localStorage.getItem('authToken');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.userData = parsedData.usuario || {}; // Acessa os dados do usuário
    }

    if (token) {
      this.authToken = token; // Acessa o token de autenticação
    }

    // Verifique os dados recebidos
    console.log('Dados Recebidos:', this.userData);
    console.log('Token Recebido:', this.authToken);
    
    // Caso queira armazenar localmente também
    // this.dadosList$.subscribe((data) => {
    //   this.dadosList = data;
    //   console.log('Dados Recebidos:', data);
    // });
  }
}
