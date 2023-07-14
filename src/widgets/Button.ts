import Widget, { WidgetType } from "~/widgets/Widget";

export class Button extends Widget {
  resetFormOnClick: boolean;
  disabledWhenInvalid: boolean;
  boxShadow = "none";
  buttonColor = "{{appsmith.theme.colors.primaryColor}}";
  borderRadius = "{{appsmith.theme.borderRadius.appBorderRadius}}";
  text: string;
  isDefaultClickDisabled = true;
  recaptchaType = "V3";
  version = 1.0;
  dynamicBindingPathList = [
    {
      key: "buttonColor",
    },
    {
      key: "borderRadius",
    },
  ];

  buttonVariant: "PRIMARY" | "SECONDARY" | "TERTIARY" = "PRIMARY";
  placement: "START" | "BETWEEN" | "CENTER" = "CENTER";

  onClick: string

  constructor(name: string) {
    super(name, WidgetType.BUTTON);
    this.setHeight(17);
    this.setResponsiveBehaviour("hug");
    this.setAlignment("center");
  }

  isDisabled: string | boolean;

  setText(text: string) {
    this.text = text;
    return this;
  }

  setIsDisabled(isDisabled: string | boolean) {
    this.isDisabled = isDisabled;
    return this;
  }

  setVariant(variant: "PRIMARY" | "SECONDARY" | "TERTIARY") {
    this.buttonVariant = variant;
    return this;
  }

  setPlacement(placement: "START" | "BETWEEN" | "CENTER") {
    this.placement = placement;
    return this;
  }

  setResetFormOnClick(resetForm: boolean) {
    this.resetFormOnClick = resetForm;
    return this;
  }

  setDisabledWhenInvalid(disabled: boolean) {
    this.disabledWhenInvalid = disabled;
    return this;
  }

  setOnClick(binding: string) {
    this.dynamicTriggerPathList.push({
      key: "onClick"
    });
    this.onClick = binding;
  }
}
