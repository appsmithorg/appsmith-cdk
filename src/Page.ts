import {Appsmith} from "~/Appsmith";
import {JsObject} from "~/JsObject";

class Page extends Appsmith {
    private widgets: Array<Object>;
    private customJSFunctions: Array<JsObject>;
    
    constructor(name: string) {
        super(name);
        this.widgets = new Array<Object>;
        this.customJSFunctions = new Array<JsObject>;
    }

    addWidget(widget: Object): void{
        this.widgets.push(widget);
    }

    addCustomJSFunc(customJSFunc: JsObject): void{
        this.customJSFunctions.push(customJSFunc);
    }

}

export default Page;