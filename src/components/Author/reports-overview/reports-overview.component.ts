import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-reports-overview',
  templateUrl: './reports-overview.component.html',
  styleUrls: ['./reports-overview.component.scss'],
})
export class ReportsOverviewComponent implements OnInit {
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getAllForAuthor().subscribe((reports) => {
      console.log(reports);
    });
  }
}
