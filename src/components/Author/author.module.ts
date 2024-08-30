import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { CreateTourComponent } from './create-tour/create-tour.component';

@NgModule({
  declarations: [AuthorHomeComponent, CreateTourComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthorHomeComponent],
})
export class AuthorModule {}
