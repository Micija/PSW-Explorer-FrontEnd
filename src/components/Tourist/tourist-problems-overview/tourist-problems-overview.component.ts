import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem.service';

@Component({
  selector: 'app-tourist-problems-overview',
  templateUrl: './tourist-problems-overview.component.html',
  styleUrls: ['./tourist-problems-overview.component.scss'],
})
export class TouristProblemsOverviewComponent implements OnInit {
  problems: any[] = [];

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.problemService.getProblemsForTourist().subscribe((problems) => {
      console.log(problems);
      this.problems = problems;
    });
  }
}
