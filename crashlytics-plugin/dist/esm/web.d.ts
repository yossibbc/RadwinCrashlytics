import { WebPlugin } from '@capacitor/core';
import { CrashlyticsPluginPlugin } from './definitions';
export declare class CrashlyticsPluginWeb extends WebPlugin implements CrashlyticsPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    setUserId(options: {
        userId: string;
    }): Promise<any>;
    log(options: {
        log: string;
    }): Promise<any>;
    recordException(options: {
        exception: string;
    }): Promise<any>;
    forceCrash(): void;
}
declare const CrashlyticsPlugin: CrashlyticsPluginWeb;
export { CrashlyticsPlugin };
