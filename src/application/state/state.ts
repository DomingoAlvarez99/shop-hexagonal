import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart'

export class State {
  private _shoppingCart: ShoppingCart = {} as any;

  public get shoppingCart(): ShoppingCart {
    return this._shoppingCart
  }
  public set shoppingCart(value: ShoppingCart) {
    this._shoppingCart = value
  }
}
