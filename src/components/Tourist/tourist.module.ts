import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';

@NgModule({
  declarations: [TouristHomeComponent],
  imports: [CommonModule, FormsModule],
  exports: [TouristHomeComponent],
})
export class TouristModule {}
