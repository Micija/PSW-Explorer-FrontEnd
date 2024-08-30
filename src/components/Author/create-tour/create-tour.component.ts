import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { TourService } from '../../../services/tour.service';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss'],
})
export class CreateTourComponent implements OnInit {
  tourName: string = '';
  tourDifficulty: string = '';
  tourDescription: string = '';
  tourInterest: number = 2;
  tourPrice: number = 0;
  tourStatus: string = 'DRAFT';
  userId: number = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.user$.getValue().id;
  }

  onSubmit(): void {
    const tourData = {
      name: this.tourName,
      description: this.tourDescription,
      difficulty: this.tourDifficulty,
      interestId: Number(this.tourInterest),
      price: this.tourPrice,
      status: this.tourStatus,
      authorId: this.userId,
    };

    //console.log(tourData);

    this.tourService.createTour(tourData).subscribe((response) => {
      console.log(response);
      alert('Tour created successfully');
      this.router.navigate(['/author']);
    });

    alert('Form submitted');
  }
}
