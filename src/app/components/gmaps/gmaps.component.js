"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var GmapsComponent = (function () {
    function GmapsComponent() {
        this.lat = 26.1019604;
        this.lng = -98.2201786;
        this.zoom = 16;
    }
    GmapsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-gmaps',
            templateUrl: 'gmaps.component.html',
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES]
        })
    ], GmapsComponent);
    return GmapsComponent;
}());
exports.GmapsComponent = GmapsComponent;
//# sourceMappingURL=gmaps.component.js.map