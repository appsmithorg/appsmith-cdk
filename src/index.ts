import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import {Button} from "~/widgets/Button";


const js = new JsObject("Js");

js.setSettingFor("run").onLoad(true).confirm(true)

console.log(js);

const widget = new Button();

widget._onClick = "Run Api 1";
widget.type = "ButtonWidget"
widget.visible = true;

console.log(JSON.stringify(widget))
