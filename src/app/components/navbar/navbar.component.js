"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TranslatePipe_1 = require("../../pipes/angular2-translator/TranslatePipe");
var TranslateComponent_1 = require("../../pipes/angular2-translator/TranslateComponent");
var NavbarComponent = (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.length > 3) {
            var langSplit = userLang.split('-');
            if (langSplit[0].length < 3) {
                userLang = langSplit[0];
            }
            else {
                userLang = 'en';
            }
        }
        this.translate.lang = userLang;
    };
    NavbarComponent.prototype.switchLang = function (selectedLang) {
        this.translate.lang = selectedLang;
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-navbar',
            templateUrl: 'navbar.component.html',
            pipes: [TranslatePipe_1.TranslatePipe],
            directives: [TranslateComponent_1.TranslateComponent]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map