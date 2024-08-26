import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkExistingToken();
  }

  checkExistingToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decodedJwt = this.authService.decodeToken(jwt);
      this.authService.user$.next({
        username: decodedJwt.username,
        id: Number(decodedJwt.id),
        role: decodedJwt.role,
      });
    }
  }

  login(form: NgForm): void {
    if (form.valid) {
      const login: Login = {
        username: this.username,
        password: this.password,
      };

      this.authService.login(login).subscribe({
        next: (response) => {
          localStorage.setItem('jwt', response.accessToken);
          this.redirectUser();
        },
        error: () => {
          // Optionally handle error without user notification
        },
      });
    } else {
      // Optionally handle form invalid state without user notification
    }
  }

  redirectUser(): void {
    const role = this.authService.user$.value.role;
    switch (role) {
      case 'tourist':
        this.router.navigate(['/tourist']);
        break;
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'author':
        this.router.navigate(['/author']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  toRegister(): void {
    this.router.navigate(['/register']);
  }
}
