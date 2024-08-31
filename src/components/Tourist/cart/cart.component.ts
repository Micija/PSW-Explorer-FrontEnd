import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  tours: any[] = []; // Array to store tours in the cart
  totalPrice: number = 0; // Variable to store the total price
  user: any;

  constructor(
    private tourService: TourService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.loadCart(); // Load cart items when the component initializes
  }

  // Method to load cart items
  loadCart() {
    this.tourService.getInCart().subscribe((tours) => {
      this.tours = tours;
      console.log(this.tours);
      this.calculateTotalPrice(); // Calculate total price after loading tours
    });
  }

  // Method to calculate the total price of tours in the cart
  calculateTotalPrice() {
    this.totalPrice = this.tours.reduce(
      (total, tour) => total + (tour.price || 0),
      0
    );
  }

  // Method to remove a tour from the cart
  removeTour(cartId: string) {
    // this.cartService.deleteCart(cartId).subscribe(() => {
    //   this.loadCart(); // Reload the cart after removing a tour
    // });
  }

  // Method to handle the buy action
  buyTours() {
    this.cartService.buyCart(this.user.id).subscribe(() => {
      this.loadCart(); // Reload the cart after buying the
      alert('Tours bought successfully!');
    });
  }
}
