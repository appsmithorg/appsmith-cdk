import Widget from "~/Widget";

export class Button extends Widget {
  set _onClick(value: string) {
    this.onClick = value;
  }
  private onClick: string;
  constructor(name?: string) {
    super(name)
  }
}
