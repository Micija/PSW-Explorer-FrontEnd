import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KeypointService } from '../../../services/keypoint.service';

@Component({
  selector: 'app-tour-overview',
  templateUrl: './tour-overview.component.html',
  styleUrls: ['./tour-overview.component.scss'],
})
export class TourOverviewComponent implements OnInit {
  tourId: number = 0;
  keypoints: any[] = [];
  tourName: string = '';

  constructor(
    private tourService: TourService,
    private keyPointService: KeypointService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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
}
