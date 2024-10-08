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
  selector: 'app-map-component-2',
  templateUrl: './map-component-2.component.html',
  styleUrl: './map-component-2.component.scss',
})
export class MapComponent2 {
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  @Output() mapClick = new EventEmitter<{ lat: number; lng: number }>(); // Event emitter for map clicks

  map!: L.Map;
  markers: L.Marker[] = [];

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

    // Add click listener
    this.map.on('click', (e) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      // Emit the coordinates on click
      this.mapClick.emit({ lat, lng });
      // Add a marker at the clicked location
      this.addMarker(lat, lng);
    });
  }

  private addMarker(lat: number, lng: number): void {
    // Remove previous markers if you only want one marker at a time
    this.markers.forEach((marker) => {
      marker.remove();
    });

    // Create a custom icon
    const customIcon = L.icon({
      iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Create and add the new marker with the custom icon
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(this.map);
    this.markers = [marker]; // Store the marker if you need to reference it later
  }
}
