import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import { Button } from "~/widgets/Button";
import { App } from "./App";
import Page from "./Page";
import { RestAPI } from "~/datasources/RestAPI";
import { Postgres } from "~/datasources/Postgres";
import { Mysql } from "~/datasources/Mysql";
import Table from "~/widgets/Table";


const app = new App("My App").setIsPublic(true).setTheme("Classic");
const page = new Page("My Page").setSlug("my-page");
const anotherPage = new Page("Another Page").setSlug("another-page");
app.addPage(page, true);
app.addPage(anotherPage, false);

const restAPIDatasource = new RestAPI("myapi");
// console.log({ restAPIDatasource });

const postgresDatasource = new Postgres("mypgdb");
// console.log({ postgresDatasource });

const mysqlDatasource = new Mysql("mysqldb");
// console.log({ mysqlDatasource });

const button1 = new Button("LeftButton");
button1.setText("Left").setAlignment("start");
page.addWidget(button1);

const button2 = new Button("RightButton");
button2.setText("Right").setAlignment("end");
page.addWidget(button2);

const button3 = new Button("CenterButton");
button3.setText("Center").setAlignment("center");
page.addWidget(button3);

const table1 = new Table("TestTable");
table1.setTableData('{{[ { "name": "Arpit"  }, { "name": "Hetu" }, { "name": "Nilansh" }, { "name": "Jimmy" }, { "name": "Dilip" }, { "name": "Hitesh" }, { "name": "Olawale" } ]}}', ["name"])
page.addWidget(table1);

app.addDatasource(restAPIDatasource);
app.addDatasource(postgresDatasource);
app.addDatasource(mysqlDatasource);

console.log(JSON.stringify(app, null, 2));
