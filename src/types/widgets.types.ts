import {
  EAppsmithFontStyle,
  EAppsmithHeight,
  EAppsmithInputType,
  EAppsmithLabelAlign,
  EAppsmithLabelPosition,
  EAppsmithOverflow,
  EAppsmithRenderMode,
  EAppsmithResponsiveBehaviour,
  EAppsmithTextAlign,
} from "./appsmith.enum";

export type TAppsmithWdiget =
  | TAppsmithInputWidget
  | TAppsmithButtonWidget
  | TAppsmithTextWidget
  | TAppsmithCheckboxWidget
  | TAppsmithSwitchWidget
  | TAppsmithRadioGroupWidget
  | TAppsmithSelectWidget
  | TAppsmithCanvasWidget
  | TAppsmithTabCanvasWidget
  | TAppsmithModalCanvasWidget
  | TAppsmithChartWidget
  | TAppsmithCheckboxGroupWidget
  | TAppsmithContainerWidget
  | TAppsmithDateTimeWidget
  | TAppsmithDividerWidget
  | TAppsmithFilePickerWidget
  | TAppsmithIframeWidget
  | TAppsmithImageWidget
  | TAppsmithModalWidget
  | TAppsmithMultiSelectWidget
  | TAppsmithTreeSelectWidget
  | TAppsmithSwitchGroupWidget
  | TAppsmithTableWidget
  | TAppsmithTabsWidget
  | TAppsmithIconButton
  | TAppsmithPhoneInputWidget
  | TAppsmithCurrencyInputWidget
  | TAppsmithMenuButtonWidget
  | TAppsmithButtonGroupWidget
  | TAppsmithCodeScannerWidget
  | TAppsmithRichTextEditorWidget
  | TAppsmithDocumentViewerWidget;

export type TAppsmithPosition = {
  parentRowSpace: number;
  parentColumnSpace: number;
  topRow: number;
  bottomRow: number;
  leftColumn: number;
  rightColumn: number;
  mobileTopRow: number;
  mobileBottomRow?: number;
  mobileLeftColumn?: number;
  mobileRightColumn?: number;
  minWidth?: number;
  maxDynamicHeight?: number;
  minDynamicHeight?: number;
  originalBottomRow?: number;
  originalTopRow?: number;
};

export type TAppsmithInputWidget = TAppsmithPosition & {
  boxShadow: string;
  iconSVG: string;
  onSubmit?: string;
  tooltip?: string;
  labelWidth: string | number;
  type: "INPUT_WIDGET_V2";
  maxNum?: string;
  minNum?: string;
  animateLoading: boolean | string;
  resetOnSubmit: boolean | string;
  labelStyle: EAppsmithFontStyle;
  inputType: EAppsmithInputType;
  maxChars?: string;
  placeholderText?: string;
  isDisabled: boolean | string;
  validation?: string;
  isRequired: boolean | string;
  dynamicHeight: EAppsmithHeight;
  iconName?: string;
  accentColor: string;
  showStepArrows: boolean | string;
  isVisible: boolean | string;
  version: number;
  onFocus?: string;
  isLoading: boolean;
  regex?: string;
  borderRadius: string;
  widgetName: string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "defaultText"
      | "isRequired"
      | "label"
      | "maxChars"
      | "regex"
      | "validation"
      | "errorMessage"
      | "tooltip"
      | "placeholderText"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "autoFocus"
      | "resetOnSubmit"
      | "iconName"
      | "labelTextColor"
      | "labelTextSize"
      | "boxShadow"
      | "labelStyle";
  }[];
  dynamicPropertyPathList?: {
    key:
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "autoFocus"
      | "onTextChanged"
      | "onFocus"
      | "labelWidth"
      | "onBlur"
      | "onSubmit"
      | "resetOnSubmit"
      | "iconName"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow"
      | string;
  }[];
  dynamicTriggerPathList?: {
    key: "onTextChanged" | "onBlur" | "onFocus" | "onSubmit";
  }[];
  displayName: string;
  searchTags: string[];
  autoFocus: boolean | string;
  hideCard: boolean;
  shouldScrollContents?: boolean;
  labelPosition: EAppsmithLabelPosition;
  key: string;
  labelTextSize: string;
  onTextChanged?: string;
  isDeprecated: boolean;
  widgetId: string;
  errorMessage?: string;
  label: string;
  parentId: string;
  labelAlignment: EAppsmithLabelAlign;
  renderMode: EAppsmithRenderMode;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  isSpellCheck?: boolean;
  iconAlign: "left" | "right";
  defaultText: string;
  onBlur?: string;
  labelTextColor?: string;
};

export type TAppsmithPhoneInputWidget = TAppsmithPosition & {
  boxShadow: string;
  iconSVG: string;
  onSubmit?: string;
  tooltip?: string;
  labelWidth: string | number;
  type: "PHONE_INPUT_WIDGET";
  maxNum?: string;
  minNum?: string;
  animateLoading: boolean | string;
  resetOnSubmit: boolean | string;
  labelStyle: EAppsmithFontStyle | string;
  defaultDialCode: string;
  allowDialCodeChange: boolean | string;
  allowFormatting: boolean | string;
  maxChars?: string;
  placeholderText?: string;
  isDisabled: boolean | string;
  validation?: string;
  isRequired: boolean | string;
  dynamicHeight: EAppsmithHeight;
  iconName?: string;
  accentColor: string;
  isVisible: boolean | string;
  version: number;
  onFocus?: string;
  isLoading: boolean;
  regex?: string;
  borderRadius: string;
  widgetName: string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "defaultText"
      | "isRequired"
      | "label"
      | "maxChars"
      | "regex"
      | "validation"
      | "errorMessage"
      | "tooltip"
      | "placeholderText"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "autoFocus"
      | "resetOnSubmit"
      | "iconName"
      | "labelTextColor"
      | "labelTextSize"
      | "boxShadow"
      | "labelStyle"
      | "allowDialCodeChange"
      | "allowFormatting"
      | "defaultDialCode";
  }[];
  dynamicPropertyPathList?: {
    key:
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "autoFocus"
      | "onTextChanged"
      | "onFocus"
      | "labelWidth"
      | "onBlur"
      | "onSubmit"
      | "resetOnSubmit"
      | "iconName"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow"
      | "defaultDialCode"
      | "allowFormatting"
      | "allowDialCodeChange"
      | string;
  }[];
  dynamicTriggerPathList?: {
    key: "onTextChanged" | "onBlur" | "onFocus" | "onSubmit";
  }[];
  displayName: string;
  searchTags: string[];
  autoFocus: boolean | string;
  hideCard: boolean;
  shouldScrollContents?: boolean;
  labelPosition: EAppsmithLabelPosition;
  key: string;
  labelTextSize: string;
  onTextChanged?: string;
  isDeprecated: boolean;
  widgetId: string;
  errorMessage?: string;
  label: string;
  parentId: string;
  labelAlignment: EAppsmithLabelAlign;
  renderMode: EAppsmithRenderMode;
  responsiveBehavior?: EAppsmithResponsiveBehaviour;
  isSpellCheck?: boolean;
  iconAlign: "left" | "right";
  defaultText: string;
  onBlur?: string;
  labelTextColor?: string;
};

export type TAppsmithTextWidget = TAppsmithPosition & {
  widgetId: string;
  displayName: string;
  iconSVG: string;
  type: "TEXT_WIDGET";
  dynamicHeight: EAppsmithHeight;
  textAlign: EAppsmithTextAlign;
  searchTags: string[];
  overflow: EAppsmithOverflow;
  fontFamily: string;
  text: string;
  widgetName: string;
  hideCard: boolean;
  animateLoading: boolean;
  dynamicTriggerPathList?: { key: string }[];
  dynamicBindingPathList: {
    key:
      | string
      | "truncateButtonColor"
      | "fontFamily"
      | "borderRadius"
      | "text"
      | "borderWidth"
      | "animateLoading"
      | "disableLink"
      | "isVisible"
      | "fontSize"
      | "textColor"
      | "backgroundColor"
      | "textAlign"
      | "fontStyle";
  }[];
  dynamicPropertyPathList: {
    key:
      | string
      | "animateLoading"
      | "disableLink"
      | "isVisible"
      | "fontFamily"
      | "fontSize"
      | "textColor"
      | "backgroundColor"
      | "textAlign"
      | "fontStyle";
  }[];
  shouldTruncate: boolean;
  truncateButtonColor: string;
  key: string;
  isDeprecated: boolean;
  isVisible: boolean;
  fontStyle: EAppsmithFontStyle;
  textColor: string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  fontSize: string;
};

export type TAppsmithTreeSelectWidget = TAppsmithPosition & {
  boxShadow: string;
  labelText: string;
  labelWidth: string | number;
  hideCard: boolean;
  defaultOptionValue: string; // Default selection
  type: "SINGLE_SELECT_TREE_WIDGET";
  widgetId: string;
  displayName: string;
  iconSVG: string;
  widgetName: string;
  searchTags: string[];
  animateLoading: boolean | string; // boolean or expression
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "options"
      | "defaultOptionValue"
      | "labelText"
      | "isRequired"
      | "labelTooltip"
      | "placeholderText"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "allowClear"
      | "expandAll"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "boxShadow";
  }[];
  labelTooltip?: string;
  labelStyle?: EAppsmithFontStyle | string; // enum or expression
  labelPosition: EAppsmithLabelPosition;
  options:
    | {
        label: string;
        value: string;
        children?: {
          label: string;
          value: string;
        }[];
      }[]
    | string; // Array of options or an expression
  placeholderText: string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string; // boolean or expression
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  accentColor: string;
  isVisible: boolean | string; // boolean or expression
  version: number;
  expandAll: boolean | string; // boolean or expression
  parentId: string;
  labelAlignment: EAppsmithLabelAlign;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  allowClear: boolean | string; // boolean or expression
  onDropdownOpen?: string; // Expression
  dynamicPropertyPathList?: {
    key:
      | string
      | "isRequired"
      | "isVisible"
      | "isDisabled"
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
  }[];
  dynamicTriggerPathList?: {
    key: "onOptionChange" | "onDropdownOpen" | "onDropdownClose";
  }[];
  onDropdownClose?: string; // Expression
  onOptionChange?: string; // Expression
  labelTextColor?: string;
};

export type TAppsmithCheckboxWidget = TAppsmithPosition & {
  widgetId: string;
  displayName: string;
  iconSVG: string;
  type: "CHECKBOX_WIDGET";
  dynamicHeight: EAppsmithHeight;
  searchTags: string[];
  widgetName: string;
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key:
      | string
      | "borderRadius"
      | "accentColor"
      | "label"
      | "alignWidget"
      | "animateLoading"
      | "isDisabled"
      | "isVisible"
      | "defaultCheckedState"
      | "isRequired"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius";
  }[];
  labelPosition: "Left" | "Right";
  isDisabled: boolean | string;
  key: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  accentColor: string;
  isVisible: boolean | string;
  label: string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  defaultCheckedState: boolean | string;
  alignWidget: "LEFT" | "RIGHT";
  dynamicPropertyPathList?: {
    key:
      | string
      | "onCheckChange"
      | "animateLoading"
      | "isDisabled"
      | "isVisible"
      | "defaultCheckedState"
      | "isRequired"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "accentColor"
      | "borderRadius";
  }[];
  dynamicTriggerPathList?: {
    key: "onCheckChange";
  }[];
  labelStyle?: EAppsmithFontStyle | string;
  onCheckChange?: string;
  labelTextColor?: string;
  labelTextSize?: string;
};

export type TAppsmithSwitchWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "SWITCH_WIDGET";
  alignWidget: "LEFT" | "RIGHT";
  hideCard: boolean;
  animateLoading: boolean | string;
  labelPosition: "Left" | "Right";
  isDisabled: boolean | string;
  key: string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  accentColor: string;
  widgetId: string;
  isVisible: boolean | string;
  label: string;
  defaultSwitchState: boolean | string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  labelStyle?: EAppsmithFontStyle | string;
  labelTextColor?: string;
  labelTextSize?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "label"
      | "alignWidget"
      | "defaultSwitchState"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "accentColor";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "defaultSwitchState"
      | "onSwitchChange"
      | "accentColor"
      | "onChange";
  }[];
  dynamicTriggerPathList?: {
    key: "onChange";
  }[];
  onChange?: string;
};

export type TAppsmithButtonWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  resetFormOnClick: boolean | string;
  boxShadow: string;
  widgetName: string;
  buttonColor: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "BUTTON_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  text: string;
  isDisabled: boolean | string;
  key: string;
  isDeprecated: boolean;
  isDefaultClickDisabled: boolean | string;
  widgetId: string;
  isVisible: boolean | string;
  recaptchaType: "V2" | "V3";
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  disabledWhenInvalid: boolean | string;
  borderRadius: string;
  buttonVariant: "PRIMARY" | "SECONDARY" | "TERTIARY" | string;
  placement: "CENTER" | "START" | "BETWEEN" | string;
  iconAlign?: "left" | "right";
  iconName?: string;
  googleRecaptchaKey?: string;
  tooltip?: string;
  onClick?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "buttonColor"
      | "borderRadius"
      | "text"
      | "tooltip"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "googleRecaptchaKey"
      | "recaptchaType"
      | "disabledWhenInvalid"
      | "resetFormOnClick"
      | "buttonVariant"
      | "iconName"
      | "placement"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "buttonColor"
      | "borderRadius"
      | "onClick"
      | "disabledWhenInvalid"
      | "resetFormOnClick"
      | "buttonVariant"
      | "iconName"
      | "placement"
      | "boxShadow";
  }[];
  dynamicTriggerPathList?: {
    key: "onClick";
  }[];
};

export type TAppsmithIframeWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  source: string;
  type: "IFRAME_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  borderWidth: number | string;
  key: string;
  isDeprecated: boolean;
  widgetId: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  borderColor?: string;
  srcDoc?: string;
  title?: string;
  borderOpacity?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "borderRadius"
      | "boxShadow"
      | "source"
      | "srcDoc"
      | "title"
      | "animateLoading"
      | "borderColor"
      | "borderWidth"
      | "borderOpacity"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "onURLChanged"
      | "onMessageReceived"
      | "onSrcDocChanged"
      | "animateLoading"
      | "borderColor"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicTriggerPathList?: {
    key: "onURLChanged" | "onMessageReceived" | "onSrcDocChanged";
  }[];
  onURLChanged?: string;
  onMessageReceived?: string;
  onSrcDocChanged?: string;
};

export type TAppsmithFilePickerWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  widgetName: string;
  buttonColor: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  allowedFileTypes:
    | (
        | "image/*"
        | "video/*"
        | "audio/*"
        | "text/*"
        | ".doc"
        | "image/jpeg"
        | ".png"
      )[]
    | string;
  type: "FILE_PICKER_WIDGET_V2";
  hideCard: boolean;
  animateLoading: boolean | string;
  isDisabled: boolean | string;
  key: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  isDefaultClickDisabled: boolean | string;
  widgetId: string;
  isVisible: boolean | string;
  label: string;
  maxFileSize: number | string;
  dynamicTyping: boolean | string;
  version: number;
  fileDataType: "Base64" | "Binary" | "Text" | "Array";
  parentId: string;
  selectedFiles: any[];
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  files: any[];
  maxNumFiles: number | string;
  onFilesSelected?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "buttonColor"
      | "borderRadius"
      | "label"
      | "maxNumFiles"
      | "maxFileSize"
      | "allowedFileTypes"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "allowedFileTypes"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "onFilesSelected"
      | "buttonColor"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicTriggerPathList?: {
    key: "onFilesSelected";
  }[];
};

export type TAppsmithSelectWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  isFilterable: boolean | string;
  displayName: string;
  iconSVG: string;
  labelText: string;
  searchTags: string[];
  labelWidth: string | number;
  type: "SELECT_WIDGET";
  serverSideFiltering: boolean | string;
  hideCard: boolean;
  defaultOptionValue: string;
  animateLoading: boolean | string;
  labelTooltip?: string;
  labelPosition: "Top" | "Left" | "Auto";
  options: { label: string; value: string }[] | string;
  placeholderText: string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  minWidth: number | string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: EAppsmithLabelAlign;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  borderRadius: string;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  labelStyle?: EAppsmithFontStyle | string;
  onDropdownOpen?: string;
  onDropdownClose?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "options"
      | "defaultOptionValue"
      | "labelText"
      | "isFilterable"
      | "isRequired"
      | "labelTooltip"
      | "placeholderText"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "boxShadow"
      | "serverSideFiltering"
      | "labelWidth";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "isFilterable"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "onOptionChange"
      | "onDropdownOpen"
      | "onDropdownClose"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow"
      | "serverSideFiltering"
      | "onFilterUpdate"
      | "labelWidth";
  }[];
  dynamicTriggerPathList?: {
    key:
      | "onOptionChange"
      | "onDropdownOpen"
      | "onDropdownClose"
      | "onFilterUpdate";
  }[];
  labelTextColor?: string;
  onOptionChange?: string;
  onFilterUpdate?: string;
};

export type TAppsmithCheckboxGroupWidget = TAppsmithPosition & {
  widgetName: string;
  displayName: string;
  iconSVG: string;
  labelText: string;
  labelWidth: string | number;
  type: "CHECKBOX_GROUP_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  labelPosition: "Top" | "Left" | "Auto";
  options: { label: string; value: string }[] | string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  defaultSelectedValues: string[] | string;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: "right" | "left";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  borderRadius: string;
  isInline: boolean | string;
  shouldScrollContents?: boolean;
  onSelectionChange?: string;
  labelStyle?: EAppsmithFontStyle | string;
  optionAlignment?:
    | "unset"
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "isSelectAll"
      | "animateLoading"
      | "labelTextSize"
      | "labelStyle"
      | "optionAlignment"
      | "options"
      | "defaultSelectedValues"
      | "labelText"
      | "labelWidth"
      | "labelTooltip"
      | "labelTextColor";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "accentColor"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "isSelectAll"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "optionAlignment"
      | "borderRadius"
      | "onSelectionChange"
      | "labelWidth"
      | "options";
  }[];
  dynamicTriggerPathList?: {
    key: "onSelectionChange";
  }[];
  isSelectAll?: boolean | string;
  labelTooltip?: string;
  labelTextColor?: string;
};

export type TAppsmithRadioGroupWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  labelWidth: string | number;
  type: "RADIO_GROUP_WIDGET";
  hideCard: boolean;
  defaultOptionValue: string;
  animateLoading: boolean | string;
  labelTooltip?: string;
  labelPosition: "Top" | "Left" | "Auto";
  options: { label: string; value: string }[] | string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: "right" | "left";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  isInline: boolean | string;
  alignment: "left" | "right";
  onSelectionChange?: string;
  labelStyle?: EAppsmithFontStyle | string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "defaultOptionValue"
      | "label"
      | "labelWidth"
      | "isRequired"
      | "labelTooltip"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "options";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "accentColor"
      | "options"
      | "labelWidth"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "animateLoading"
      | "onSelectionChange"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle";
  }[];
  dynamicTriggerPathList?: {
    key: "onSelectionChange";
  }[];
  labelTextColor?: string;
  shouldScrollContents?: boolean;
  label?: string;
};

export type TAppsmithMultiSelectWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  isFilterable: boolean | string;
  displayName: string;
  iconSVG: string;
  labelText: string;
  searchTags: string[];
  labelWidth: string | number;
  type: "MULTI_SELECT_WIDGET_V2";
  serverSideFiltering: boolean | string;
  hideCard: boolean;
  defaultOptionValue: string[] | string;
  animateLoading: boolean | string;
  labelPosition: "Top" | "Left" | "Auto";
  options: { label: string; value: string }[] | string;
  placeholderText: string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  minWidth: number | string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: "right" | "left";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  borderRadius: string;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  allowSelectAll?: boolean | string;
  labelTooltip?: string;
  labelStyle?: EAppsmithFontStyle | string;
  onDropdownOpen?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "labelText"
      | "defaultOptionValue"
      | "isFilterable"
      | "serverSideFiltering"
      | "isRequired"
      | "labelTooltip"
      | "placeholderText"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "allowSelectAll"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "boxShadow"
      | "options"
      | "labelWidth";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "isFilterable"
      | "serverSideFiltering"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "allowSelectAll"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow"
      | "onOptionChange"
      | "onDropdownOpen"
      | "onDropdownClose"
      | "labelWidth"
      | "accentColor"
      | "onFilterUpdate";
  }[];
  dynamicTriggerPathList?: {
    key:
      | "onFilterUpdate"
      | "onOptionChange"
      | "onDropdownOpen"
      | "onDropdownClose";
  }[];
  onDropdownClose?: string;
  onFilterUpdate?: string;
  onOptionChange?: string;
  labelTextColor?: string;
};

export type TAppsmithSwitchGroupWidget = TAppsmithPosition & {
  widgetName: string;
  isCanvas: boolean;
  displayName: string;
  iconSVG: string;
  labelText: string;
  labelWidth: string | number;
  type: "SWITCH_GROUP_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  labelPosition: "Top" | "Left" | "Auto";
  options: { label: string; value: string }[] | string;
  isDisabled: boolean | string;
  key: string;
  labelTextSize: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  defaultSelectedValues: string[] | string;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: "right" | "left";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  isInline: boolean | string;
  alignment: "left" | "right";
  onSelectionChange?: string;
  labelStyle?: EAppsmithFontStyle | string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "options"
      | "defaultSelectedValues"
      | "labelText"
      | "labelWidth"
      | "isRequired"
      | "labelTooltip"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "animateLoading"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "labelWidth"
      | "isRequired"
      | "isVisible"
      | "isDisabled"
      | "isInline"
      | "animateLoading"
      | "onSelectionChange"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "accentColor";
  }[];
  dynamicTriggerPathList?: {
    key: "onSelectionChange";
  }[];
  labelTooltip?: string;
  shouldScrollContents?: boolean;
  labelTextColor?: string;
};

export type TAppsmithDateTimeWidget = TAppsmithPosition & {
  boxShadow: string;
  dateFormat: string;
  iconSVG: string;
  labelWidth: string | number;
  type: "DATE_PICKER_WIDGET2";
  animateLoading: boolean | string;
  labelTooltip?: string;
  isDisabled: boolean | string;
  isRequired: boolean | string;
  dynamicHeight: EAppsmithHeight;
  accentColor: string;
  isVisible: boolean | string;
  datePickerType: "DATE_PICKER";
  version: number;
  isLoading: boolean;
  timePrecision: "minute" | "second" | "None" | string;
  borderRadius: string;
  closeOnSelection: boolean;
  widgetName: string;
  minDate: string;
  displayName: string;
  searchTags: string[];
  shortcuts: boolean;
  hideCard: boolean;
  labelPosition: EAppsmithLabelPosition;
  key: string;
  labelTextSize: string;
  defaultDate: string;
  isDeprecated: boolean;
  widgetId: string;
  minWidth: number | string;
  label: string;
  parentId: string;
  labelAlignment: EAppsmithLabelAlign;
  renderMode: EAppsmithRenderMode;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  firstDayOfWeek: number | string;
  maxDate: string;
  onDateSelected?: string;
  onFocus?: string;
  onBlur?: string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "dateFormat"
      | "defaultDate"
      | "firstDayOfWeek"
      | "timePrecision"
      | "labelWidth"
      | "isRequired"
      | "minDate"
      | "maxDate"
      | "isDisabled"
      | "animateLoading"
      | "labelTextSize"
      | "labelStyle"
      | "boxShadow"
      | "labelTextColor"
      | "label"
      | "labelTooltip"
      | "isVisible";
  }[];
  dynamicPropertyPathList?: {
    key:
      | string
      | "onDateSelected"
      | "onFocus"
      | "onBlur"
      | "dateFormat"
      | "defaultDate"
      | "timePrecision"
      | "labelWidth"
      | "isRequired"
      | "minDate"
      | "maxDate"
      | "isDisabled"
      | "animateLoading"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow"
      | "labelTextColor"
      | "isVisible";
  }[];
  dynamicTriggerPathList?: {
    key: "onDateSelected" | "onFocus" | "onBlur";
  }[];
  labelStyle?: EAppsmithFontStyle | string;
  labelTextColor?: string;
};

export type TAppsmithChartWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  setAdaptiveYMin: boolean;
  widgetName: string;
  allowScroll: boolean;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "CHART_WIDGET";
  hideCard: boolean;
  chartData: {
    [key: string]: {
      seriesName: string;
      data: string;
      color?: string;
    };
  };
  animateLoading: boolean | string;
  fontFamily: string;
  dynamicBindingPathList: {
    key:
      | string
      | "borderRadius"
      | "boxShadow"
      | "accentColor"
      | "fontFamily"
      | "chartType"
      | "customFusionChartConfig"
      | "chartName"
      | "isVisible"
      | "animateLoading"
      | "setAdaptiveYMin"
      | "xAxisName"
      | "yAxisName";
  }[];
  dynamicPropertyPathList: {
    key:
      | string
      | "borderRadius"
      | "boxShadow"
      | "accentColor"
      | "fontFamily"
      | "chartType"
      | "isVisible"
      | "animateLoading"
      | "onDataPointClick";
  }[];
  dynamicTriggerPathList?: {
    key: "onDataPointClick";
  }[];
  customFusionChartConfig:
    | {
        type: "column2d";
        dataSource: {
          data: {
            label: string;
            value: number;
          }[];
          chart: {
            caption: string;
            xAxisName: string;
            yAxisName: string;
            theme: "fusion";
            alignCaptionWithCanvas: number;
            captionFontSize: string;
            captionAlignment: "center";
            captionPadding: string;
            captionFontColor: string;
            legendIconSides: string;
            legendIconBgAlpha: string;
            legendIconAlpha: string;
            legendPosition: "top";
            canvasPadding: string;
            chartLeftMargin: string;
            chartTopMargin: string;
            chartRightMargin: string;
            chartBottomMargin: string;
            xAxisNameFontSize: string;
            labelFontSize: string;
            labelFontColor: string;
            xAxisNameFontColor: string;
            yAxisNameFontSize: string;
            yAxisValueFontSize: string;
            yAxisValueFontColor: string;
            yAxisNameFontColor: string;
          };
        };
      }
    | string;
  key: string;
  isDeprecated: boolean;
  widgetId: string;
  accentColor: string;
  minWidth: number | string;
  version: number;
  parentId: string;
  labelOrientation: "auto" | "slant" | "rotate" | "stagger";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  yAxisName: string;
  chartName: string;
  borderRadius: string;
  xAxisName: string;
  chartType:
    | "COLUMN_CHART"
    | "CUSTOM_FUSION_CHART"
    | "LINE_CHART"
    | "BAR_CHART"
    | "AREA_CHART"
    | "PIE_CHART";
  isVisible?: boolean | string;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
};

export type TAppsmithMainContainerWidget = {
  widgetName: "MainContainer";
  backgroundColor: "none";
  rightColumn: number;
  snapColumns: number;
  detachFromLayout: boolean;
  widgetId: "0";
  containerStyle: "none";
  snapRows: number;
  type: "CANVAS_WIDGET";
  canExtend: boolean;
  version: number;
  minHeight: number;
  dynamicTriggerPathList?: [];
  parentColumnSpace: number;
  dynamicBindingPathList: { key: string }[];
  leftColumn: number;
  children: TAppsmithWdiget[];
  topRow: number;
  bottomRow: number;
  parentRowSpace: number;
};

export type TAppsmithCanvasWidget = Omit<
  TAppsmithPosition,
  | "maxDynamicHeight"
  | "minDynamicHeight"
  | "originalBottomRow"
  | "originalTopRow"
> & {
  widgetName: string;
  displayName: "Canvas";
  type: "CANVAS_WIDGET";
  canExtend: boolean;
  hideCard: boolean;
  minHeight: number;
  dynamicBindingPathList: { key: string }[];
  dynamicPropertyPathList?: { key: string }[];
  children: TAppsmithWdiget[];
  key: string;
  isDeprecated: boolean;
  detachFromLayout: boolean;
  widgetId: string;
  containerStyle: string;
  isVisible: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  flexLayers: [];
};

export type TAppsmithTabCanvasWidget = Omit<
  TAppsmithPosition,
  | "maxDynamicHeight"
  | "minDynamicHeight"
  | "originalBottomRow"
  | "originalTopRow"
> & {
  tabId: string;
  shouldScrollContents: boolean;
  isDisabled: boolean;
  tabName: string;
  dynamicPropertyPathList?: { key: string }[];
  widgetName: string;
  displayName: string;
  type: "CANVAS_WIDGET";
  canExtend: boolean;
  hideCard: boolean;
  minHeight: number;
  dynamicBindingPathList: { key: string }[];
  children: TAppsmithWdiget[];
  key: string;
  isDeprecated: boolean;
  detachFromLayout: boolean;
  widgetId: string;
  isVisible: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  flexLayers: [];
};

export type TAppsmithContainerWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  borderColor: string;
  isCanvas: boolean;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "CONTAINER_WIDGET" | "FORM_WIDGET"; // TODO: Remove FORM_WIDGET
  hideCard: boolean;
  shouldScrollContents: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key: "borderRadius" | "boxShadow" | string;
  }[];
  dynamicPropertyPathList?: {
    key: string;
  }[];
  children: TAppsmithCanvasWidget[];
  borderWidth: number | string;
  flexVerticalAlignment: "start";
  key: string;
  backgroundColor: string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  containerStyle: "card";
  isVisible: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  dynamicTriggerPathList?: [];
};

export type TAppsmithTabsWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  borderColor: string;
  isCanvas: boolean;
  displayName: string;
  iconSVG: string;
  type: "TABS_WIDGET";
  hideCard: boolean;
  shouldScrollContents: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key: "accentColor" | "borderRadius" | "boxShadow" | string;
  }[];
  dynamicPropertyPathList?: {
    key: string;
  }[];
  children: TAppsmithTabCanvasWidget[];
  borderWidth: number | string;
  key: string;
  backgroundColor: string;
  isDeprecated: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  accentColor: string;
  defaultTab: string;
  shouldShowTabs: boolean;
  tabsObj: {
    [key: string]: {
      label: string;
      id: string;
      widgetId: string;
      isVisible: boolean;
      index: number;
      positioning: "vertical";
    };
  };
  isVisible: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
};

export type TAppsmithImageWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  type: "IMAGE_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key: "borderRadius" | "isVisible" | "animateLoading" | "boxShadow" | string;
  }[];
  imageShape: "RECTANGLE" | "CIRCLE";
  defaultImage: string;
  dynamicTriggerPathList?: {
    key: "onClick";
  }[];
  key: string;
  image: string;
  isDeprecated: boolean;
  objectFit: "cover" | "contain" | "auto";
  widgetId: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  maxZoomLevel: number;
  enableDownload: boolean;
  borderRadius: string;
  enableRotation: boolean;
  onClick?: string;
  dynamicPropertyPathList?: {
    key: "isVisible" | "animateLoading" | "borderRadius" | "boxShadow" | string;
  }[];
};

export type TAppsmithTableWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  multiRowSelection?: boolean;
  borderColor: string;
  isVisibleDownload: boolean | string;
  iconSVG: string;
  isSortable: boolean | string;
  type: "TABLE_WIDGET_V2";
  inlineEditingSaveOption: "ROW_LEVEL" | "CUSTOM";
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key:
      | string
      | "accentColor"
      | "borderRadius"
      | "boxShadow"
      | "isVisiblePagination"
      | "isVisibleSearch"
      | "defaultSearchText"
      | "isVisibleFilters"
      | "defaultSelectedRowIndex"
      | "isSortable"
      | "allowAddNewRow"
      | "isVisible"
      | "isVisibleDownload"
      | "animateLoading"
      | "canFreezeColumn"
      | "textSize"
      | string;
  }[];
  needsHeightForContent: boolean;
  delimiter: string;
  defaultSelectedRowIndex: number | string;
  accentColor: string;
  isVisibleFilters: boolean | string;
  isVisible: boolean | string;
  enableClientSideSearch: boolean;
  version: number;
  totalRecordsCount: number | string;
  isLoading: boolean;
  childStylesheet: {
    button: {
      buttonColor: string;
      borderRadius: string;
      boxShadow: string;
    };
    menuButton: {
      menuColor: string;
      borderRadius: string;
      boxShadow: string;
    };
    iconButton: {
      buttonColor: string;
      borderRadius: string;
      boxShadow: string;
    };
    editActions: {
      saveButtonColor: string;
      saveBorderRadius: string;
      discardButtonColor: string;
      discardBorderRadius: string;
    };
  };
  borderRadius: string;
  columnUpdatedAt: number;
  defaultSelectedRowIndices: number[];
  widgetName: string;
  defaultPageSize: number;
  columnOrder: string[];
  dynamicPropertyPathList: {
    key:
      | "isVisiblePagination"
      | "isVisibleSearch"
      | "isVisibleFilters"
      | "isSortable"
      | "allowAddNewRow"
      | "isVisible"
      | "isVisibleDownload"
      | "animateLoading"
      | "canFreezeColumn"
      | "textSize"
      | "borderRadius"
      | "boxShadow"
      | string;
  }[];
  displayName: string;
  columnWidthMap: {
    [key: string]: number;
  };
  hideCard: boolean;
  borderWidth: string;
  primaryColumns: {
    [key: string]: {
      index: number;
      width: number;
      id: string;
      originalId: string;
      alias: string;
      allowSameOptionsInNewRow: boolean;
      columnType:
        | "text"
        | "button"
        | "checkbox"
        | "date"
        | "iconButton"
        | "image"
        | "menuButton"
        | "number"
        | "select"
        | "url"
        | "video"
        | "editActions"; // This is a system generated column type if any of the column is editable

      enableFilter: boolean;
      enableSort: boolean;
      isVisible: boolean;
      isCellVisible: boolean | string;
      isCellEditable: boolean | string;
      isDerived: boolean;
      label: string;
      computedValue: string;
      sticky: "" | "left" | "right";

      // Optional properties
      validation: {
        regex?: string; // number, text
        isColumnEditableCellValid?: string; // number, text
        errorMessage?: string; // number, text
        isColumnEditableCellRequired?: string | boolean; // number, text
        minDate?: string; // date
        maxDate?: string; // date
        min?: string; // number
        max?: string; // number
      };
      horizontalAlignment?: "LEFT" | "CENTER" | "RIGHT"; // not in editActions
      verticalAlignment?: "CENTER" | "TOP" | "BOTTOM"; // not in editActions
      textSize?: string; // not in editActions

      labelColor?: string; // not in number, select, text, editActions and url
      isDisabled?: boolean; // not in checkbox and date
      isEditable?: boolean | string; // not in button, checkbox, date and iconButton
      allowCellWrapping?: boolean | string; // not in button , checkbox, date and iconButton
      onSubmit?: string; // number and text

      // Styles
      cellBackground?: string;
      textColor?: string;

      isSaveVisible?: boolean; // not in button, checkbox, date and iconButton
      isDiscardVisible?: boolean; // not in button, checkbox, date and iconButton
      customAlias?: string; // button, date, iconButton and menuButton
      inputFormat?: string; // date
      outputFormat?: string; // date
      iconName?: string; // iconButton

      buttonColor?: string; // button
      buttonLabel?: string; // button
      borderRadius?: string; // button and menuButton
      boxShadow?: string; // button and menuButton
      onClick?: string; // button and iconButton

      buttonStyle?: string; // image, menuButton, video

      // menuButton
      menuColor?: string; // menuButton
      menuItemsSource?: "STATIC" | "DYNAMIC"; // menuButton
      sourceData?: []; // menuButton

      onDateSelected?: string; // date
      shortcuts?: boolean; // date
      onCheckChange?: string; // checkbox
      isCompact?: boolean; // menuButton
      isFilterable?: boolean; // select
      resetFilterTextOnClose?: boolean; // select
      serverSideFiltering?: boolean; // select
      onOptionChange?: string; // select
      onFilterUpdate?: string; // select
      saveIconAlign?: "left" | "right"; // editActions
      discardIconAlign?: "left" | "right"; // editActions
      saveActionLabel?: string; // editActions
      discardActionLabel?: string; // editActions
      saveButtonColor?: string; // editActions
      discardButtonColor?: string; // editActions
      saveBorderRadius?: string; // editActions
      discardBorderRadius?: string; // editActions
      discardButtonVariant?: "PRIMARY" | "SECONDARY" | "TERTIARY"; // editActions
      isSaveDisabled?: boolean | string; // editActions
      isDiscardDisabled?: boolean | string; // editActions
      onDiscard?: string; // editActions

      configureMenuItems?: {
        label: string;
        id: "config";
        config: {
          id: "config";
          label: string;
          isVisible: boolean;
          isDisabled: boolean;
        };
      }; // menuButton
      menuItems?: {
        [key: string]: {
          id: string;
          index: number;
          label: string;
          widgetId: string;
          isVisible: boolean;
          isDisabled: boolean;
        };
      }; // menuButton

      selectOptions?: string; // select
      placeholderText?: string; // select
      displayText?: string; // url
    };
  };
  key: string;
  canFreezeColumn: boolean | string;
  isDeprecated: boolean;
  textSize: string;
  widgetId: string;
  tableData:
    | {
        [key: string]: string;
      }[]
    | string;
  label: string;
  searchKey: string;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  horizontalAlignment: "LEFT" | "CENTER" | "RIGHT";
  isVisibleSearch: boolean | string;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  verticalAlignment: "CENTER" | "TOP" | "BOTTOM";
  isVisiblePagination: boolean | string;
  onSort?: string;
  onPageSizeChange?: string;
  onPageChange?: string;
  defaultNewRow?: string;
  variant?: "VARIANT2"; // TODO: Check this
  showInlineEditingOptionDropdown?: boolean;
  onAddNewRowDiscard?: string;
  fontStyle?: EAppsmithFontStyle | string;
  textColor?: string;
  onSearchTextChanged?: string;
  primaryColumnId?: string;
  compactMode?: "SHORT";
  onAddNewRowSave?: string;
  dynamicTriggerPathList?: {
    key:
      | "onPageChange"
      | "onPageSizeChange"
      | "onSearchTextChanged"
      | "onRowSelected"
      | "onSort"
      | "onAddNewRowSave"
      | "onAddNewRowDiscard"
      | string;
  }[];
  onRowSelected?: string;
  defaultSearchText?: string;
  allowAddNewRow?: boolean | string;
  serverSidePaginationEnabled?: boolean;
  cellBackground?: string;
};

export type TAppsmithModalCanvasWidget = Omit<
  TAppsmithPosition,
  | "maxDynamicHeight"
  | "minDynamicHeight"
  | "originalBottomRow"
  | "originalTopRow"
  | "mobileTopRow"
  | "mobileBottomRow"
  | "mobileLeftColumn"
  | "mobileRightColumn"
> & {
  widgetName: string;
  displayName: "Canvas";
  type: "CANVAS_WIDGET";
  canExtend: boolean;
  hideCard: boolean;
  minHeight: number;
  dynamicBindingPathList: { key: string }[];
  children: TAppsmithWdiget[];
  key: string;
  isDeprecated: boolean;
  detachFromLayout: boolean;
  widgetId: string;
  isVisible: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  flexLayers: [];
  shouldScrollContents: boolean;
  isDisabled: boolean;
};

export type TAppsmithModalWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  isCanvas: boolean;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "MODAL_WIDGET";
  hideCard: boolean;
  shouldScrollContents: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key: "borderRadius" | "backgroundColor" | "animateLoading" | string;
  }[];
  dynamicTriggerPathList?: {
    key: "onClose";
  }[];
  dynamicPropertyPathList?: {
    key: "borderRadius" | "backgroundColor" | "animateLoading" | string;
  }[];
  children: TAppsmithModalCanvasWidget[];
  key: string;
  isDeprecated: boolean;
  height: number;
  detachFromLayout: boolean;
  widgetId: string;
  dynamicHeight: EAppsmithHeight;
  canOutsideClickClose: boolean;
  canEscapeKeyClose: boolean;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  borderRadius: string;
  width: number;
  backgroundColor?: string;
  onClose?: string;
  minHeight: number;
};

export type TAppsmithDividerWidget = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  widgetName: string;
  thickness: string;
  dynamicBindingPathList: {
    key: "isVisible" | "animateLoading" | "dividerColor" | "thickness" | string;
  }[];
  dynamicPropertyPathList: {
    key: "isVisible" | "animateLoading" | "dividerColor" | string;
  }[];
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "DIVIDER_WIDGET";
  capType: "nc" | "arrow" | "dot";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicTriggerPathList?: [];
  key: string;
  dividerColor: string;
  orientation: "horizontal" | "vertical";
  strokeStyle: "solid" | "dashed" | "dotted";
  isDeprecated: boolean;
  widgetId: string;
  capSide: 0 | 1 | -1;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
};

export type TAppsmithIconButton = Omit<
  TAppsmithPosition,
  "maxDynamicHeight" | "minDynamicHeight"
> & {
  boxShadow: string;
  widgetName: string;
  onClick?: string;
  buttonColor: string;
  dynamicPropertyPathList: {
    key:
      | "onClick"
      | "iconName"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "buttonVariant"
      | "buttonColor"
      | "borderRadius"
      | "boxShadow"
      | string;
  }[];
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  tooltip: string;
  type: "ICON_BUTTON_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicTriggerPathList?: {
    key: "onClick";
  }[];
  key: string;
  dynamicBindingPathList: {
    key:
      | string
      | "buttonColor"
      | "borderRadius"
      | "iconName"
      | "tooltip"
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "buttonVariant"
      | "boxShadow";
  }[];
  isDisabled: boolean | string;
  isDeprecated: boolean;
  iconName: string;
  widgetId: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  borderRadius: string;
  buttonVariant: "PRIMARY" | "SECONDARY" | "TERTIARY" | string;
  responsiveBehavior?: EAppsmithResponsiveBehaviour;
};

type TAppsmithCurrencyInputWidget = TAppsmithPosition & {
  boxShadow: string;
  iconSVG: string;
  renderMode: "CANVAS";
  type: "CURRENCY_INPUT_WIDGET";
  dynamicBindingPathList: {
    key:
      | "accentColor"
      | "borderRadius"
      | "defaultCurrencyCode"
      | "allowCurrencyChange"
      | "decimals"
      | "defaultText"
      | "label"
      | "labelWidth"
      | "isRequired"
      | "placeholderText"
      | "showStepArrows"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "autoFocus"
      | "regex"
      | "validation"
      | "errorMessage"
      | "tooltip"
      | "resetOnSubmit"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "boxShadow";
  }[];
  dynamicTriggerPathList?: {
    key: "onTextChanged" | "onFocus" | "onBlur" | "onSubmit";
  }[];
  dynamicPropertyPathList: {
    key:
      | "defaultCurrencyCode"
      | "allowCurrencyChange"
      | "decimals"
      | "labelWidth"
      | "isRequired"
      | "showStepArrows"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "autoFocus"
      | "onTextChanged"
      | "onFocus"
      | "onBlur"
      | "onSubmit"
      | "resetOnSubmit"
      | "labelTextColor"
      | "labelTextSize"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicHeight: "FIXED" | "AUTO_HEIGHT" | "AUTO_HEIGHT_WITH_LIMITS";
  labelAlignment: "left" | "right";
  labelPosition: "Left" | "Top" | "Auto";
  iconAlign: "left" | "right";

  tooltip: string;
  defaultCurrencyCode: string; // TODO
  labelWidth: string | number;
  animateLoading: boolean | string;
  resetOnSubmit: boolean | string;
  labelStyle: EAppsmithFontStyle | string;
  placeholderText: string;
  isDisabled: boolean | string;
  isRequired: boolean | string;
  accentColor: string;
  showStepArrows: boolean | string; // TODO
  isVisible: boolean | string;
  allowCurrencyChange: boolean | string; // TODO
  version: number;
  isLoading: boolean;
  borderRadius: string;
  widgetName: string;
  displayName: string;
  searchTags: string[];
  autoFocus: boolean | string;
  hideCard: boolean;
  key: string;
  labelTextSize: string;
  isDeprecated: boolean;
  widgetId: string;
  label: string;
  parentId: string;
  decimals: number | string;
  defaultText: string;
  onSubmit?: string;
  onFocus?: string;
  onBlur?: string;
  onTextChanged?: string;
  onCurrencyCodeChanged?: string;
  onCurrencyCodeSelected?: string;
  validation: boolean | string;
  regex: string;
  labelTextColor?: string;
  errorMessage?: string;
  responsiveBehavior: "fill" | "hug";
};

type TAppsmithMenuButtonWidget = TAppsmithPosition & {
  isCompact: boolean | string;
  boxShadow: string;
  widgetName: string;
  configureMenuItems: {
    label: string;
    id: "config";
    config: {
      id: "config";
      label: string;
      isVisible: boolean | string;
      isDisabled: boolean | string;
      onClick?: string;
    };
  };
  displayName: string;
  iconSVG: string;
  type: "MENU_BUTTON_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicPropertyPathList?: {
    key:
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "isCompact"
      | "iconName"
      | "menuVariant"
      | "menuColor"
      | "borderRadius"
      | "boxShadow"
      | string;
  }[];
  dynamicTriggerPathList?: { key: string }[];
  dynamicBindingPathList: {
    key:
      | "menuColor"
      | "borderRadius"
      | "sourceData"
      | "label"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "isCompact"
      | "menuVariant"
      | "iconName"
      | "boxShadow"
      | string;
  }[];
  isDisabled: boolean | string;
  sourceData: [] | string;
  key: string;
  isDeprecated: boolean;
  menuVariant: "PRIMARY" | "SECONDARY" | "TERTIARY" | string;
  widgetId: string;
  menuItems: {
    [key: string]: {
      label: string;
      id: string;
      widgetId: string;
      isVisible: boolean;
      isDisabled: boolean;
      index: number;
      onClick?: string;
    };
  };
  isVisible: boolean | string;
  label: string;
  version: number;
  parentId: string;
  renderMode: "CANVAS";
  isLoading: boolean;
  borderRadius: string;
  menuItemsSource: "STATIC" | "DYNAMIC";
  menuColor: string;
  placement: "CENTER" | "START";
  iconName?: string;
  iconAlign?: "left" | "right";
};

type TAppsmithButtonGroupWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  groupButtons: {
    [key: string]: {
      label: string;
      iconName: string;
      id: string;
      buttonType: "SIMPLE" | "MENU" | string;
      placement: "CENTER" | "START";
      widgetId: string;
      isVisible: boolean | string;
      isDisabled: boolean | string;
      index: number;
      buttonColor: string;
      onClick?: string;
      menuItems: {
        [key: string]: {
          label: string;
          backgroundColor: string;
          id: string;
          widgetId: string;
          onClick: string;
          isVisible: boolean;
          isDisabled: boolean;
          index: number;
          iconName?: string;
          iconColor?: string;
          iconAlign?: "left" | "right";
          textColor?: string;
        };
      };
    };
  };
  displayName: string;
  iconSVG: string;
  type: "BUTTON_GROUP_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicTriggerPathList?: { key: string }[];
  dynamicBindingPathList: {
    key: "borderRadius" | string;
  }[];
  dynamicPropertyPathList: {
    key:
      | "isVisible"
      | "isDisabled"
      | "animateLoading"
      | "buttonVariant"
      | "borderRadius"
      | "boxShadow"
      | string;
  }[];
  key: string;
  isDeprecated: boolean;
  widgetId: string;
  orientation: "horizontal" | "vertical";
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: "CANVAS";
  isLoading: boolean;
  responsiveBehavior: "fill" | "hug";
  borderRadius: string;
  buttonVariant: "PRIMARY" | "SECONDARY" | "TERTIARY" | string;
  isCanvas: boolean;
  searchTags: string[];
  childStylesheet: {
    button: {
      buttonColor: string;
    };
  };
  isDisabled: boolean | string;
};

type TAppsmithCodeScannerWidget = TAppsmithPosition & {
  scannerLayout: "ALWAYS_ON" | "CLICK_TO_SCAN";
  boxShadow: string;
  widgetName: string;
  buttonColor: string;
  dynamicPropertyPathList: {
    key:
      | "buttonColor"
      | "borderRadius"
      | "boxShadow"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "onCodeDetected";
  }[];
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "CODE_SCANNER_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicTriggerPathList?: { key: "onCodeDetected" }[];
  dynamicBindingPathList: {
    key:
      | "buttonColor"
      | "borderRadius"
      | "label"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "tooltip"
      | "boxShadow";
  }[];
  key: string;
  isDeprecated: boolean;
  widgetId: string;
  isVisible: boolean | string;
  label: string;
  version: number;
  parentId: string;
  renderMode: "CANVAS";
  isLoading: boolean;
  borderRadius: string;
  placement: "CENTER" | "START" | "BETWEEN";
  isDisabled: boolean | string;
  isRequired: boolean | string;
  isDefaultClickDisabled: boolean;
  responsiveBehavior: "fill" | "hug";
  tooltip?: string;
  iconAlign?: "left" | "right";
  onCodeDetected?: string;
  iconName?: string;
};

type TAppsmithRichTextEditorWidget = TAppsmithPosition & {
  boxShadow: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  labelText: string;
  searchTags: string[];
  labelWidth: number | string;
  type: "RICH_TEXT_EDITOR_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key:
      | "borderRadius"
      | "boxShadow"
      | "defaultText"
      | "labelText"
      | "isRequired"
      | "labelWidth"
      | "labelTooltip"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "isToolbarHidden"
      | "labelTextColor"
      | "labelStyle";
  }[];
  dynamicPropertyPathList?: {
    key:
      | "labelWidth"
      | "isRequired"
      | "isVisible"
      | "animateLoading"
      | "isDisabled"
      | "isToolbarHidden"
      | "onTextChange"
      | "labelTextColor"
      | "labelStyle"
      | "borderRadius"
      | "boxShadow";
  }[];
  dynamicTriggerPathList?: {
    key: "onTextChange";
  }[];
  isToolbarHidden?: boolean | string;
  labelTextColor?: string;
  labelTextSize?: string;
  labelTooltip?: string;
  labelStyle?: EAppsmithFontStyle | string;
  labelPosition: "Left" | "Top" | "Auto";
  inputType: "html" | "markdown";
  isDisabled: boolean | string;
  key: string;
  isRequired: boolean | string;
  isDeprecated: boolean;
  isDefaultClickDisabled: boolean;
  dynamicHeight: EAppsmithHeight;
  widgetId: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  labelAlignment: "left" | "right";
  renderMode: EAppsmithRenderMode;
  isLoading: boolean;
  responsiveBehavior: EAppsmithResponsiveBehaviour;
  borderRadius: string;
  defaultText: string;
  onTextChange?: string;
};

type TAppsmithDocumentViewerWidget = TAppsmithPosition & {
  docUrl: string;
  widgetName: string;
  displayName: string;
  iconSVG: string;
  searchTags: string[];
  type: "DOCUMENT_VIEWER_WIDGET";
  hideCard: boolean;
  animateLoading: boolean | string;
  dynamicBindingPathList: {
    key: "isVisible" | "animateLoading" | "docUrl";
  }[];
  dynamicPropertyPathList?: {
    key: "isVisible" | "animateLoading";
  }[];
  dynamicTriggerPathList?: [];
  key: string;
  isDeprecated: boolean;
  widgetId: string;
  isVisible: boolean | string;
  version: number;
  parentId: string;
  renderMode: "CANVAS";
  isLoading: boolean;
  responsiveBehavior: "fill" | "hug";
  isCanvas: boolean;
};

const listWidget = {
  boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
  requiresFlatWidgetChildren: true,
  isCanvas: true,
  iconSVG:
    "https://appcdn.appsmith.com/static/media/icon.35f3ec19dbc201b2b26e900b1eeb08a0.svg",
  topRow: 10.0,
  pageSize: 3.0,
  type: "LIST_WIDGET_V2",
  itemSpacing: 8.0,
  animateLoading: true,
  dynamicBindingPathList: [
    { key: "currentItemsView" },
    { key: "selectedItemView" },
    { key: "triggeredItemView" },
    { key: "primaryKeys" },
    { key: "accentColor" },
    { key: "borderRadius" },
    { key: "boxShadow" },
  ],
  leftColumn: 0.0,
  enhancements: true,
  itemBackgroundColor: "#FFFFFF",
  accentColor: "{{appsmith.theme.colors.primaryColor}}",
  isVisible: true,
  hasMetaWidgets: true,
  isLoading: false,
  mainCanvasId: "byuxl2c5nz",
  borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
  additionalStaticProps: [
    "level",
    "levelData",
    "prefixMetaWidgetId",
    "metaWidgetId",
  ],
  mobileBottomRow: 50.0,
  currentItemsView: "{{[]}}",
  triggeredItemView: "{{{}}}",
  widgetName: "List1",
  listData: [
    {
      id: "001",
      name: "Blue",
      img: "https://assets.appsmith.com/widgets/default.png",
    },
    {
      id: "002",
      name: "Green",
      img: "https://assets.appsmith.com/widgets/default.png",
    },
    {
      id: "003",
      name: "Red",
      img: "https://assets.appsmith.com/widgets/default.png",
    },
  ],
  displayName: "List",
  bottomRow: 50.0,
  parentRowSpace: 10.0,
  hideCard: false,
  templateBottomRow: 16.0,
  mobileRightColumn: 19.0,
  mainContainerId: "w0qzj0mq5g",
  primaryKeys:
    '{{List1.listData.map((currentItem, currentIndex) => currentItem["id"] )}}',
  parentColumnSpace: 17.078125,
  gridType: "vertical",
  key: "ntuuuzh7ib",
  backgroundColor: "transparent",
  isDeprecated: false,
  rightColumn: 34.0,
  widgetId: "4jiz1k2byo",
  minWidth: 450.0,
  parentId: "0",
  renderMode: "CANVAS",
  mobileTopRow: 10.0,
  responsiveBehavior: "fill",
  mobileLeftColumn: 0.0,
  selectedItemView: "{{{}}}",
};
