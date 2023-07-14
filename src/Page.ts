import { JsObject } from "~/JsObject";

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
    // this.widgets = new Array<Object>;
    // this.customJSFunctions = new Array<JsObject>;
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

  addWidget(widget: Object): void {
    this.layouts[0].dsl.children.push(widget);
  }

  // addCustomJSFunc(customJSFunc: JsObject): void{
  //     this.customJSFunctions.push(customJSFunc);
  // }
}

export default Page;
