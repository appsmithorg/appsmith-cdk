import Page from "~/Page";
import { TAppsmithApplication } from "~/types/base.types";

export class App {
  private pages: Array<Page>;
  private app: TAppsmithApplication;

  private clientSchemaVersion = 1;
  private serverSchemaVersion = 6;
  private exportedApplication: {
    name: "";
    isPublic: false;
    pages: [];
    publishedPages: [];
    viewMode: false;
    appIsExample: false;
    unreadCommentThreads: 0;
    color: "#D9E7FF"; // hard-coding a color here
    icon: "card";
    slug: "";
    unpublishedAppLayout: { type: "DESKTOP" };
    publishedAppLayout: { type: "DESKTOP" };
    unpublishedCustomJSLibs: [];
    publishedCustomJSLibs: [];
    evaluationVersion: 2;
    applicationVersion: 2;
    embedSetting: null;
    collapseInvisibleWidgets: true;
    isManualUpdate: false;
    deleted: false;
  };
  private datasourceList = null;
  private customJSLibList = null;
  private pageList = null;
  private actionList = null;
  private actionCollectionList = null;
  private updatedResources = null;
  private editModeTheme = null;
  private publishedTheme = null;

  constructor(name: string) {
    this.app = {
      clientSchemaVersion: 1,
      serverSchemaVersion: 6,
      exportedApplication: {
        name: name,
        isPublic: false,
        pages: [],
        publishedPages: [],
        viewMode: false,
        appIsExample: false,
        unreadCommentThreads: 0,
        color: "#D9E7FF", // hard-coding a color here
        icon: "card",
        slug: name,
        unpublishedAppLayout: { type: "DESKTOP" },
        publishedAppLayout: { type: "DESKTOP" },
        unpublishedCustomJSLibs: [],
        publishedCustomJSLibs: [],
        evaluationVersion: 2,
        applicationVersion: 2,
        embedSetting: null,
        collapseInvisibleWidgets: true,
        isManualUpdate: false,
        deleted: false,
      },
      datasourceList: null,
      customJSLibList: null,
      pageList: null,
      actionList: null,
      actionCollectionList: null,
      updatedResources: null,
      editModeTheme: null,
      publishedTheme: null,
    };
  }

  setIsPublic(isPublic: boolean) {
    this.app.exportedApplication.isPublic = isPublic;
    return this;
  }

  getPages(): Array<Page> {
    return this.pages;
  }

  addPage(page: Page): void {
    this.app.exportedApplication.pages.push(page);
  }

  toJson(): Object {
    return {
      // TODO
    };
  }
}
