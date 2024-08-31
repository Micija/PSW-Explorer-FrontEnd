import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../auth/model/user.model';
import { TourService } from '../../../services/tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.scss'],
})
export class AuthorHomeComponent implements OnInit {
  user: User | undefined;
  userId: number = 0;
  tours: any[] = [];
  filteredTours: any[] = [];
  filterStatus: string = 'all'; // Property to track the selected filter status

  constructor(
    private authService: AuthService,
    private tourService: TourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.userId = user.id;
    });

    this.tourService.getForAuthor().subscribe((tours) => {
      this.tours = tours;
      this.filteredTours = this.tours;
      console.log(this.tours);
    });
  }

  filterTours(status: string): void {
    this.filterStatus = status;
    if (status === 'all') {
      this.filteredTours = this.tours;
    } else {
      this.filteredTours = this.tours.filter((tour) => tour.status === status);
    }
  }

  toTourOverview(tourId: number): void {
    this.router.navigate(['tour-overview/', tourId]);
  }
}
