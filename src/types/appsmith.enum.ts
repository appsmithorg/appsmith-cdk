export type EAppsmithWidgetType =
  | "CANVAS_WIDGET"
  | "TEXT_WIDGET"
  | "INPUT_WIDGET_V2";
export type EAppsmithHeight =
  | "FIXED"
  | "AUTO_HEIGHT"
  | "AUTO_HEIGHT_WITH_LIMITS";
export type EAppsmithTextAlign = "LEFT" | "RIGHT" | "CENTER";
export type EAppsmithOverflow = "SCROLL" | "NONE" | "TRUNCATE";
export type EAppsmithInputType =
  | "TEXT"
  | "MULTI_LINE_TEXT"
  | "PASSWORD"
  | "EMAIL"
  | "NUMBER";
export type EAppsmithLabelAlign = "left" | "right";
export type EAppsmithLabelPosition = "Left" | "Top" | "Auto";
export type EAppsmithResponsiveBehaviour = "fill" | "hug";
export type EAppsmithRenderMode = "CANVAS";
export type EAppsmithFontStyle = "" | "BOLD,ITALIC" | "BOLD" | "ITALIC";
export type EAppsmithTreeSelectDyBindingPath =
  | "borderRadius"
  | "accentColor"
  | "options";
export type EAppsmithTreeSelectDyPropertyPath =
  | "isRequired"
  | "isVisible"
  | "animateLoading"
  | "allowClear"
  | "expandAll"
  | "onOptionChange"
  | "onDropdownOpen"
  | "onDropdownClose"
  | "labelTextColor"
  | "labelTextSize"
  | "labelStyle"
  | "borderRadius"
  | "boxShadow";
export type EAppsmithTreeSelectDyTriggerPath =
  | "onOptionChange"
  | "onDropdownOpen"
  | "onDropdownClose";
export type EAppsmithCheckboxDyPropertyPath =
  | "isRequired"
  | "defaultCheckedState"
  | "isVisible"
  | "isDisabled"
  | "animateLoading"
  | "onCheckChange"
  | "labelTextColor"
  | "labelTextSize"
  | "labelStyle";
export type EAppsmithCheckboxDyTriggerPath = "onCheckChange";
export type EAppsmithCheckboxDyBindingPath = "borderRadius" | "accentColor";
export type EAppsmithSwitchDyPropertyPath =
  | "defaultSwitchState"
  | "isVisible"
  | "isDisabled"
  | "animateLoading"
  | "onSwitchChange"
  | "labelTextSize"
  | "accentColor"
  | "labelStyle"
  | "labelTextColor"
  | "onChange";
export type EAppsmithSwitchDyTriggerPath = "onChange";

export type EAppsmithButtonDyBindingPath = "buttonColor" | "borderRadius";
export type EAppsmithButtonDynamicPropertyPath =
  | "onClick"
  | "isDisabled"
  | "isVisible"
  | "animateLoading"
  | "disabledWhenInvalid"
  | "resetFormOnClick"
  | "buttonColor"
  | "buttonVariant"
  | "iconName"
  | "placement"
  | "borderRadius"
  | "boxShadow";
export type EAppsmithButtonDynamicTriggerPath = "onClick";

export type EAppsmithIframeDyPropertyPath =
  | "animateLoading"
  | "onURLChanged"
  | "onMessageReceived"
  | "onSrcDocChanged"
  | "borderColor"
  | "borderRadius"
  | "boxShadow";
export type EAppsmithIframeDyTriggerPath =
  | "onURLChanged"
  | "onMessageReceived"
  | "onSrcDocChanged";
export type EAppsmithIframeDyBindingPath = "borderRadius" | "boxShadow";
