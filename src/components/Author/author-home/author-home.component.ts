import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';
import { TourService } from '../../../services/tour.service';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrl: './author-home.component.scss',
})
export class AuthorHomeComponent {
  user: User | undefined;
  userId: number = 0;

  constructor(
    private authService: AuthService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.userId = this.authService.user$.getValue().id;

    this.tourService.getForAuthor().subscribe((tours) => {
      console.log(tours);
    });
  }
}
