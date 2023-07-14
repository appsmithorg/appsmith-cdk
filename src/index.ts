import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import { Button } from "~/widgets/Button";
import { Input } from "./widgets/Input";
import { App } from "./App";
import Page from "./Page";
import { RestAPI } from "~/datasources/RestAPI";
import { Postgres } from "~/datasources/Postgres";
import { Mysql } from "~/datasources/Mysql";
import DbAction from "./actions/db-action";

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

const button1 = new Button("LeftButton");
button1.setText("Left").setAlignment("start");
page.addWidget(button1);

const button2 = new Button("RightButton");
button2.setText("Right").setAlignment("end");
page.addWidget(button2);

const button3 = new Button("CenterButton");
button3.setText("Center").setAlignment("center");
page.addWidget(button3);

const input = new Input("Input");
input.setPlaceholderText("Enter your name");
input.setLabel("Name");
input.setIsRequired(true);
input.setLabelPosition("Left");
page.addWidget(input);

app.addDatasource(restAPIDatasource);
app.addDatasource(postgresDatasource);
app.addDatasource(mysqlDatasource);

const js = new JsObject("JsObject1", "./JsObj1.ts");
const dbAction = new DbAction("DbAct1", mysqlDatasource);
page.addJsObject(js);

app.create();
