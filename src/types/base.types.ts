import {
  TAppsmithActionPlugin,
  TAppsmithMinDataSource,
} from "./datasources.types";
import { TAppsmithMainContainerWidget } from "./widgets.types";

export type TAppsmithPage = {
  name: string;
  slug: string;
  layouts: {
    viewMode: boolean;
    dsl: TAppsmithMainContainerWidget;
    layoutOnLoadActions: {
      id: string;
      name: string;
      confirmBeforeExecute: boolean;
      pluginType: "DB" | "JS";
      jsonPathKeys: string[];
      timeoutInMillisecond: number;
    }[];
    layoutOnLoadActionErrors: any[];
    validOnPageLoadActions: boolean;
    id: string;
    deleted: boolean;
    policies: any[];
    userPermissions: any[];
  }[];
  userPermissions: [];
  policies: [];
  isHidden: boolean;
};

export type TAppsmithActionCollection = {
  name: string;
  pageId: string;
  pluginId: "js-plugin";
  pluginType: "JS";
  actions: any[];
  archivedActions: any[];
  body: string;
  variables: any[];
  userPermissions: any[];
};

export type TAppsmithApplication = {
  clientSchemaVersion: number;
  serverSchemaVersion: number;
  exportedApplication: {
    name: string;
    isPublic: boolean;
    pages: Array<{ id: string; isDefault: boolean }>;
    publishedPages: Array<{ id: string; isDefault: boolean }>;
    viewMode: boolean;
    appIsExample: boolean;
    unreadCommentThreads: number;
    color: string;
    icon: string;
    slug: string;
    unpublishedAppLayout: { type: "DESKTOP" };
    publishedAppLayout: { type: "DESKTOP" };
    unpublishedCustomJSLibs: any[];
    publishedCustomJSLibs: any[];
    evaluationVersion: number;
    applicationVersion: number;
    embedSetting: {
      height: string;
      width: string;
      showNavigationBar: boolean;
    };
    collapseInvisibleWidgets: boolean;
    isManualUpdate: boolean;
    deleted: boolean;
  };
  datasourceList: TAppsmithMinDataSource[];
  customJSLibList: any[]; // TODO: Add type
  pageList: {
    unpublishedPage: TAppsmithPage;
    publishedPage: TAppsmithPage;
    deleted: boolean;
    gitSyncId: string;
  }[];
  actionList: TAppsmithActionPlugin[];
  actionCollectionList: {
    unpublishedCollection: TAppsmithActionCollection;
    publishedCollection: TAppsmithActionCollection;
    id: string;
    deleted: boolean;
    gitSyncId: string;
  }[];
  updatedResources: {
    customJSLibList: any[];
    actionList: string[];
    pageList: string[];
    actionCollectionList: string[];
  };
  editModeTheme: any;
  publishedTheme: any;
};
