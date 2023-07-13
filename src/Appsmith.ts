export class Appsmith {
  protected name: string;
  // type: string;

  constructor(name?: string) {
    // TODO if no name, create new name based on type
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

export abstract class Jsonable {
  abstract toJson(): Object;
}
