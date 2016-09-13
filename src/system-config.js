"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    'jquery',
    'bootstrap',
    'font-awesome',
    'angular2-google-maps',
    // App specific barrels.
    'app',
    'app/shared',
    'app/components/navbar',
    'app/components/footer',
    'app/components/header',
    'app/components/gmaps',
    'app/components/sections/products',
    'app/components/sections/aboutus',
    'app/components/sections/seasons',
    'app/components/sections/team',
    'app/components/sections/mission-and-vision',
    'app/components/sections/contact',
    'app/components/sections/gallery'
];
var cliSystemConfigPackages = {
    'angular2-google-maps/core': {
        defaultExtension: 'js',
        main: 'index.js' // you can also use core.umd.js here, if you want faster loads
    },
    'jquery': {
        defaultExtension: 'js',
        main: 'jquery.min.js'
    }
};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'jquery': 'vendor/jquery',
        'bootstrap': 'vendor/bootstrap',
        'font-awesome': 'vendor/font-awesome',
        'angular2-google-maps': 'vendor/angular2-google-maps'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map