import {Appsmith} from "~/Appsmith";

class Widget extends Appsmith {
    type: string;
    visible: boolean;
    // TODO add basic properties

    constructor(name?: string) {
        super(name);
    }

}

export default Widget;