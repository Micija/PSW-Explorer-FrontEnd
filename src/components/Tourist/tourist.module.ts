import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AskForRecommendedComponent } from './ask-for-recommended/ask-for-recommended.component';
import { BoughtToursOverviewComponent } from './bought-tours-overview/bought-tours-overview.component';
import { ReportProblemDialogComponent } from './report-problem-dialog/report-problem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TouristHomeComponent,
    CartComponent,
    AskForRecommendedComponent,
    BoughtToursOverviewComponent,
    ReportProblemDialogComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, MatDialogModule],
  exports: [TouristHomeComponent],
})
export class TouristModule {}
