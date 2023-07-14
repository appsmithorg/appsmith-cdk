import Page from "~/Page";
import { Datasource } from "./Datasource";

export class App {
  private pages: Array<Page>;

  private clientSchemaVersion = 1;
  private serverSchemaVersion = 6;
  private exportedApplication: {
    name: string;
    isPublic: boolean;
    pages: Array<{ id: string; isDefault: boolean }>;
    publishedPages: Array<{ id: string; isDefault: boolean }>;
    viewMode: boolean;
    appIsExample: boolean;
    unreadCommentThreads: number;
    color: string; // hard-coding a color here
    icon: string;
    slug: string;
    unpublishedAppLayout: { type: "DESKTOP" };
    publishedAppLayout: { type: "DESKTOP" };
    unpublishedCustomJSLibs: [];
    publishedCustomJSLibs: [];
    evaluationVersion: number;
    applicationVersion: number;
    embedSetting: null;
    collapseInvisibleWidgets: true;
    isManualUpdate: boolean;
    deleted: boolean;
  };
  private datasourceList = null;
  private customJSLibList = null;
  private pageList: {
    unpublishedPage: Page;
    publishedPage: Page;
    deleted: boolean;
    gitSyncId: string;
  }[];
  private actionList = null;
  private actionCollectionList = null;
  private updatedResources = null;
  private editModeTheme = null;
  private publishedTheme = null;
  private unpublishedApplicationDetail = {
    appPositioning: {
      type: "AUTO",
    },
  };
  private publishedApplicationDetail = {
    appPositioning: {
      type: "AUTO",
    },
  };

  constructor(name: string) {
    this.exportedApplication = {
      name: name,
      isPublic: false,
      pages: [],
      publishedPages: [],
      viewMode: false,
      appIsExample: false,
      unreadCommentThreads: 0,
      color: "#D9E7FF", // hard-coding a color here
      icon: "card",
      slug: "",
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
    };
    this.pageList = [];
    this.datasourceList = [];
    this.editModeTheme = {
      name: "Default",
      displayName: "Modern",
      isSystemTheme: true,
      deleted: false,
    };
    this.publishedTheme = {
      name: "Default",
      displayName: "Modern",
      isSystemTheme: true,
      deleted: false,
    };
  }

  setIsPublic(isPublic: boolean) {
    this.exportedApplication.isPublic = isPublic;
    return this;
  }

  setTheme(theme: string) {
    this.editModeTheme = {
      name: theme,
      displayName: theme,
      isSystemTheme: true,
      deleted: false,
    };
    this.publishedTheme = {
      name: theme,
      displayName: theme,
      isSystemTheme: true,
      deleted: false,
    };
    return this;
  }

  getPages(): Array<Page> {
    return this.pages;
  }

  addPage(page: Page, isDefault: boolean) {
    const id = page.getName();
    this.exportedApplication.pages.push({ id, isDefault });
    this.exportedApplication.publishedPages.push({ id, isDefault });

    this.pageList.push({
      unpublishedPage: page,
      publishedPage: page,
      deleted: false,
      gitSyncId: null,
    });
    return this;
  }

  addDatasource(datasource: Datasource): App {
    this.datasourceList.push(datasource);
    return this;
  }

  toJson(): Object {
    return {
      // TODO
    };
  }
}
