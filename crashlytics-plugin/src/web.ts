import { WebPlugin } from '@capacitor/core';
import { CrashlyticsPluginPlugin } from './definitions';

export class CrashlyticsPluginWeb extends WebPlugin implements CrashlyticsPluginPlugin {
  constructor() {
    super({
      name: 'CrashlyticsPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }


  async setUserId(options: { userId: string }): Promise<any> {
    console.log('userId', options.userId);
    return options.userId;
  }

  async log(options: { log: string }): Promise<any> {
    console.log('log', options.log);
    return options.log;
  }

  async recordException(options: { exception: string }): Promise<any> {
    console.log('log', options.exception);
    return options.exception;
  }


forceCrash(): void {
  console.log('forceCrash');
}
}

const CrashlyticsPlugin = new CrashlyticsPluginWeb();

export { CrashlyticsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CrashlyticsPlugin);
