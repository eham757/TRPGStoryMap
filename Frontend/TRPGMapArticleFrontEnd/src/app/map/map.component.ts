import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit , AfterViewInit {

  private map: L.Map | undefined;
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
  }


  private initMap(){
    this.map = L.map('map',{
      crs: L.CRS.Simple,
      center: [1750,1600], // 840 768
      minZoom: -2,
      maxZoom: 2,
      zoomSnap: 0.1,
      zoom: -2
    });

    var imageUrl = '/assets/sigmi_coloured.png',
    imageBounds: L.LatLngBounds = new L.LatLngBounds(new L.LatLng(0, 0),new L.LatLng(3500, 3200) ) //1680, 1536
    L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
  }
  

}
