"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var _1 = require('./app/');
var core_2 = require('angular2-google-maps/core');
var angular2_translator_1 = require('./app/pipes/angular2-translator');
var TranslateConfig_1 = require("./app/pipes/angular2-translator/TranslateConfig");
var TranslateLoaderJson_1 = require("./app/pipes/angular2-translator/TranslateLoaderJson");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    core_2.GOOGLE_MAPS_PROVIDERS,
    core_1.provide(core_2.LazyMapsAPILoaderConfig, { useFactory: function () {
            var config = new core_2.LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyD7L_8iKmAeWlf0EgYxgypVErUCO52cjsw';
            return config;
        } }),
    http_1.HTTP_PROVIDERS,
    angular2_translator_1.TRANSLATE_PROVIDERS,
    core_1.provide(TranslateConfig_1.TranslateConfig, { useValue: new TranslateConfig_1.TranslateConfig({
            providedLangs: ['en', 'es']
        }) }),
    core_1.provide(TranslateLoaderJson_1.TranslateLoaderJsonConfig, { useValue: new TranslateLoaderJson_1.TranslateLoaderJsonConfig('app/shared/i18n', '-lang.json') })
]);
//# sourceMappingURL=main.js.map