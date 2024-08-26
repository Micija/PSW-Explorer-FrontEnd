import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PSW-explorer-FrontEnd';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const jwt = localStorage.getItem('jwt');
    if (jwt !== null) {
      const decodeJwt = this.authService.decodeToken(jwt);
      this.authService.user$.next({
        username: decodeJwt.username,
        id: Number(decodeJwt.id),
        role: decodeJwt.role,
      });
    }
  }
}
