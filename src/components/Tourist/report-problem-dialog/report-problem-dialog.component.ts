import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../auth/auth.service';
import { ProblemService } from '../../../services/problem.service';

@Component({
  selector: 'app-report-problem-dialog',
  templateUrl: './report-problem-dialog.component.html',
  styleUrls: ['./report-problem-dialog.component.scss'],
})
export class ReportProblemDialogComponent implements OnInit {
  user: any;
  problemName: string = '';
  problemDescription: string = '';

  constructor(
    private authService: AuthService,
    private problemService: ProblemService,
    public dialogRef: MatDialogRef<ReportProblemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tourId: string }
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onReport(): void {
    const problem = {
      tourId: this.data.tourId,
      name: this.problemName,
      description: this.problemDescription,
      status: 'ON_HOLD',
      userId: this.user.id,
    };
    this.problemService.createProblem(problem).subscribe((res) => {
      console.log(res);
    });

    this.dialogRef.close({ reported: true });
  }
}
