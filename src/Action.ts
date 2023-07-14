import { Appsmith } from "./Appsmith";

export class Action extends Appsmith {
    pluginType: string;
    pluginId: string;

    constructor(name: string) {
        super(name);
    }

    setPluginType(pluginType: string) {
        this.pluginType = pluginType;
    }

    setPluginId(pluginId: string) {
        this.pluginId = pluginId;
    }
}
