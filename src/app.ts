class App {
    private pages: Array<Object>;

    constructor() {
        this.pages = new Array<Object>;
    }

    getPages(): Array<Object>{
        return this.pages;
    }

    addPage(page: Object): void{
        this.pages.push(page);
    }

}
