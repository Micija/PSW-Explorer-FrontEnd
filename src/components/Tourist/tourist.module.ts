import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TouristHomeComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TouristHomeComponent],
})
export class TouristModule {}
