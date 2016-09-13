"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var TranslateConfig_1 = require("./angular2-translator/TranslateConfig");
var TranslateLoader_1 = require("./angular2-translator/TranslateLoader");
var TranslateLoaderJson_1 = require("./angular2-translator/TranslateLoaderJson");
var TranslateService_1 = require("./angular2-translator/TranslateService");
__export(require("./angular2-translator/TranslateService"));
__export(require("./angular2-translator/TranslatePipe"));
__export(require("./angular2-translator/TranslateComponent"));
__export(require("./angular2-translator/TranslateConfig"));
__export(require("./angular2-translator/TranslateLoader"));
__export(require("./angular2-translator/TranslateLoaderJson"));
exports.TRANSLATE_PROVIDERS = [
    { provide: TranslateConfig_1.TranslateConfig, useValue: new TranslateConfig_1.TranslateConfig({}) },
    { provide: TranslateLoaderJson_1.TranslateLoaderJsonConfig, useValue: new TranslateLoaderJson_1.TranslateLoaderJsonConfig() },
    { provide: TranslateLoader_1.TranslateLoader, useClass: TranslateLoaderJson_1.TranslateLoaderJson },
    { provide: TranslateService_1.TranslateLogHandler, useValue: TranslateService_1.TranslateLogHandler },
    TranslateService_1.TranslateService,
];
//# sourceMappingURL=angular2-translator.js.map