import { Datasource, DatasourceType } from "~/Datasource";

export class Mysql extends Datasource {
  constructor(name: string) {
    super(name, DatasourceType.MYSQL);
    this.setPluginId("mysql-plugin");
  }
}
