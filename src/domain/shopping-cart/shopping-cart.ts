import { Article } from "../article/article"

export class ShoppingCart {
  
  public constructor(private id: number, private articles: Article[]) {}

  public getArticles(): Article[] {
    return this.articles
  }

  public getArticlesGroupedById(): Map<Article, number> {
    return new Map<Article, number>(
      this.articles
        .filter((v,i,a) => a.findIndex (t => t.getId() === v.getId()) === i)
        .sort((a, b) => a.getId() - b.getId())
        .map(article => {
          const articlesGrouped: number = this.getTotalArticlesById(article.getId())
          return [article, articlesGrouped]
        })
    );
  }

  private getTotalArticlesById(id: number) : number {
    return this.articles.filter(art => art.getId() == id).length
  }

  public addArticle(article: Article): void {
    this.articles.push(article)
  }

  public removeArticle(article: Article): void {
    const articleSearched: Article = this.articles.find(art => art.getId() == article.getId())!
    
    const idx = this.articles.indexOf(articleSearched);

    if (idx == -1) {
      throw new Error(`Error, could not remove the article: ${article.getId()}`);
    }

    this.articles.splice(idx, 1);
  }

  public getId(): number {
    return this.id
  }

  public static fromJson(shoppingCart: any): ShoppingCart {
    return new ShoppingCart(
      shoppingCart.id,
      shoppingCart.articles.map(
        (a: any) => new Article(a.id, a.stock, a.price, a.name, a.description)
      )
    )
  }
}