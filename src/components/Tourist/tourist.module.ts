import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouristHomeComponent } from './tourist-home/tourist-home.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AskForRecommendedComponent } from './ask-for-recommended/ask-for-recommended.component';

@NgModule({
  declarations: [TouristHomeComponent, CartComponent, AskForRecommendedComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TouristHomeComponent],
})
export class TouristModule {}
