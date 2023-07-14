import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import { Button } from "~/widgets/Button";
import { App } from "./App";
import Page from "./Page";
import { RestAPI } from "~/datasources/RestAPI";
import { Postgres } from "~/datasources/Postgres";
import { Mysql } from "~/datasources/Mysql";
// const js = new JsObject("Js");

// js.setSettingFor("run").onLoad(true).confirm(true)

// console.log(js);

// const widget = new Button();

// widget._onClick = "Run Api 1";
// widget.type = "ButtonWidget"
// widget.visible = true;

// console.log(JSON.stringify(widget))

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

const button1 = new Button("Yo Button");
button1.setText("Yo yo text");
page.addWidget(button1);

app.addDatasource(restAPIDatasource);
app.addDatasource(postgresDatasource);
app.addDatasource(mysqlDatasource);

console.log(JSON.stringify(app, null, 2));
