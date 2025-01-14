import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isPressed = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    // Chama o serviço de login
    this._authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Response Login', response);

        // Armazena o token no localStorage ou em um serviço
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
        // Redireciona para o dashboard após login
        this._router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login error', error);
        this.loginForm.setErrors({ invalidCredentials: true });
      },
    });
  }
  //   console.log(this.loginForm.value.username, this.loginForm.value.password);

  //   this._authService
  //     .login(this.loginForm.value.username, this.loginForm.value.password)
  //     .subscribe({
  //       next: (_) => {
  //         this._router.navigate(['dashboard']);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //         const UNAUTHORIZED_CREDENTIAL_ERROR = 401;

  //         if (error.status === UNAUTHORIZED_CREDENTIAL_ERROR) {
  //           this.loginForm.setErrors({ invalidCredentials: true });
  //         } else {
  //           this.loginForm.setErrors({ generalCredentialsError: true });
  //         }
  //       },
  //     });
  // }
}
