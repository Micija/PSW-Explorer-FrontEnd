import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorHomeComponent } from './author-home/author-home.component';

@NgModule({
  declarations: [AuthorHomeComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthorHomeComponent],
})
export class AuthorModule {}
