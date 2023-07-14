import { Datasource, DatasourceType } from "~/Datasource";

export class Mysql extends Datasource {
    id: string;
    executeOnLoad: boolean;
    isValid: boolean = true;
    invalids: Array<string> = [];
    confirmBeforeExecute: boolean;
    pluginType: string = "DB";

    constructor(name: string) {
        super(name, DatasourceType.MYSQL);
        this.setPluginId("mysql-plugin");
        this.setId(name);
    }

    setId(id: string) {
        this.setId(id);
    }
}
