import { Datasource, DatasourceType } from "~/Datasource";

export class RestAPI extends Datasource {
  constructor(name: string) {
    super(name, DatasourceType.RESTAPI);
    this.setPluginId("restapi-plugin");
  }
}
