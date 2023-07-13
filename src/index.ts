import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import { Button } from "~/widgets/Button";
import { App } from "./App";
import Page from "./Page";
import { TAppsmithApplication } from "./types/base.types";

// const js = new JsObject("Js");

// js.setSettingFor("run").onLoad(true).confirm(true)

// console.log(js);

// const widget = new Button();

// widget._onClick = "Run Api 1";
// widget.type = "ButtonWidget"
// widget.visible = true;

// console.log(JSON.stringify(widget))

const page = new Page("My Page").setSlug("my-page");

const app = new App("My App").setIsPublic(true);

app.addPage(page);

console.log(JSON.stringify(app, null, 2));
