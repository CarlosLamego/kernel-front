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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isPressed = false;
  userData = [];
  authToken = [''];

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
  
        // Verifica se a resposta está correta
        if (response.codigo === 1 && response.conteudo && response.conteudo.length > 0) {
          const user = response.conteudo[0].usuario;  // Primeiro item é o usuário
          const token = response.conteudo[1].token;  // Segundo item é o token
  
          // Exibe os dados do usuário e token
          console.log('User:', user);
          console.log('Token:', token);
  
          // Armazena os dados no localStorage
          localStorage.setItem('userData', JSON.stringify({ usuario: user }));  // Armazenando apenas o usuário
          localStorage.setItem('authToken', token);  // Armazenando o token
  
          // Verifica se os dados foram realmente armazenados
          console.log('Stored userData:', localStorage.getItem('userData'));
          console.log('Stored authToken:', localStorage.getItem('authToken'));
  
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
}
