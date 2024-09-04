import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem.service';

@Component({
  selector: 'app-admin-problems-overview',
  templateUrl: './admin-problems-overview.component.html',
  styleUrls: ['./admin-problems-overview.component.scss'],
})
export class AdminProblemsOverviewComponent implements OnInit {
  problems: any[] = [];

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.problemService.getRevisionForAdmin().subscribe((res) => {
      console.log(res);
      this.problems = res;
    });
  }

  rejectProblem(problemId: number): void {
    this.problemService.reject(problemId).subscribe(() => {
      this.problemService.getRevisionForAdmin().subscribe((res) => {
        this.problems = res;
      });
    });
  }

  sendProblem(problemId: number): void {
    this.problemService.onHoldProblem(problemId).subscribe(() => {
      this.problemService.getRevisionForAdmin().subscribe((res) => {
        this.problems = res;
      });
    });
  }
}
