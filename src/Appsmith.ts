export class Appsmith {
  protected name: string;
  // type: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
