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
var substring_pipe_1 = require('../../../pipes/substring-pipe');
var ProductsComponent = (function () {
    function ProductsComponent(translate) {
        this.translate = translate;
    }
    ProductsComponent.prototype.setProduct = function (type) {
        var _this = this;
        this.translate.translate(type + '_item_title').then(function (translation) { return _this.modalTitle = translation; });
        this.translate.translate(type + '_paragraph').then(function (translation) { return _this.modalDescription = translation; });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-products',
            templateUrl: 'products.component.html',
            pipes: [TranslatePipe_1.TranslatePipe, substring_pipe_1.SubstringPipe],
            directives: [TranslateComponent_1.TranslateComponent]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map