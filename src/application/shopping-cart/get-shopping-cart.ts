import { StateManager } from '../state/state-manager'
import { TYPES } from '@/types'
import { Inject } from '@//domain/di/inject'
import { Injectable } from '@/domain/di/injectable'
import { Query } from '@/domain/use-cases/query'
import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart'
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository'

@Injectable()
export class GetShoppingCart extends Query<ShoppingCart> {
  public constructor(
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager,
    @Inject(TYPES.SHOPPING_CART_REPOSITORY) private readonly shoppingCartRepository: ShoppingCartRepository
  ) {
    super()
  }

  public internalExecute(): ShoppingCart {
    this.stateManager.state.shoppingCart = this.shoppingCartRepository.find()

    return this.stateManager.state.shoppingCart
  }
}
