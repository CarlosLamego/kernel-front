// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//   imports: [ CommonModule ]
// })
// export class DashboardComponent implements OnInit {

//   // Variáveis para armazenar os dados do usuário
//   user: any = null;

//   ngOnInit() {
//     // Recuperando os dados do usuário armazenados no localStorage
//     const savedUserData = localStorage.getItem('userData');

//     // Verificando se os dados existem
//     if (savedUserData) {
//       const parsedData = JSON.parse(savedUserData);
//       if (parsedData && parsedData.conteudo && parsedData.conteudo[0] && parsedData.conteudo[0].usuario) {
//         this.user = parsedData.conteudo[0].usuario;
//         console.log('Dados do usuário:', this.user); // Para depuração
//       }
//     }
//   }
// }
