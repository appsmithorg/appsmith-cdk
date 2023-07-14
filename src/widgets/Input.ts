import Widget, { WidgetType } from "~/widgets/Widget";
import { EAppsmithFontStyle, EAppsmithHeight, EAppsmithInputType, EAppsmithLabelAlign, EAppsmithLabelPosition } from "~/types/appsmith.enum";

export class Input extends Widget {
  version: number;
  iconSVG: string;
  placeholderText: string;
  defaultText: string;
  label: string;
  labelPosition: EAppsmithLabelPosition;
  labelAlignment: EAppsmithLabelAlign;
  labelStyle: EAppsmithFontStyle;
  labelTextColor: string;
  tooltip: string;
  inputType: EAppsmithInputType;
  isDisabled: string | boolean;
  isRequired: string | boolean;
  resetOnSubmit: string | boolean;
  autoFocus: string | boolean;
  isSpellCheck: boolean;
  dynamicHeight: EAppsmithHeight;
  dynamicBindingPathList = [
    {
      "key": "accentColor"
    },
    {
      "key": "borderRadius"
    }
  ];
  borderRadius: string;
  accentColor: string;
  boxShadow: string;
  maxChars: string;

  constructor(name: string) {
    super(name, WidgetType.INPUT)
    this.setHeight(17);
    this.setResponsiveBehaviour("fill");
    this.version = 2.0;
    this.iconSVG = "https://appcdn.appsmith.com/static/media/icon.d0ce957b6c4640f8a7418ce846ee200e.svg";
    this.placeholderText = "";
    this.defaultText = "";
    this.label = "Label";
    this.labelPosition = "Top";
    this.labelAlignment = "left";
    this.inputType = "TEXT";
    this.isDisabled = false;
    this.isRequired = false;
    this.resetOnSubmit = false;
    this.dynamicHeight = "FIXED";
    this.borderRadius = "{{appsmith.theme.borderRadius.appBorderRadius}}";
    this.accentColor = "{{appsmith.theme.colors.primaryColor}}";
    this.autoFocus = false;
  }

  setPlaceholderText(placeholderText: string) {
    this.placeholderText = placeholderText;
    return this;
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setLabelPosition(labelPosition: EAppsmithLabelPosition) {
    this.labelPosition = labelPosition;
    return this;
  }

  setLabelAlignment(labelAlignment: EAppsmithLabelAlign) {
    this.labelAlignment = labelAlignment;
    return this;
  }

  setIsDisabled(isDisabled: string | boolean) {
    this.isDisabled = isDisabled;
    return this;
  }

  setIsRequired(isRequired: string | boolean) {
    this.isRequired = isRequired;
    return this;
  }

  setDynamicHeight(dynamicHeight: EAppsmithHeight) {
    this.dynamicHeight = dynamicHeight;
    return this;
  }

  setDefaultText(defaultText: string) {
    this.defaultText = defaultText;
    return this;
  }

  setResetOnSubmit(resetOnSubmit: string | boolean) {
    this.resetOnSubmit = resetOnSubmit;
    return this;
  }

  setAutoFocus(autoFocus: string | boolean) {
    this.autoFocus = autoFocus;
    return this;
  }

  setIsSpellCheck(isSpellCheck: boolean) {
    this.isSpellCheck = isSpellCheck;
    return this;
  }

  setMaxChars(maxChars: string | number) {
    this.maxChars = maxChars.toString();
    return this;
  }

  setLabelStyle(labelStyle: EAppsmithFontStyle) {
    this.labelStyle = labelStyle;
    return this;
  }

  setLabelTextColor(labelTextColor: string) {
    this.labelTextColor = labelTextColor;
    return this;
  }

  setTooltip(tooltip: string) {
    this.tooltip = tooltip;
    return this;
  }

  setInputType(inputType: EAppsmithInputType) {
    this.inputType = inputType;
    return this;
  }
}