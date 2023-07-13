import Datasource from "~/Datasource";

class MySQL extends Datasource {
    private _query: string;

    constructor(name: string) {
        super(name);
        this.type = "MySQL";
    }

    query(query: string) {
        this._query = query;
        return this;
    }

    toJson(): Object {
        return this;
    }
}

export default MySQL;
