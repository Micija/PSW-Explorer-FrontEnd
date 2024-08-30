import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-overview',
  templateUrl: './tour-overview.component.html',
  styleUrls: ['./tour-overview.component.scss'],
})
export class TourOverviewComponent implements OnInit {
  keypoints: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialization logic goes here
  }
}
