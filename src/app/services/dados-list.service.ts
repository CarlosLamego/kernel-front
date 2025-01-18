import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosListResponse } from '../types/dados-list-response';
import { IDados } from '../interfaces/dados.interface';

@Injectable({
  providedIn: 'root'
})

export class DadosListService {
  private readonly _http = inject(HttpClient)

  // private _apiUrl = 'http://192.168.38.198/pWLogin/'

  // getDados(): Observable<DadosListResponse> {

  //   const token = localStorage.getItem('authToken');
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });

  //   return this._http.get<IDados[]>(this._apiUrl, {headers});
  // }
}
