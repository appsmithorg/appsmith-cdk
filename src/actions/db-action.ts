import { Action } from "~/Action";
import { Datasource } from "~/Datasource";
import {
    TAppsmithSQLAction,
    TAppsmithSQLDatasource,
} from "~/types/datasources.types";

class DbAction extends Action {
    pluginId: "postgres-plugin" | "mysql-plugin";
    pluginType: string;
    unpublishedAction: TAppsmithSQLAction;
    publishedAction: TAppsmithSQLAction;
    id: string;
    deleted: boolean;
    gitSyncId: string;

    constructor(name: string, datasource: Datasource) {
        super(name);
        this.unpublishedAction.name = name;
        this.unpublishedAction.datasource = datasource;
        this.gitSyncId = "648534525262b67a9831198d_64b0e21337e38813fa9699e6";
        this.setPluginId(datasource.pluginId);
        this.setPluginType("DB");
    }

    setTimeout(timeout: number) {
        this.unpublishedAction.actionConfiguration.timeoutInMillisecond =
            timeout;
        return this;
    }

    onLoad(value: boolean) {
        this.unpublishedAction.executeOnLoad = value;
        return this;
    }

    query(body: string) {
        this.unpublishedAction.actionConfiguration.body = body;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }
}

export default DbAction;
