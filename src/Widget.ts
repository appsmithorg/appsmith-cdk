import {Appsmith, Jsonable} from "~/Appsmith";

class Widget extends Appsmith implements Jsonable {
    type: string;
    visible: boolean;
    // TODO add basic properties

    constructor(name?: string) {
        super(name);
    }

    toJson(): Object {
        return this;
    }

}

export default Widget;