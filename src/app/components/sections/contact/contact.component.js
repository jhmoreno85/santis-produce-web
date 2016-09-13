"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var gmaps_component_1 = require('../../gmaps/gmaps.component');
var TranslatePipe_1 = require('../../../pipes/angular2-translator/TranslatePipe');
var TranslateComponent_1 = require("../../../pipes/angular2-translator/TranslateComponent");
var resource_service_1 = require("../../../shared/services/resource.service");
var contact_service_1 = require("../../../shared/services/contact.service");
var ContactForm_1 = require('../../../shared/domains/ContactForm');
var ContactComponent = (function () {
    function ContactComponent(_fb, translate, _resourceService, _contactService) {
        this._fb = _fb;
        this.translate = translate;
        this._resourceService = _resourceService;
        this._contactService = _contactService;
        this.messageSent = false;
        this.messageSentFail = false;
        this.contactForm = new ContactForm_1.ContactForm();
        this.nameErrMsg = false;
        this.emailErrMsg = false;
        this.phoneErrMsg = false;
        this.messageErrMsg = false;
        this.preloader = false;
        this.createForm();
    }
    ContactComponent.prototype.createForm = function () {
        this.form = this._fb.group({
            name: [''],
            email: [''],
            phone: [''],
            message: [''],
            emailReceiver: ['']
        });
        this.contactForm = new ContactForm_1.ContactForm();
    };
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._resourceService.getElements("app/shared/resources/contact-config.json")
            .subscribe(function (contactConfig) { return _this.contactConfig = contactConfig; }, null, function () { });
    };
    ContactComponent.prototype.sendContactForm = function () {
        var _this = this;
        this.preloader = true;
        this.messageSent = false;
        this.messageSentFail = false;
        if (this.validForm(this.contactForm)) {
            this._contactService.sendContactForm(this.contactForm, this.contactConfig.urlServerContact).subscribe(function (response) { return _this.response = response; }, function (response) {
                if (response.status == 0) {
                    _this.messageSent = true;
                }
                else {
                    _this.messageSentFail = true;
                }
                _this.createForm();
                _this.preloader = false;
            });
        }
        else {
            this.preloader = false;
        }
    };
    ContactComponent.prototype.validForm = function (form) {
        var isValid = true;
        var regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regExNumber = /^[0-9]+$/;
        this.nameErrMsg = false;
        this.emailErrMsg = false;
        this.phoneErrMsg = false;
        this.messageErrMsg = false;
        if (form.name == null || form.name === '') {
            isValid = false;
            this.nameErrMsg = true;
        }
        if (form.email == null || form.email === '' || !regExEmail.test(form.email)) {
            isValid = false;
            this.emailErrMsg = true;
        }
        if (form.phone == null || form.phone === '' || !regExNumber.test(form.phone)) {
            isValid = false;
            this.phoneErrMsg = true;
        }
        if (form.message == null || form.message === '') {
            isValid = false;
            this.messageErrMsg = true;
        }
        return isValid;
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contact',
            templateUrl: 'contact.component.html',
            pipes: [TranslatePipe_1.TranslatePipe],
            directives: [gmaps_component_1.GmapsComponent, TranslateComponent_1.TranslateComponent],
            providers: [resource_service_1.ResourceService, contact_service_1.ContactService]
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map