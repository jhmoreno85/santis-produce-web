import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  directives: [NavbarComponent]
})
export class HeaderComponent {

  constructor() { }

}
