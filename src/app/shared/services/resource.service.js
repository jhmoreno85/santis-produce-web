"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jlhuerta on 9/5/16.
 */
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var ResourceService = (function () {
    function ResourceService(_http) {
        this._http = _http;
    }
    ResourceService.prototype.getElements = function (res) {
        this._url = res;
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    ResourceService = __decorate([
        core_1.Injectable()
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map