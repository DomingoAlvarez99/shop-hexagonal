export class Article {

  public constructor(private id: number, private stock: number, private price: number, private name: string, private description: string) {}

  public getDescription(): string {
    return this.description
  }

  public getName(): string {
    return this.name
  }

  public getPrice(): number {
    return this.price
  }

  public getId(): number {
    return this.id
  }

  public getStock(): number {
    return this.stock
  }
}