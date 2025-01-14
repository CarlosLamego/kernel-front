import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _authService = inject(AuthService);

  login() {
    this._authService.login({login: 'BISOFT', senha: 'BISOFT07'}).subscribe((response) => {
      console.log('Response Login', response);
      localStorage.setItem('authToken', response.token);
    },
  (error) => {
    console.log('Login error', error)
  });
  }
  
  verify() {
    this._authService.verifyToken().subscribe((response) => {
      console.log('Response verify', response);
    });
  }
  // scopes() {
  //   console.log ('Scopes' , this._authService.getUserScopes() );
  // }
}
