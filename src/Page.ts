import { Appsmith } from "~/Appsmith";
import { JsObject } from "~/JsObject";
import { TAppsmithPage } from "./types/base.types";

class Page {
  // private widgets: Array<Object>;
  // private customJSFunctions: Array<JsObject>;

  private name = "test";
  private slug = "slug";
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
  }

  setSlug(slug: string) {
    this.slug = slug;
    return this;
  }

  // addWidget(widget: Object): void{
  //     this.widgets.push(widget);
  // }

  // addCustomJSFunc(customJSFunc: JsObject): void{
  //     this.customJSFunctions.push(customJSFunc);
  // }
}

export default Page;
