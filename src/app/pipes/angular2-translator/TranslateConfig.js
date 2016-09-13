"use strict";
var TranslateConfig = (function () {
    function TranslateConfig(_a) {
        var _b = _a.defaultLang, defaultLang = _b === void 0 ? "en" : _b, _c = _a.providedLangs, providedLangs = _c === void 0 ? ["en"] : _c, _d = _a.detectLanguageOnStart, detectLanguageOnStart = _d === void 0 ? true : _d;
        this.defaultLang = providedLangs.indexOf(defaultLang) > -1 ? defaultLang : providedLangs[0];
        this.providedLangs = providedLangs;
        this.detectLanguageOnStart = detectLanguageOnStart;
        this.navigatorLanguages = (function () {
            var navigator = TranslateConfig.navigator;
            if (navigator.languages instanceof Array) {
                return Array.prototype.slice.call(navigator.languages);
            }
            else if (typeof navigator.languages === "string") {
                return [String(navigator.languages)];
            }
            else if (typeof navigator.language === "string") {
                return [navigator.language];
            }
            else {
                return [];
            }
        })();
    }
    /**
     * Checks if given language "lang" is provided and returns the language.
     *
     * The checks running on normalized strings matching this pattern: /[a-z]{2}(-[A-Z]{2})?/
     * Transformation is done with this pattern: /^([A-Za-z]{2})([\.\-_\/]?([A-Za-z]{2}))?/
     *
     * If strict is false it checks country independent.
     *
     * @param {string} lang
     * @param {boolean?} strict
     * @returns {string|boolean}
     */
    TranslateConfig.prototype.langProvided = function (lang, strict) {
        if (strict === void 0) { strict = false; }
        var provided = false;
        var p;
        var normalizeLang = function (languageString) {
            var regExp = /^([A-Za-z]{2})(?:[\.\-_\/]?([A-Za-z]{2}))?$/;
            if (!languageString.match(regExp)) {
                return "";
            }
            return languageString.replace(regExp, function (substring, language, country) {
                if (country === void 0) { country = ""; }
                language = language.toLowerCase();
                country = country.toUpperCase();
                return country ? language + "-" + country : language;
            });
        };
        var providedLangsNormalized = this.providedLangs.map(normalizeLang);
        lang = normalizeLang(lang);
        if (lang.length === 0) {
            return provided;
        }
        p = providedLangsNormalized.indexOf(lang);
        if (p > -1) {
            provided = this.providedLangs[p];
        }
        else if (!strict) {
            lang = lang.substr(0, 2);
            p = providedLangsNormalized.indexOf(lang);
            if (p > -1) {
                provided = this.providedLangs[p];
            }
            else {
                p = providedLangsNormalized.map(function (language) {
                    return language.substr(0, 2);
                }).indexOf(lang);
                if (p > -1) {
                    provided = this.providedLangs[p];
                }
            }
        }
        return provided;
    };
    TranslateConfig.navigator = window && window.navigator ? window.navigator : {};
    return TranslateConfig;
}());
exports.TranslateConfig = TranslateConfig;
//# sourceMappingURL=TranslateConfig.js.map