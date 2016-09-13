"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TranslateService_1 = require("./TranslateService");
var core_1 = require("@angular/core");
var TranslateComponent = (function () {
    function TranslateComponent(translate) {
        var _this = this;
        this.translation = "";
        this._params = {};
        this._translate = translate;
        translate.languageChanged.subscribe(function () {
            _this._startTranslation();
        });
    }
    Object.defineProperty(TranslateComponent.prototype, "key", {
        set: function (key) {
            this._key = key;
            this._startTranslation();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateComponent.prototype, "params", {
        set: function (params) {
            if (typeof params !== "object") {
                this._translate.logHandler.error("Params have to be an object");
                return;
            }
            this._params = params;
            this._startTranslation();
        },
        enumerable: true,
        configurable: true
    });
    TranslateComponent.prototype._startTranslation = function () {
        var _this = this;
        if (!this._key) {
            return;
        }
        this._translate.translate(this._key, this._params).then(function (translation) { return _this.translation = String(translation); });
    };
    __decorate([
        core_1.Input("translate")
    ], TranslateComponent.prototype, "key");
    __decorate([
        core_1.Input("translateParams")
    ], TranslateComponent.prototype, "params");
    TranslateComponent = __decorate([
        core_1.Component({
            properties: ["translate", "translateParams"],
            selector: "[translate]",
            template: "{{translation}}"
        }),
        __param(0, core_1.Inject(TranslateService_1.TranslateService))
    ], TranslateComponent);
    return TranslateComponent;
}());
exports.TranslateComponent = TranslateComponent;
//# sourceMappingURL=TranslateComponent.js.map