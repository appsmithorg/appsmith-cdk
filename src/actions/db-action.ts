import { Action } from "~/Action";
import { Datasource } from "~/Datasource";

class DbAction extends Action {
    unpublishedAction: {
        name: string;
        datasource: Datasource;
        pageId: string;
        actionConfiguration: {
            timeoutInMillisecond: number;
            paginationType: string;
            encodeParamsToggle: string;
            body: string;
        };
        executeOnLoad: boolean;
        isValid: boolean;
        messages: Array<string>;
        userSetOnLoad: boolean;
        confirmBeforeExecute: boolean;
        policies: Array<string>;
        userPermissions: Array<string>;
    };

    id: string;
    deleted: string;
    gitSyncId: string;

    constructor(name: string, datasource: Datasource, pageId: string) {
        super(name);
        this.unpublishedAction.name = name;
        this.unpublishedAction.datasource = datasource;
        this.unpublishedAction.pageId = pageId;
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
