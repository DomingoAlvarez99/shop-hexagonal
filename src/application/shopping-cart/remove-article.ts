import { StateManager } from '@/application/state/state-manager'
import { TYPES } from '@//types'
import { Inject } from '@/domain/di/inject'
import { Injectable } from '@/domain/di/injectable'
import { ShoppingCartRepository } from '@/domain/shopping-cart/shopping-cart-repository'
import { Article } from '@/domain/article/article'
import { Command } from '@/domain/use-cases/command'

@Injectable()
export class RemoveArticle extends Command<Article> {
  public constructor(
    @Inject(TYPES.STATE_MANAGER) private readonly stateManager: StateManager,
    @Inject(TYPES.SHOPPING_CART_REPOSITORY) private readonly shoppingCartRepository: ShoppingCartRepository
  ) {
    super()
  }

  public internalExecute(article: Article): void {
    this.shoppingCartRepository.removeArticle(article)
    this.stateManager.state.shoppingCart.removeArticle(article)
  }
}
