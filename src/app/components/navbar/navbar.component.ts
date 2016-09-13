import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from "../../pipes/angular2-translator/TranslatePipe";
import { TranslateComponent } from "../../pipes/angular2-translator/TranslateComponent";
import { TranslateService } from "../../pipes/angular2-translator/TranslateService";


@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  pipes: [TranslatePipe],
  directives: [TranslateComponent]
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.length > 3) {
      var langSplit = userLang.split('-');
      if (langSplit[0].length < 3){
          userLang = langSplit[0];
      } else {
          userLang = 'en';
      }
    }
    this.translate.lang = userLang;
  }

  switchLang(selectedLang){
    this.translate.lang = selectedLang;
  }
}
