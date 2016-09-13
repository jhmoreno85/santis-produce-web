import { TranslateService } from "./TranslateService";
import { PipeTransform } from "@angular/core";
export declare class TranslatePipe implements PipeTransform {
    private static _parseParams(arg);
    private _translate;
    private _promise;
    private _translation;
    private _translated;
    constructor(translate: TranslateService);
    /**
     * Translates key with given args.
     *
     * @see TranslateService.translate
     * @param {string} key
     * @param {array?} args
     * @returns {string}
     */
    transform(key: string, args?: any[]): string;
    private _startTranslation();
}
