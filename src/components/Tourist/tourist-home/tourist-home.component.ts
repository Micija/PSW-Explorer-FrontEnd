import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';

@Component({
  selector: 'app-tourist-home',
  templateUrl: './tourist-home.component.html',
  styleUrls: ['./tourist-home.component.scss'],
})
export class TouristHomeComponent implements OnInit {
  user: User | undefined;
  userId: number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.userId = this.authService.user$.getValue().id;
  }
}
