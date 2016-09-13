import { TranslateService } from "./TranslateService";
export declare class TranslateComponent {
    translation: string;
    private _translate;
    private _key;
    private _params;
    constructor(translate: TranslateService);
    key: string;
    params: any;
    private _startTranslation();
}
