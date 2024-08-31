import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KeypointService } from '../../../services/keypoint.service';
import { AuthService } from '../../../auth/auth.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-tour-overview',
  templateUrl: './tour-overview.component.html',
  styleUrls: ['./tour-overview.component.scss'],
})
export class TourOverviewComponent implements OnInit {
  tourId: number = 0;
  keypoints: any[] = [];
  tourName: string = '';
  user: any;

  constructor(
    private authService: AuthService,
    private tourService: TourService,
    private keyPointService: KeypointService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });

    this.tourId = this.route.snapshot.params['tourId'];

    this.tourService.getTourById(this.tourId).subscribe((tour) => {
      this.tourName = tour.name;
    });

    this.keyPointService.getAllByTourId(this.tourId).subscribe((keypoints) => {
      this.keypoints = keypoints;
    });
  }

  createKeypoint() {
    this.router.navigate([`create-keypoint/${this.tourId}`]);
  }

  publishTour() {
    if (this.keypoints.length < 2) {
      alert('Tour must have at least 2 keypoints to be published');
    } else {
      this.tourService.publish(this.tourId).subscribe(() => {
        alert('Tour published successfully');
        this.router.navigate(['/author']);
      });
    }
  }
  archiveTour() {
    this.tourService.archive(this.tourId).subscribe(() => {
      alert('Tour archived successfully');
      this.router.navigate(['/author']);
    });
  }

  addToCart() {
    const data = {
      tourId: this.tourId,
      buyerId: this.user.id,
      bought: false,
    };

    this.cartService.createCart(data).subscribe(() => {
      alert('Tour added to cart successfully');
    });
  }
}
