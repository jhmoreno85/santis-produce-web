import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/sections/aboutus/aboutus.component';
import { MissionAndVisionComponent } from './components/sections/mission-and-vision/mission-and-vision.component';
import { TeamComponent } from './components/sections/team/team.component';
import { ProductsComponent } from './components/sections/products/products.component';
import { SeasonsComponent } from './components/sections/seasons/seasons.component';
import { GalleryComponent } from './components/sections/gallery/gallery.component';
import { ContactComponent } from './components/sections/contact/contact.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    MissionAndVisionComponent,
    TeamComponent,
    ProductsComponent,
    SeasonsComponent,
    GalleryComponent,
    ContactComponent
  ]
})
export class AppComponent {
  constructor(){
  }
}
