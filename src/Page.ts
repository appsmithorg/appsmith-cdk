import { JsObject } from "~/JsObject";
import Widget from "~/Widget";

class Page {
  // private widgets: Array<Object>;
  // private customJSFunctions: Array<JsObject>;

  private name: string;
  private slug: string;
  private layouts = [
    {
      viewMode: false,
      dsl: null,
      layoutOnLoadActions: null,
      layoutOnLoadActionErrors: null,
      validOnPageLoadActions: null,
      deleted: false,
      policies: null,
      userPermissions: null,
      id: null,
    },
  ];

  private userPermissions = null;
  private policies = null;
  private isHidden = false;

  constructor(name: string) {
    this.name = name;
    this.slug = name;
    this.layouts[0].dsl = {
      widgetName: "MainContainer",
      backgroundColor: "none",
      rightColumn: 4896.0,
      snapColumns: 64.0,
      detachFromLayout: true,
      widgetId: "0",
      topRow: 0.0,
      bottomRow: 380.0,
      containerStyle: "none",
      snapRows: 124.0,
      parentRowSpace: 1.0,
      positioning: "vertical",
      responsiveBehavior: "fill",
      type: "CANVAS_WIDGET",
      canExtend: true,
      version: 80.0,
      minHeight: 1292.0,
      dynamicTriggerPathList: [],
      flexLayers: [],
      parentColumnSpace: 1.0,
      dynamicBindingPathList: [],
      leftColumn: 0.0,
      useAutoLayout: true,
      children: []
    };
  }

  setSlug(slug: string) {
    this.slug = slug;
    return this;
  }

  getName(): string {
    return this.name;
  }

  addWidget(widget: Widget): void {
    this._updatePageFlexLayers(widget.widgetId, widget.alignment);
    this._updateNewWidgetPosition(widget);
    this.layouts[0].dsl.children.push(widget);
  }

  private _updateNewWidgetPosition(widget) {
    const { children } = this.layouts[0].dsl;
    if(children.length === 0) {
      widget.setTopBottomRow(0, widget.height);
    } else {
      const lastWidget = children.slice(-1);
      widget.setTopBottomRow(lastWidget.mobileBottomRow, lastWidget.mobileBottomRow + widget.height);
    }
  }

  private _updatePageFlexLayers(widgetId: string, alignment: "start" | "center" | "end") {
    const { flexLayers } = this.layouts[0].dsl;
    flexLayers.push({children: [{ id: widgetId, "align": alignment }]});
  }
}

export default Page;
