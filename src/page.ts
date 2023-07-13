class Page {
    private widgets: Array<Object>;
    private customJSFunctions: Array<Object>;
    
    constructor() {
        this.widgets = new Array<Object>;
        this.customJSFunctions = new Array<Object>;
    }

    addWidget(widget: Object): void{
        this.widgets.push(widget);
    }

    addCustomJSFunc(customJSFunc: Object): void{
        this.customJSFunctions.push(customJSFunc);
    }

}
