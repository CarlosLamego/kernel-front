import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = 'http://192.168.38.198/pwlogin/'; // Ajuste conforme necessário

  constructor(private _http: HttpClient) {}

  // Método de login
  login(credentials: { login: string, senha: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*'
    });
    // return this._http.post(`${this._apiUrl}Login/Login`, credentials);

    return this._http.post(`${this._apiUrl}Login/Login`, credentials);
  }

  // Verifica o token (pode ser usado para validar se o usuário está autenticado)
  verifyToken(): Observable<any> {
    return this._http.get(`${this._apiUrl}/verify-token`);
  }

  // Método para obter escopos do usuário
  getUserScopes(): any {
    // Adapte conforme a resposta da sua API
    return ['admin', 'user'];
  }
}
