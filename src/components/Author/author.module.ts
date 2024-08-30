import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { TourOverviewComponent } from './tour-overview/tour-overview.component';
import { MutualModule } from '../../mutual/mutual.module';

@NgModule({
  declarations: [
    AuthorHomeComponent,
    CreateTourComponent,
    TourOverviewComponent,
  ],
  imports: [CommonModule, FormsModule, MutualModule],
  exports: [AuthorHomeComponent],
})
export class AuthorModule {}
