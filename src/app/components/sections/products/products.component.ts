import { Component } from '@angular/core';
import { TranslateService } from '../../../pipes/angular2-translator/TranslateService';
import { TranslatePipe } from '../../../pipes/angular2-translator/TranslatePipe';
import { TranslateComponent } from "../../../pipes/angular2-translator/TranslateComponent";
import { SubstringPipe } from '../../../pipes/substring-pipe';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  pipes: [TranslatePipe, SubstringPipe],
  directives: [TranslateComponent]
})
export class ProductsComponent {

  private modalTitle;
  private modalDescription;

  constructor(private translate: TranslateService) {
  }

  setProduct(type){
    this.translate.translate(type+'_item_title').then((translation) => this.modalTitle = translation);
    this.translate.translate(type+'_paragraph').then((translation) => this.modalDescription = translation);
  }
}
