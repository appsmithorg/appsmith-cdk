import { Datasource, DatasourceType } from "~/Datasource";

export class Postgres extends Datasource {
  constructor(name: string) {
    super(name, DatasourceType.POSTGRES);
    this.setPluginId("postgres-plugin");
  }
}
