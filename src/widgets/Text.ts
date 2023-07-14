import Widget, { WidgetType } from "~/Widget";
import { EAppsmithFontStyle, EAppsmithOverflow, EAppsmithTextAlign } from "~/types/appsmith.enum";

export class Text extends Widget {
  text: string;
  textAlign: EAppsmithTextAlign;
  overflow: EAppsmithOverflow;
  disableLink: string | boolean;
  fontFamily: string;
  fontSize: string;
  fontStyle: EAppsmithFontStyle;
  textColor: string;
  borderRadius: string;
  truncateButtonColor: string;
  dynamicBindingPathList = [
    {
      "key": "truncateButtonColor"
    },
    {
      "key": "fontFamily"
    },
    {
      "key": "borderRadius"
    },
    {
      "key": "text"
    }
  ]

  constructor(name: string) {
    super(name, WidgetType.TEXT)
    this.setHeight(17);
    this.setResponsiveBehaviour("fill");
    this.text = "Hello {{appsmith.user.name || appsmith.user.email}}";
    this.textAlign = "LEFT";
    this.overflow = "NONE";
    this.fontFamily = "{{appsmith.theme.fontFamily.appFont}}";
    this.fontSize = "1rem";
    this.fontStyle = "BOLD";
    this.textColor = "#231F20";
    this.borderRadius = "{{appsmith.theme.borderRadius.appBorderRadius}}";
    this.truncateButtonColor = "{{appsmith.theme.colors.primaryColor}}";
  }

  setText(text: string) {
    this.text = text;
    return this;
  }

  setTextAlign(textAlign: EAppsmithTextAlign) {
    this.textAlign = textAlign;
    return this;
  }

  setFontStyle(fontStyle: EAppsmithFontStyle) {
    this.fontStyle = fontStyle;
    return this;
  }

  setOverflow(overflow: EAppsmithOverflow) {
    this.overflow = overflow;
    return this;
  }

  setDisableLink(disableLink: string | boolean) {
    this.disableLink = disableLink;
    return this;
  }

  setFontFamily(fontFamily: string) {
    this.fontFamily = fontFamily;
    return this;
  }

  setFontSize(fontSize: string) {
    this.fontSize = fontSize;
    return this;
  }

  setTextColor(textColor: string) {
    this.textColor = textColor;
    return this;
  }

}