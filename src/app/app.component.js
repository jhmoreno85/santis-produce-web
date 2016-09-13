"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var navbar_component_1 = require('./components/navbar/navbar.component');
var header_component_1 = require('./components/header/header.component');
var footer_component_1 = require('./components/footer/footer.component');
var aboutus_component_1 = require('./components/sections/aboutus/aboutus.component');
var mission_and_vision_component_1 = require('./components/sections/mission-and-vision/mission-and-vision.component');
var team_component_1 = require('./components/sections/team/team.component');
var products_component_1 = require('./components/sections/products/products.component');
var seasons_component_1 = require('./components/sections/seasons/seasons.component');
var gallery_component_1 = require('./components/sections/gallery/gallery.component');
var contact_component_1 = require('./components/sections/contact/contact.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            directives: [
                navbar_component_1.NavbarComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                aboutus_component_1.AboutusComponent,
                mission_and_vision_component_1.MissionAndVisionComponent,
                team_component_1.TeamComponent,
                products_component_1.ProductsComponent,
                seasons_component_1.SeasonsComponent,
                gallery_component_1.GalleryComponent,
                contact_component_1.ContactComponent
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map