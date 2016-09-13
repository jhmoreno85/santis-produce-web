import { TranslateConfig } from "./TranslateConfig";
import { TranslateLoader } from "./TranslateLoader";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share";
export interface ITranslateLogHandler {
    error(message: string): void;
    info(message: string): void;
    debug(message: string): void;
}
export declare const TranslateLogHandler: ITranslateLogHandler;
export declare class TranslateService {
    languageChanged: Observable<string>;
    logHandler: ITranslateLogHandler;
    private _config;
    private _loader;
    private _lang;
    private _loadedLangs;
    private _translations;
    private _languageChangedObserver;
    constructor(config: TranslateConfig, loader: TranslateLoader, logHandler: ITranslateLogHandler);
    lang: string;
    /**
     * Detects the preferred language by navLangs.
     *
     * Returns false if the user prefers a language that is not provided or
     * the provided language.
     *
     * @param {string[]} navLangs (usually navigator.languages)
     * @returns {string|boolean}
     */
    detectLang(navLangs: string[]): string | boolean;
    /**
     * Waits for the current language to be loaded.
     *
     * @param {string?} lang
     * @returns {Promise<void>|Promise}
     */
    waitForTranslation(lang?: string): Promise<void>;
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
    translate(keys: string | string[], params?: any, lang?: string): Promise<string | string[]>;
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
    instant(keys: string | string[], params?: any, lang?: string): string | string[];
    /**
     * Load a language.
     *
     * @param {string} lang
     * @returns {Promise<void>|Promise}
     * @private
     */
    private _loadLang(lang);
    /**
     * Parses the expression in the given __context.
     *
     * @param   {string} expression
     * @param   {object} __context
     * @returns {string}
     * @private
     */
    private _parse(expression, __context);
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
    private _referencedError(sub, unexpected, expected?, pos?);
    /**
     * Gets a parameter from params defined by getter recursive.
     *
     * @param   {object} params
     * @param   {string} getter
     * @returns {any}
     * @private
     */
    private _getParam(params, getter);
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
    private _translateReferenced(sub, expression, params, lang);
}
