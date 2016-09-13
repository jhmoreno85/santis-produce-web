"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jlhuerta on 9/7/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService.prototype.sendContactForm = function (contactForm, url) {
        this._url = url;
        var body = 'email=' + contactForm.email +
            '&message=' + contactForm.name + '\n' + contactForm.phone + '\n' + contactForm.message;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this._url, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService = __decorate([
        core_1.Injectable()
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map