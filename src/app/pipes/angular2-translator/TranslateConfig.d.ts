export declare class TranslateConfig {
    static navigator: any;
    defaultLang: string;
    providedLangs: string[];
    detectLanguageOnStart: boolean;
    navigatorLanguages: string[];
    constructor({defaultLang, providedLangs, detectLanguageOnStart}: {
        defaultLang?: string;
        providedLangs?: string[];
        detectLanguageOnStart?: boolean;
    });
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
    langProvided(lang: string, strict?: boolean): string | boolean;
}
