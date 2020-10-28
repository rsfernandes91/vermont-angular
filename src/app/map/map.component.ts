import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  @Input() lat = 37.75;
  @Input() lng = -122.41;
  constructor() {}
  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
