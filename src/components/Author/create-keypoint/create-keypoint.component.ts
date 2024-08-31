import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { KeypointService } from '../../../services/keypoint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'app-create-keypoint',
  templateUrl: './create-keypoint.component.html',
  styleUrls: ['./create-keypoint.component.scss'],
})
export class CreateKeypointComponent implements OnInit {
  tourId: number = 0;
  keypoints: any[] = [];
  tourName: string = '';

  latitude: number | undefined;
  longitude: number | undefined;
  keypointName: string = '';
  keypointDescription: string = '';
  keypointImage: string = '';

  constructor(
    private tourService: TourService,
    private keyPointService: KeypointService,
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onMapClick(coords: { lat: number; lng: number }) {
    this.latitude = coords.lat;
    this.longitude = coords.lng;
  }

  ngOnInit(): void {
    this.tourId = this.route.snapshot.params['tourId'];

    this.tourService.getTourById(this.tourId).subscribe((tour) => {
      this.tourName = tour.name;
      console.log(this.tourName);
    });

    this.keyPointService.getAllByTourId(this.tourId).subscribe((keypoints) => {
      this.keypoints = keypoints;
      console.log(this.keypoints);
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadService.uploadImage(file).subscribe({
        next: (response) => {
          this.keypointImage = response.path;
        },
        error: (error) => {
          console.error('Error uploading image:', error);
        },
      });
    }
  }

  onSubmit(): void {
    const kpData = {
      latitude: this.latitude,
      longitude: this.longitude,
      name: this.keypointName,
      description: this.keypointDescription,
      image: this.keypointImage,
      tourId: this.tourId,
    };

    this.keyPointService.createKeyPoint(kpData).subscribe({
      next: (response) => {
        alert('Key point created successfully!');
        this.router.navigate(['/tour-overview/', this.tourId]);
      },
      error: (error) => {
        console.error('Error creating key point:', error);
      },
    });
  }
}
