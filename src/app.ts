import { Appsmith } from "./appsmith";

export class App extends Appsmith {
  private pages: Array<Object>;

  constructor(name: string) {
    super(name);
    this.pages = new Array<Object>();
  }

  getPages(): Array<Object> {
    return this.pages;
  }

  addPage(page: Object): void {
    this.pages.push(page);
  }

  toJson(): Object {
    return {};
  }
}
