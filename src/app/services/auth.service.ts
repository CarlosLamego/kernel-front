import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = 'http://192.168.38.198/pWLogin/'; // Ajuste conforme necessário

  constructor(private _http: HttpClient) {}

  // Método de login
  login(credentials: { login: string; senha: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*',
    });
    return this._http
      .post(`${this._apiUrl}Login/Login`, credentials, { headers })
      .pipe(
        catchError((error) => {
          console.error('Erro no login:', error);
          // Retorna um erro processado para o componente consumir
          return throwError(
            () => new Error(error.error?.mensagem || 'Erro na autenticação')
          );
        })
      );
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
