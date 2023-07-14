import { Appsmith } from "~/Appsmith";
import { generateKey } from "~/utils";

export enum WidgetType {
  TEXT = "TEXT_WIDGET",
  CONTAINER = "CONTAINER_WIDGET",
  CANVAS = "CANVAS_WIDGET",
  INPUT = "INPUT_WIDGET_V2",
  BUTTON = "BUTTON_WIDGET",
  TABLE = "TABLE_WIDGET_V2",
}

class Widget extends Appsmith {
  /** Operational properties  */
  type: WidgetType;
  dynamicTriggerPathList: Array<{ key: string }> = [];
  dynamicBindingPathList: Array<{ key: string }> = [];
  key = generateKey({ size: 5 });
  widgetId = generateKey({ size: 10 });
  isDeprecated = false;
  renderMode = "CANVAS";
  animateLoading = true;
  isLoading = false;
  parentId = "0";
  /** Functional properties  */
  widgetName: string;
  isVisible: true;
  version: number = 1;
  /** Position properties  */
  // Responsive position
  mobileBottomRow: number;
  mobileRightColumn = 64;
  mobileTopRow: number;
  mobileLeftColumn = 0.0;
  maxDynamicHeight = 9000.0;
  minDynamicHeight = 4.0;
  dynamicHeight = "AUTO_HEIGHT";
  responsiveBehavior: "fill" | "hug" = "fill";
  // Fixed position
  topRow = 0.0;
  bottomRow = 0.0;
  parentRowSpace = 10.0;
  parentColumnSpace = 16.5625;
  leftColumn = 0.0;
  rightColumn = 64.0;
  minWidth: number;
  alignment: "start" | "center" | "end" = "start";

  /** Temporary properties */
  height: number;

  constructor(name: string, type: WidgetType) {
    super(name);
    this.widgetName = name;
    this.type = type;
  }

  setHeight(height: number) {
    this.height = height;
    return this;
  }

  setTopBottomRow(top: number, bottom: number) {
    this.mobileTopRow = top;
    this.mobileBottomRow = bottom;
  }

  setResponsiveBehaviour(behaviour: "fill" | "hug") {
    this.responsiveBehavior = behaviour;
    return this;
  }

  setAlignment(align: "start" | "center" | "end") {
    this.alignment = align;
    return this;
  }
}

export default Widget;
