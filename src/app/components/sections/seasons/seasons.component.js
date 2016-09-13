"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TranslatePipe_1 = require('../../../pipes/angular2-translator/TranslatePipe');
var TranslateComponent_1 = require("../../../pipes/angular2-translator/TranslateComponent");
var SeasonsComponent = (function () {
    function SeasonsComponent(translate) {
    }
    SeasonsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-seasons',
            templateUrl: 'seasons.component.html',
            pipes: [TranslatePipe_1.TranslatePipe],
            directives: [TranslateComponent_1.TranslateComponent]
        })
    ], SeasonsComponent);
    return SeasonsComponent;
}());
exports.SeasonsComponent = SeasonsComponent;
//# sourceMappingURL=seasons.component.js.map