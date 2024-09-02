import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-ask-for-recommended',
  templateUrl: './ask-for-recommended.component.html',
  styleUrls: ['./ask-for-recommended.component.scss'],
})
export class AskForRecommendedComponent implements OnInit {
  user: any;
  tours: any[] = [];
  selectedDifficulty: string = '';

  constructor(
    private tourService: TourService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  askForRecommended() {
    this.tourService
      .getRecommendations(this.selectedDifficulty)
      .subscribe((data) => {
        this.tours = data;
        console.log(this.tours);
      });
  }

  addToCart(tourId: number) {
    const data = {
      tourId: tourId,
      buyerId: this.user.id,
      bought: false,
    };
    this.cartService.createCart(data).subscribe(
      () => {
        alert('Tour added to cart successfully');
      },
      (error) => {
        alert('Tour is already in cart');
      }
    );
  }
}
