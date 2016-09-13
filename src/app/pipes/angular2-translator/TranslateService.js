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
var TranslateConfig_1 = require("./TranslateConfig");
var TranslateLoader_1 = require("./TranslateLoader");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
exports.TranslateLogHandler = {
    debug: function () { },
    error: function (message) { return console && console.error && console.error(message); },
    info: function () { }
};
var TranslateService = (function () {
    function TranslateService(config, loader, logHandler) {
        var _this = this;
        this._loadedLangs = {};
        this._translations = {};
        this._config = config;
        this._loader = loader;
        this.logHandler = logHandler;
        this._lang = config.defaultLang;
        if (config.detectLanguageOnStart) {
            var lang = this.detectLang(config.navigatorLanguages);
            if (lang) {
                this._lang = String(lang);
                logHandler.info("Language " + lang + " got detected");
            }
        }
        this.languageChanged = new Observable_1.Observable(function (observer) { return _this._languageChangedObserver = observer; }).share();
    }
    Object.defineProperty(TranslateService.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (lang) {
            var providedLang = this._config.langProvided(lang, true);
            if (typeof providedLang === "string") {
                this._lang = providedLang;
                this.logHandler.info("Language changed to " + providedLang);
                if (this._languageChangedObserver) {
                    this._languageChangedObserver.next(this._lang);
                }
                return;
            }
            throw new Error("Language not provided");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Detects the preferred language by navLangs.
     *
     * Returns false if the user prefers a language that is not provided or
     * the provided language.
     *
     * @param {string[]} navLangs (usually navigator.languages)
     * @returns {string|boolean}
     */
    TranslateService.prototype.detectLang = function (navLangs) {
        var detected = false;
        var i;
        for (i = 0; i < navLangs.length; i++) {
            detected = this._config.langProvided(navLangs[i], true);
            if (detected) {
                break;
            }
        }
        if (!detected) {
            for (i = 0; i < navLangs.length; i++) {
                detected = this._config.langProvided(navLangs[i]);
                if (detected) {
                    break;
                }
            }
        }
        return detected;
    };
    /**
     * Waits for the current language to be loaded.
     *
     * @param {string?} lang
     * @returns {Promise<void>|Promise}
     */
    TranslateService.prototype.waitForTranslation = function (lang) {
        if (lang === void 0) { lang = this._lang; }
        var l = this._config.langProvided(lang, true);
        if (!l) {
            return Promise.reject("Language not provided");
        }
        else {
            lang = String(l);
        }
        return this._loadLang(lang);
    };
    /**
     * Translate keys for current language or given language (lang) asynchronously.
     *
     * Optionally you can pass params for translation to be interpolated.
     *
     * @param {string|string[]} keys
     * @param {any?} params
     * @param {string?} lang
     * @returns {Promise<string|string[]>|Promise}
     */
    TranslateService.prototype.translate = function (keys, params, lang) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (lang === void 0) { lang = this._lang; }
        return new Promise(function (resolve) {
            if (lang !== _this._lang) {
                var l = _this._config.langProvided(lang, true);
                if (!l) {
                    resolve(keys);
                    return;
                }
                else {
                    lang = String(l);
                }
            }
            _this._loadLang(lang).then(function () {
                resolve(_this.instant(keys, params, lang));
            }, function () {
                resolve(keys);
            });
        });
    };
    /**
     * Translate keys for current language or given language (lang) synchronously.
     *
     * Optionally you can pass params for translation to be interpolated.
     *
     * @param {string|string[]} keys
     * @param {any?} params
     * @param {string?} lang
     * @returns {string|string[]}
     */
    TranslateService.prototype.instant = function (keys, params, lang) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (lang === void 0) { lang = this._lang; }
        if (typeof keys === "string") {
            return this.instant([keys], params, lang)[0];
        }
        if (lang !== this._lang) {
            var l = this._config.langProvided(lang, true);
            if (l) {
                lang = String(l);
            }
        }
        var result = [];
        var i = keys.length;
        var t;
        while (i--) {
            if (!this._translations[lang] || !this._translations[lang][keys[i]]) {
                this.logHandler.info("Translation for '" + keys[i] + "' in language " + lang + " not found");
                result.unshift(keys[i]);
                continue;
            }
            t = this._translations[lang][keys[i]];
            t = t.replace(/\[\[([\sA-Za-z0-9_.,=:-]*)]]/g, function (sub, expression) {
                return _this._translateReferenced(sub, expression, params, lang);
            });
            // simple interpolation
            t = t.replace(/{{\s*(.*?)\s*}}/g, function (sub, expression) {
                try {
                    return _this._parse(expression, params) || "";
                }
                catch (e) {
                    _this.logHandler.error("Parsing error for expression '" + sub + "'");
                    return "";
                }
            });
            result.unshift(t);
        }
        return result;
    };
    /**
     * Load a language.
     *
     * @param {string} lang
     * @returns {Promise<void>|Promise}
     * @private
     */
    TranslateService.prototype._loadLang = function (lang) {
        var _this = this;
        if (!this._loadedLangs[lang]) {
            this._loadedLangs[lang] = new Promise(function (resolve, reject) {
                _this._loader.load(lang).then(function (translations) {
                    _this._translations[lang] = translations;
                    _this.logHandler.info("Language " + lang + " got loaded");
                    resolve();
                }, function (reason) {
                    _this.logHandler.error("Language " + lang + " could not be loaded (" + reason + ")");
                    reject(reason);
                });
            });
        }
        return this._loadedLangs[lang];
    };
    /**
     * Parses the expression in the given __context.
     *
     * @param   {string} expression
     * @param   {object} __context
     * @returns {string}
     * @private
     */
    TranslateService.prototype._parse = function (expression, __context) {
        var func = [];
        var varName;
        func.push("(function() {");
        if (Array.isArray(__context)) {
            this.logHandler.error("Parameters can not be an array.");
        }
        else {
            for (varName in __context) {
                if (!__context.hasOwnProperty(varName)) {
                    continue;
                }
                if (varName === "__context" || !varName.match(/[a-zA-Z_][a-zA-Z0-9_]*/)) {
                    this.logHandler.error("Parameter '" + varName + "' is not allowed.");
                    continue;
                }
                func.push("try { var " + varName + " = __context['" + varName + "']; } catch(e) {}");
            }
        }
        func.push("return (" + expression + "); })()");
        return eval(func.join("\n"));
    };
    /**
     * Outputs a parse error for an error in translation references.
     *
     * @param   {string} sub
     * @param   {string} unexpected
     * @param   {string} expected
     * @param   {number} pos
     * @returns {string}
     * @private
     */
    TranslateService.prototype._referencedError = function (sub, unexpected, expected, pos) {
        var msg = "Parse error unexpected " + unexpected;
        if (pos !== undefined) {
            msg += " at pos " + (pos + 3);
        }
        if (expected) {
            msg += " expected " + expected;
        }
        this.logHandler.error(msg + " in '" + sub + "'");
        return "";
    };
    /**
     * Gets a parameter from params defined by getter recursive.
     *
     * @param   {object} params
     * @param   {string} getter
     * @returns {any}
     * @private
     */
    TranslateService.prototype._getParam = function (params, getter) {
        var pos = getter.indexOf(".");
        if (pos === -1) {
            return params.hasOwnProperty(getter) ? params[getter] : undefined;
        }
        else {
            var key = getter.substr(0, pos);
            return params.hasOwnProperty(key) && typeof params[key] === "object" ?
                this._getParam(params[key], getter.substr(pos + 1)) : undefined;
        }
    };
    /**
     * Translates a reference expression like '<key> [: <param> [= <getter> [, <param..n> [= <getter..n>]]]]'
     *
     * @param   {string} sub
     * @param   {string} expression
     * @param   {Object} params
     * @param   {string} lang
     * @returns {string}
     * @private
     */
    TranslateService.prototype._translateReferenced = function (sub, expression, params, lang) {
        var _this = this;
        var j;
        var state = "wait_key";
        var key;
        var translateParams = {};
        var paramKey;
        var getter;
        var transferParam = function (useGetter) {
            if (useGetter === void 0) { useGetter = true; }
            if (useGetter && !paramKey) {
                if (typeof _this._getParam(params, getter) !== "object") {
                    _this.logHandler.error("Only objects can be passed as params in '" + sub + "'");
                }
                else {
                    translateParams = _this._getParam(params, getter);
                }
            }
            else {
                if (!useGetter) {
                    translateParams[paramKey] = _this._getParam(params, paramKey);
                }
                else {
                    translateParams[paramKey] = _this._getParam(params, getter);
                }
            }
        };
        for (j = 0; j < expression.length; j++) {
            switch (state) {
                case "wait_key":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j].match(/[A-Za-z0-9_.-]/)) {
                        state = "read_key";
                        key = expression[j];
                    }
                    else {
                        return this._referencedError(sub, "character", "key", j);
                    }
                    break;
                case "read_key":
                    if (expression[j].match(/[A-Za-z0-9_.-]/)) {
                        key += expression[j];
                    }
                    else if (expression[j] === ":") {
                        state = "wait_param";
                    }
                    else if (expression[j].match(/\s/)) {
                        state = "key_readed";
                    }
                    else {
                        return this._referencedError(sub, "character", "colon or end", j);
                    }
                    break;
                case "key_readed":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j] === ":") {
                        state = "wait_param";
                    }
                    else {
                        return this._referencedError(sub, "character", "colon or end", j);
                    }
                    break;
                case "wait_param":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j].match(/[A-Za-z0-9_]/)) {
                        state = "read_param_key";
                        paramKey = expression[j];
                    }
                    else if (expression[j] === "=") {
                        if (Object.keys(translateParams).length > 0) {
                            this.logHandler.error("Parse error only first parameter can be passed as params in " + "'" + sub + "'");
                            return "";
                        }
                        state = "wait_getter";
                    }
                    else {
                        return this._referencedError(sub, "character", "parameter", j);
                    }
                    break;
                case "read_param_key":
                    if (expression[j].match(/[A-Za-z0-9_]/)) {
                        paramKey += expression[j];
                    }
                    else if (expression[j] === "=") {
                        state = "wait_getter";
                    }
                    else if (expression[j] === ",") {
                        transferParam(false);
                        state = "wait_param";
                    }
                    else if (expression[j].match(/\s/)) {
                        state = "param_key_readed";
                    }
                    else {
                        return this._referencedError(sub, "character", "comma, equal sign or end", j);
                    }
                    break;
                case "param_key_readed":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j] === "=") {
                        state = "wait_getter";
                    }
                    else if (expression[j] === ",") {
                        transferParam(false);
                        state = "wait_param";
                    }
                    else {
                        return this._referencedError(sub, "character", "comma, equal sign or end", j);
                    }
                    break;
                case "wait_getter":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j].match(/[A-Za-z0-9_]/)) {
                        state = "read_getter";
                        getter = expression[j];
                    }
                    else {
                        return this._referencedError(sub, "character", "getter", j);
                    }
                    break;
                case "read_getter":
                    if (expression[j].match(/[A-Za-z0-9_.]/)) {
                        getter += expression[j];
                    }
                    else if (expression[j].match(/\s/)) {
                        state = "getter_readed";
                    }
                    else if (expression[j] === ",") {
                        transferParam();
                        state = "wait_param";
                    }
                    else {
                        return this._referencedError(sub, "character", "comma or end", j);
                    }
                    break;
                case "getter_readed":
                    if (expression[j].match(/\s/)) {
                    }
                    else if (expression[j] === ",") {
                        transferParam();
                        state = "wait_param";
                    }
                    else {
                        return this._referencedError(sub, "character", "comma or end", j);
                    }
                    break;
            }
        }
        switch (state) {
            case "param_key_readed":
            case "read_param_key":
                transferParam(false);
                break;
            case "getter_readed":
            case "read_getter":
                transferParam();
                break;
            case "wait_key":
                return this._referencedError(sub, "end", "key");
            case "wait_param":
                return this._referencedError(sub, "end", "parameter");
            case "wait_getter":
                return this._referencedError(sub, "end", "getter");
        }
        return String(this.instant(key, translateParams, lang));
    };
    TranslateService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(TranslateConfig_1.TranslateConfig)),
        __param(1, core_1.Inject(TranslateLoader_1.TranslateLoader)),
        __param(2, core_1.Inject(exports.TranslateLogHandler))
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;
//# sourceMappingURL=TranslateService.js.map