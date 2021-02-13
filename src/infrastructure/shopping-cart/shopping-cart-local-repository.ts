import { Injectable } from "@/domain/di/injectable"
import { ShoppingCart } from "@/domain/shopping-cart/shopping-cart"
import { Article } from "@/domain/article/article"
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository'
import { Inject } from '@/domain/di/inject'
import { TYPES } from "@/types"

@Injectable()
export class ShoppingCartLocalRepository implements ShoppingCartRepository {
  
  private static readonly SHOPPING_CART_KEY = 'SHOPPING_CART'

  constructor(@Inject(TYPES.WINDOW) private readonly window: Window) {}
  
  public removeArticle(article: Article): void {
    var shoppingCart = this.getShoppingCar()
    
    shoppingCart.removeArticle(article)

    this.saveShoppingCart(shoppingCart)
  }

  public find(): ShoppingCart {
    return this.getShoppingCar()
  }

  public createArticle(article: Article): Article {
    var shoppingCart = this.getShoppingCar()

    shoppingCart.addArticle(article)

    this.saveShoppingCart(shoppingCart)

    return article
  }

  private saveShoppingCart(shoppingCart: ShoppingCart ): void {
    this.window.localStorage.setItem(
      ShoppingCartLocalRepository.SHOPPING_CART_KEY,
      JSON.stringify(shoppingCart)
    )
  }

  public getShoppingCar(): ShoppingCart {
    const foundShoppingCart = this.window.localStorage.getItem(ShoppingCartLocalRepository.SHOPPING_CART_KEY) ?? undefined
    
    if (foundShoppingCart === undefined) {
      return new ShoppingCart(0, [])
    }

    const shoppingCartParsed = JSON.parse(foundShoppingCart)

    return ShoppingCart.fromJson(shoppingCartParsed)
  }
}
