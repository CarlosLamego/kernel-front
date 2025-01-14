// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
// import { jwtDecode } from 'jwt-decode'

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private readonly _httpClient = inject(HttpClient);

//   login(username: string, password: string): Observable<{ token: string }> {
//     //faço a chamada http
//     return this._httpClient
//       .post<{ token: string }>('http://localhost:3000/login', {
//         username,
//         password,
//       })
//       .pipe(
//         //recebo o token
//         map((resp) => {
//           //salvo no localStorage
//           localStorage.setItem('access-token', resp.token);

//           return resp;
//         })
//       );
//   }

//   verifyToken():  Observable<{ valid: boolean; user: any; }> {
//     const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
//     return this._httpClient.get<{ valid: boolean; user: string }> ('http://localhost:3000/verify-token', { headers });
//   }

//   getUserScopes(): string[] {
//     const token = localStorage.getItem('access-token');

//     if (!token) {
//       return [];
//     }

//     const decoded: any = jwtDecode(token)

//     return decoded.scopes;
//   }
// }
