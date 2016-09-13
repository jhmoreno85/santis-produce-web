import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../pipes/angular2-translator/TranslateService';
import { TranslatePipe } from '../../../pipes/angular2-translator/TranslatePipe';
import { TranslateComponent } from "../../../pipes/angular2-translator/TranslateComponent";
import { ResourceService } from '../../../shared/services/resource.service';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  pipes: [TranslatePipe],
  directives: [TranslateComponent],
  providers: [ResourceService]
})
export class GalleryComponent implements OnInit {

  private gallery;
  private currentDescription = '';
  private currentUrlImg = 'http://placehold.it/400x300';

  constructor(private translate: TranslateService, private _resourceService: ResourceService) { }

  ngOnInit() {
    this._resourceService.getElements("app/shared/resources/gallery-config.json")
      .subscribe(
        gallery =>	this.gallery = gallery,
        null,
        () => { }
      );
  }

  setUrlImage(currentUrlImg, currentDescription){
    this.currentUrlImg = currentUrlImg;
    this.currentDescription = currentDescription;
  }

}
