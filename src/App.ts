import {Appsmith, Jsonable} from "./Appsmith";
import Page from "~/Page";

export class App extends Appsmith implements Jsonable {
  private pages: Array<Page>;

  constructor(name: string) {
    super(name);
    this.pages = new Array<Page>();
  }

  getPages(): Array<Page> {
    return this.pages;
  }

  addPage(page: Page): void {
    this.pages.push(page);
  }

  toJson(): Object {
    return {
      // TODO
    };
  }
}
