import { TranslateLoader } from "./TranslateLoader";
import { Http } from "@angular/http";
export declare class TranslateLoaderJsonConfig {
    path: string;
    extension: string;
    constructor(path?: string, extension?: string);
}
export declare class TranslateLoaderJson extends TranslateLoader {
    private _http;
    private _config;
    constructor(http: Http, config: TranslateLoaderJsonConfig);
    load(lang: string): Promise<Object>;
}
