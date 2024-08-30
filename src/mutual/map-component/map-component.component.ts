import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.scss',
})
export class MapComponent {
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  @Input() keypoints: any[] = [];

  map!: L.Map;
  markers: L.Marker[] = [];
  private polyline?: L.Polyline;

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }

  ngOnDestroy() {
    this.map.remove();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.239615, 19.822754],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'PSW Explorer 2024',
    }).addTo(this.map);
  }
}
