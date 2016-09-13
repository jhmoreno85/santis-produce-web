"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TranslateLoader_1 = require("./TranslateLoader");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var TranslateLoaderJsonConfig = (function () {
    // @todo maybe we will change it to a destructed parameter like we did for TranslateConfig
    function TranslateLoaderJsonConfig(path, extension) {
        this.path = "i18n/";
        this.extension = ".json";
        if (path) {
            this.path = path.replace(/\/+$/, "") + "/";
        }
        if (extension) {
            this.extension = extension;
        }
    }
    return TranslateLoaderJsonConfig;
}());
exports.TranslateLoaderJsonConfig = TranslateLoaderJsonConfig;
var TranslateLoaderJson = (function (_super) {
    __extends(TranslateLoaderJson, _super);
    function TranslateLoaderJson(http, config) {
        _super.call(this);
        this._http = http;
        this._config = config;
    }
    TranslateLoaderJson.prototype.load = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var file = _this._config.path + lang + _this._config.extension;
            _this._http.get(file)
                .subscribe(function (response) {
                if (response.status === 200) {
                    var translations = response.json();
                    var key = void 0;
                    for (key in translations) {
                        if (Array.isArray(translations[key])) {
                            translations[key] = translations[key]
                                .filter(function (v) { return typeof v === "string"; })
                                .join("");
                        }
                        else if (typeof translations[key] !== "string") {
                            delete translations[key];
                        }
                    }
                    resolve(translations);
                }
                else {
                    reject("Language file could not be loaded (StatusCode: " + response.status + ")");
                }
            });
        });
    };
    TranslateLoaderJson = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(TranslateLoaderJsonConfig))
    ], TranslateLoaderJson);
    return TranslateLoaderJson;
}(TranslateLoader_1.TranslateLoader));
exports.TranslateLoaderJson = TranslateLoaderJson;
//# sourceMappingURL=TranslateLoaderJson.js.map