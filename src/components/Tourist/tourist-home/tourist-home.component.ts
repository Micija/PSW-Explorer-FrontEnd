import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';
import { TourService } from '../../../services/tour.service';
import { CartService } from '../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tourist-home',
  templateUrl: './tourist-home.component.html',
  styleUrls: ['./tourist-home.component.scss'],
})
export class TouristHomeComponent implements OnInit {
  user: User | undefined;
  userId: number = 0;
  toggleAwarded: boolean = false;

  tours: any[] = [];

  constructor(
    private authService: AuthService,
    private tourService: TourService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.userId = this.authService.user$.getValue().id;

    this.tourService.getPublish().subscribe((tours) => {
      //console.log(tours);
      this.tours = tours;
    });
  }

  addToCart(tourId: number) {
    const data = {
      tourId: tourId,
      buyerId: this.userId,
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

  toggleAwardedTours() {
    this.tourService.getAwarded().subscribe((tours) => {
      this.tours = tours;
      this.toggleAwarded = true;
    });
  }

  toggleAllTours() {
    this.tourService.getPublish().subscribe((tours) => {
      this.tours = tours;
      this.toggleAwarded = false;
    });
  }
}
