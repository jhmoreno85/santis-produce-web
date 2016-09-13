import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from 'angular2-google-maps/core'
import { TRANSLATE_PROVIDERS } from './app/pipes/angular2-translator';
import { TranslateConfig } from "./app/pipes/angular2-translator/TranslateConfig";
import { TranslateLoaderJsonConfig } from "./app/pipes/angular2-translator/TranslateLoaderJson";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyD7L_8iKmAeWlf0EgYxgypVErUCO52cjsw';
    return config;
  }}),
  HTTP_PROVIDERS,
  TRANSLATE_PROVIDERS,
  provide(TranslateConfig, {useValue: new TranslateConfig({
    providedLangs: ['en','es']
  })}),
  provide(TranslateLoaderJsonConfig, {useValue: new TranslateLoaderJsonConfig('app/shared/i18n', '-lang.json')})
]);
