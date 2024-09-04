import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem.service';

@Component({
  selector: 'app-problems-overview',
  templateUrl: './problems-overview.component.html',
  styleUrl: './problems-overview.component.scss',
})
export class ProblemsOverviewComponent implements OnInit {
  problems: any[] = [];
  activeFilter: string = 'new';

  constructor(private problemService: ProblemService) {}

  ngOnInit() {
    this.getNewProblems();
  }

  getNewProblems(): void {
    this.activeFilter = 'new';
    this.problemService.getNewProblemsForAuthor().subscribe((problems) => {
      this.problems = problems;
    });
  }

  getAllProblems(): void {
    this.activeFilter = 'all';
    this.problemService.getProblemsForAuthor().subscribe((problems) => {
      this.problems = problems;
    });
  }

  solveProblem(problemId: number): void {
    this.problemService.solveProblem(problemId).subscribe(() => {
      this.getNewProblems();
    });
  }

  revisionProblem(problemId: number): void {
    this.problemService.revisionProblem(problemId).subscribe(() => {
      this.getNewProblems();
    });
  }
}
