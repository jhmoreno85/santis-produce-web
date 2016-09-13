import { Component } from '@angular/core';
import { TranslateService } from '../../../pipes/angular2-translator/TranslateService';
import { TranslatePipe } from '../../../pipes/angular2-translator/TranslatePipe';
import { TranslateComponent } from "../../../pipes/angular2-translator/TranslateComponent";

@Component({
  moduleId: module.id,
  selector: 'app-aboutus',
  templateUrl: 'aboutus.component.html',
  pipes: [TranslatePipe],
  directives: [TranslateComponent]
})
export class AboutusComponent {

  constructor(translate: TranslateService) {

  }
}
