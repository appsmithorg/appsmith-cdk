type PostgresAction = {
  name: string;
  datasource: PostgresDatasourceJSON;
  pageId: string;
  actionConfiguration: {
    timeoutInMillisecond: number;
    paginationType: string;
    encodeParamsToggle: boolean;
    body: string;
    selfReferencingDataPaths: [];
    pluginSpecifiedTemplates: [{ value: boolean }];
  };
  executeOnLoad: boolean;
  dynamicBindingPathList: [];
  isValid: boolean;
  invalids: [];
  messages: [];
  jsonPathKeys: [];
  userSetOnLoad: boolean;
  confirmBeforeExecute: boolean;
  policies: [];
  userPermissions: [];
  createdAt: string;
};

interface PostgresQueryJSON {
  pluginType: string;
  pluginId: string;
  unpublishedAction: PostgresAction;
  publishedAction: PostgresAction;
  id: string;
  deleted: boolean;
  gitSyncId: string;
}

interface PostgresDatasourceJSON {
  name: string;
  pluginId: string;
  messages: [];
  isAutoGenerated: boolean;
  id: string;
  deleted: boolean;
  policies: [];
  userPermissions: [];
}

export class PostgresQuery {
  private body: string = "";
  private timeout: number = 10000;
  private executeOnLoad: boolean = false;
  private datasource: PostgresDatasource;
  private name: string;

  constructor(datasource: PostgresDatasource, name: string) {
    this.datasource = datasource;
    this.name = name;
  }

  setBody(body: string): PostgresQuery {
    this.body = body;
    return this;
  }

  setTimeout(timeout: number): PostgresQuery {
    this.timeout = timeout;
    return this;
  }

  setExecuteOnLoad(executeOnLoad: boolean): PostgresQuery {
    this.executeOnLoad = executeOnLoad;
    return this;
  }

  toJson(): PostgresQueryJSON {
    const action: PostgresAction = {
      name: this.name,
      datasource: this.datasource.toJson(),
      pageId: "",
      actionConfiguration: {
        timeoutInMillisecond: this.timeout,
        paginationType: "NONE",
        encodeParamsToggle: true,
        body: this.body,
        selfReferencingDataPaths: [],
        pluginSpecifiedTemplates: [{ value: true }],
      },
      executeOnLoad: this.executeOnLoad,
      dynamicBindingPathList: [],
      isValid: true,
      invalids: [],
      messages: [],
      jsonPathKeys: [],
      userSetOnLoad: false,
      confirmBeforeExecute: false,
      policies: [],
      userPermissions: [],
      createdAt: "2023-07-14T09:47:29Z",
    };

    const queryJSON: PostgresQueryJSON = {
      pluginType: "DB",
      pluginId: "postgres-plugin",
      unpublishedAction: action,
      publishedAction: action,
      id: this.name, // todo add pageId_name
      deleted: false,
      gitSyncId: "",
    };

    return queryJSON;
  }
}

export class PostgresDatasource {
  private name: string;
  private id: string;
  pluginId = "postgres-plugin";
  messages: [] = [];
  isAutoGenerated = false;
  deleted = false;
  policies: [] = [];
  userPermissions: [] = [];

  constructor(name: string) {
    this.name = name;
    this.id = name;
  }

  toJson(): PostgresDatasourceJSON {
    const datasourceJSON: PostgresDatasourceJSON = {
      name: this.name,
      pluginId: this.pluginId,
      messages: this.messages,
      isAutoGenerated: this.isAutoGenerated,
      id: this.id,
      deleted: this.deleted,
      policies: this.policies,
      userPermissions: this.userPermissions,
    };

    return datasourceJSON;
  }

  createQuery(name: string): PostgresQuery {
    return new PostgresQuery(this, name);
  }
}
