import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';
import { TourService } from '../../../services/tour.service';

@Component({
  selector: 'app-tourist-home',
  templateUrl: './tourist-home.component.html',
  styleUrls: ['./tourist-home.component.scss'],
})
export class TouristHomeComponent implements OnInit {
  user: User | undefined;
  userId: number = 0;

  tours: any[] = [];

  constructor(
    private authService: AuthService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.userId = this.authService.user$.getValue().id;

    this.tourService.getPublish().subscribe((tours) => {
      console.log(tours);
      this.tours = tours;
    });
  }

  addToCart(tourId: number) {
    alert('Add to cart');
  }
}
