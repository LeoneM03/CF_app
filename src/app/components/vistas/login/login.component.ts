import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false; 

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'Athena' && this.password === '12345') {
      // esto sirve para mostrar un saludo luego de iniciar sesion
      setTimeout(() => {
        this.router.navigate(['/transition']); // luego de hacer login nos pasa al saludo
        setTimeout(() => {
          this.router.navigate(['/dashboard']); // despues de 2s de saludo nos manda al dashboard
        }, 2000);
      }, 2000);
    } else {
      this.showError = true; // alerta para cuando se equivocan en las credenciales
    }
  }
}