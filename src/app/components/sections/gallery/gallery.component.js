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
var resource_service_1 = require('../../../shared/services/resource.service');
var GalleryComponent = (function () {
    function GalleryComponent(translate, _resourceService) {
        this.translate = translate;
        this._resourceService = _resourceService;
        this.currentDescription = '';
        this.currentUrlImg = 'http://placehold.it/400x300';
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._resourceService.getElements("app/shared/resources/gallery-config.json")
            .subscribe(function (gallery) { return _this.gallery = gallery; }, null, function () { });
    };
    GalleryComponent.prototype.setUrlImage = function (currentUrlImg, currentDescription) {
        this.currentUrlImg = currentUrlImg;
        this.currentDescription = currentDescription;
    };
    GalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-gallery',
            templateUrl: 'gallery.component.html',
            pipes: [TranslatePipe_1.TranslatePipe],
            directives: [TranslateComponent_1.TranslateComponent],
            providers: [resource_service_1.ResourceService]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map