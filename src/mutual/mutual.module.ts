import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map-component/map-component.component';
import { MapComponent2 } from './map-component-2/map-component-2.component';

@NgModule({
  declarations: [MapComponent, MapComponent2],
  imports: [CommonModule],
  exports: [MapComponent, MapComponent2],
})
export class MutualModule {}
