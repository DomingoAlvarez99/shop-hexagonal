import { Injectable } from "@/domain/di/injectable"
import { ShoppingCart } from "@/domain/shopping-cart/shopping-cart"
import { Article } from "@/domain/article/article"
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository'

@Injectable()
export class ShoppingCartInMemoryRepository implements ShoppingCartRepository {
  
  public removeArticle(article: Article): void {
    
  }

  public find(): ShoppingCart {
    return new ShoppingCart(1, [
      new Article(1, 14, 100.00, 'Article 1', 'Desc 1'),
      new Article(1, 15, 200.00, 'Article 2', 'Desc 2'),
      new Article(1, 16, 300.00, 'Article 3', 'Desc 3')
    ])
  }

  createArticle(article: Article): Article {
    return article
  }
}
