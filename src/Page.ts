import { JsObject } from "~/JsObject";
import Widget from "~/Widget";
import { TAppsmithActionPlugin } from "./types/datasources.types";
import {
  TAppsmithActionCollection,
  TAppsmithApplication,
} from "./types/base.types";

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
  private JSObjects: JsObject[] = [];

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
      children: [],
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
    if (children.length === 0) {
      widget.setTopBottomRow(0, widget.height);
    } else {
      const lastWidget = children.slice(-1)[0];
      widget.setTopBottomRow(lastWidget.mobileBottomRow, lastWidget.mobileBottomRow + widget.height);
    }
  }

  private _updatePageFlexLayers(
    widgetId: string,
    alignment: "start" | "center" | "end"
  ) {
    const { flexLayers } = this.layouts[0].dsl;
    flexLayers.push({ children: [{ id: widgetId, align: alignment }] });
  }

  addJsObject(jsObject: JsObject): void {
    this.JSObjects.push(jsObject);
  }

  getPageJson() {
    return {
      name: this.name,
      slug: this.slug,
      layouts: this.layouts,
      userPermissions: this.userPermissions,
      policies: this.policies,
    };
  }

  getActionList() {
    const actionsList: TAppsmithActionPlugin[] = [];
    this.JSObjects.forEach(({ actionList }) => {
      actionList.forEach(
        ({ publishedAction, unpublishedAction, ...action }) => {
          actionsList.push({
            ...action,
            publishedAction: {
              ...publishedAction,
              pageId: this.name,
              collectionId: `${this.name}_${publishedAction.collectionId}`,
            },
            unpublishedAction: {
              ...unpublishedAction,
              pageId: this.name,
              collectionId: `${this.name}_${unpublishedAction.collectionId}`,
            },
          } as TAppsmithActionPlugin);
        }
      );
    });

    return actionsList;
  }

  getActionCollectionList() {
    const actionCollections: TAppsmithApplication["actionCollectionList"] = [];

    this.JSObjects.forEach(({ actionCollectionList }) => {
      actionCollectionList.forEach(
        ({ unpublishedCollection, publishedCollection, ...collection }) => {
          actionCollections.push({
            ...collection,
            publishedCollection: {
              ...publishedCollection,
              pageId: this.name,
            },
            unpublishedCollection: {
              ...unpublishedCollection,
              pageId: this.name,
            },
          });
        }
      );
    });

    return actionCollections;
  }
}

export default Page;
