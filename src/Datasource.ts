import { Appsmith, Jsonable } from "./Appsmith";

class Datasource extends Appsmith implements Jsonable {
    type: string;
    protected _onLoad: boolean;

    constructor(name?: string) {
        super(name);
    }

    onLoad(value: boolean) {
        this._onLoad = value;
        return this;
    }

    toJson(): Object {
        return this;
    }
}

export default Datasource;
