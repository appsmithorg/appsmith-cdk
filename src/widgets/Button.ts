import Widget from "~/Widget";
import widget from "~/Widget";
import {Jsonable} from "~/Appsmith";

export class Button extends Widget {
  set _onClick(value: string) {
    this.onClick = value;
  }
  private onClick: string;
  constructor(name?: string) {
    super(name)
  }
}
