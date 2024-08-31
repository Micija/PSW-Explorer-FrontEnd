import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourOverviewComponent } from './tour-overview/tour-overview.component';
import { MutualModule } from '../../mutual/mutual.module';
import { CreateKeypointComponent } from './create-keypoint/create-keypoint.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthorHomeComponent,
    CreateTourComponent,
    TourOverviewComponent,
    CreateKeypointComponent,
  ],
  imports: [CommonModule, FormsModule, MutualModule, RouterModule],
  exports: [AuthorHomeComponent],
})
export class AuthorModule {}
