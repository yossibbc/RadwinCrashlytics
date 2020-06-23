declare module '@capacitor/core' {
  interface PluginRegistry {
    CrashlyticsPlugin: CrashlyticsPluginPlugin;
  }
}

export interface CrashlyticsPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  setUserId(options: { userId: string }): Promise<any>;
  log(options: { log: string }): Promise<any>;
  recordException(options: { exception: string }): Promise<any>;
  forceCrash(): void;
}
