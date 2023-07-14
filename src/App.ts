import Page from "~/Page";
import { Datasource } from "./Datasource";
import fs from "fs";

export class App {
    private pages: Array<{ page: Page; isDefault: boolean }> = [];

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
        unpublishedApplicationDetail: {
            appPositioning: {
                type: string;
            };
        };
        publishedApplicationDetail: {
            appPositioning: {
                type: string;
            };
        };
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
            unpublishedApplicationDetail: this.unpublishedApplicationDetail,
            publishedApplicationDetail: this.publishedApplicationDetail,
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
        this.actionList = [];
        this.actionCollectionList = [];
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

    getName(): string {
        return this.exportedApplication.name;
    }

    addPage(page: Page, isDefault: boolean) {
        this.pages.push({ page, isDefault });
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

    #getExportedApplication() {
        const exportedApplicationPages = this.pages.map(
            ({ page, isDefault }, index) => {
                const id = page.getName();
                return { id, isDefault };
            }
        );

        return {
            ...this.exportedApplication,
            pages: exportedApplicationPages,
            publishedPages: exportedApplicationPages,
        };
    }

    #getPageList() {
        return this.pages.map(({ page }) => ({
            unpublishedPage: page.getPageJson(),
            publishedPage: page.getPageJson(),
            deleted: false,
            gitSyncId: null,
        }));
    }

    addDatasource(datasource: Datasource): App {
        this.datasourceList.push(datasource);
        return this;
    }

    create(): void {
        // create directory if not exists
        if (!fs.existsSync("exports")) {
            fs.mkdirSync("exports", { recursive: true });
        }

        // console.log(this.toJson());

        fs.writeFile(
            `exports/${this.getName()}.json`,
            JSON.stringify(this.toJson(), null, 2),
            function (err) {
                if (err) {
                    return console.log(err);
                }
            }
        );
    }

    #getActionList() {
        const actionList = [];
        this.pages.forEach(({ page }) =>
            actionList.push(...page.getActionList())
        );
        return actionList;
    }

    #getActionCollectionList() {
        const actionCollectionList = [];
        this.pages.forEach(({ page }) =>
            actionCollectionList.push(...page.getActionCollectionList())
        );
        return actionCollectionList;
    }

    toJson(): Object {
        return {
            clientSchemaVersion: this.clientSchemaVersion,
            serverSchemaVersion: this.serverSchemaVersion,
            exportedApplication: this.#getExportedApplication(),
            datasourceList: this.datasourceList,
            customJSLibList: this.customJSLibList,
            pageList: this.#getPageList(),
            actionList: this.#getActionList(),
            actionCollectionList: this.#getActionCollectionList(),
            updatedResources: this.updatedResources,
            editModeTheme: this.editModeTheme,
            publishedTheme: this.publishedTheme,
        };
    }
}
