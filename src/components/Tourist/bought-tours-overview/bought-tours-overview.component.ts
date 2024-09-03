import { Component, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { ProblemService } from '../../../services/problem.service';
import { ReportProblemDialogComponent } from '../report-problem-dialog/report-problem-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bought-tours-overview',
  templateUrl: './bought-tours-overview.component.html',
  styleUrls: ['./bought-tours-overview.component.scss'],
})
export class BoughtToursOverviewComponent implements OnInit {
  tours: any[] = [];

  constructor(
    private tourService: TourService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Initialization logic goes here
    this.tourService.getBought().subscribe((tours) => {
      console.log(tours);
      this.tours = tours;
    });
  }

  reportProblem(tourId: string): void {
    const dialogRef = this.dialog.open(ReportProblemDialogComponent, {
      width: '350px',

      data: { tourId },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result?.reported) {
        this.toastr.success('Problem reported successfully');
      }
    });
  }
}
