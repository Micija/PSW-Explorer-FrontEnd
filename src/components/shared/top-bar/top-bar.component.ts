import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  user: User | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

  getRouteBasedOnRole() {
    if (this.user) {
      switch (this.user.role) {
        case 'tourist':
          return '/tourist';
        case 'author':
          return '/author';
        case 'admin':
          return '/admin';
        default:
          return '/';
      }
    } else {
      return '/';
    }
  }
}
