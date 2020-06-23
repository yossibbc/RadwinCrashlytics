import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CrashlyticsPlugin } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class CrashlyticsService {

  constructor() { }

  async setUserId(userId: string) {
    await CrashlyticsPlugin.setUserId({userId});
  }

  forceCrash() {
    CrashlyticsPlugin.forceCrash();
  }

}
