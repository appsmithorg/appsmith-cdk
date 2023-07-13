



export class JsObject {
  // properties
  name: string;
  private settings: {[functionName: string]: { onLoad: boolean, confirm: boolean }} = {};
  constructor(name?: string) {
    this.name = name;
  }

  setSettingFor(func: string) {
    return {
      onLoad: (settingValue: boolean) => {
        if(!(func in this.settings)) {
          this.settings[func] = {onLoad: false, confirm: false}
        }
        this.settings[func].onLoad = settingValue
        return this.setSettingFor(func);
      },
      confirm: (settingValue: boolean) => {
        if(!(func in this.settings)) {
          this.settings[func] = {onLoad: false, confirm: false}
        }
        this.settings[func].confirm = settingValue
        return this.setSettingFor(func);
      },
    }
  }
}
