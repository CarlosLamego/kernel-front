import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosListResponse } from '../types/dados-list-response';

@Injectable({
  providedIn: 'root'
})

export class DadosListService {
  private readonly _http = inject(HttpClient)

  getDados(): Observable<DadosListResponse> {
    return this._http.get<DadosListResponse>('http://192.168.38.198/pWUsuario/swagger/index.html')
  }
}
