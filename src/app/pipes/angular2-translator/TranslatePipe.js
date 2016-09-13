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
var TranslatePipe = (function () {
    function TranslatePipe(translate) {
        var _this = this;
        this._translation = "";
        this._translate = translate;
        translate.languageChanged.subscribe(function () {
            _this._startTranslation();
        });
    }
    TranslatePipe._parseParams = function (arg) {
        try {
            var o = eval("(" + arg + ")");
            if (typeof o === "object") {
                return o;
            }
        }
        catch (e) { }
        return {};
    };
    /**
     * Translates key with given args.
     *
     * @see TranslateService.translate
     * @param {string} key
     * @param {array?} args
     * @returns {string}
     */
    TranslatePipe.prototype.transform = function (key, args) {
        if (args === void 0) { args = []; }
        var params = {};
        if (args[0]) {
            if (typeof args[0] === "string") {
                params = TranslatePipe._parseParams(args[0]);
                if (!Object.keys(params).length) {
                    this._translate.logHandler.error("'" + args[0] + "' could not be parsed to object");
                }
            }
            else if (typeof args[0] === "object") {
                params = args[0];
            }
        }
        if (this._translated && this._promise &&
            (this._translated.key !== key ||
                JSON.stringify(this._translated.params) !== JSON.stringify(params))) {
            this._promise = null;
        }
        if (!this._promise) {
            this._translated = {
                key: key,
                params: params
            };
            this._startTranslation();
        }
        return this._translation;
    };
    TranslatePipe.prototype._startTranslation = function () {
        var _this = this;
        if (!this._translated || !this._translated.key) {
            return;
        }
        this._promise = this._translate.translate(this._translated.key, this._translated.params);
        this._promise.then(function (translation) { return _this._translation = String(translation); });
    };
    TranslatePipe = __decorate([
        core_1.Pipe({
            name: "translate",
            pure: false
        }),
        __param(0, core_1.Inject(TranslateService_1.TranslateService))
    ], TranslatePipe);
    return TranslatePipe;
}());
exports.TranslatePipe = TranslatePipe;
//# sourceMappingURL=TranslatePipe.js.map