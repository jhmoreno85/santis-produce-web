import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core'

@Component({
  moduleId: module.id,
  selector: 'app-gmaps',
  templateUrl: 'gmaps.component.html',
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class GmapsComponent {

  lat: number = 26.1019604;
  lng: number = -98.2201786;
  zoom: number = 16;

  constructor() { }

}
