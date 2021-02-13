import 'reflect-metadata';
import { interfaces } from 'inversify'
import { container } from 'inversify-props'
import { TYPES } from './types'
import { Logger } from './domain/use-cases/logger'
import { StateManager } from './application/state/state-manager'
import { VueStateManager } from './infrastructure/state-manager/vue-state-manager'
import { Runner } from './domain/runner/runner'
import { ExecutorLink } from './domain/runner/executor-link'
import { LoggerLink } from './domain/runner/logger-link'
import { ConsoleLogger } from './infrastructure/console-logger/console-logger'
import { ShoppingCartRepository } from './domain/shopping-cart/shopping-cart-repository';
import { ShoppingCartLocalRepository } from './infrastructure/shopping-cart/shopping-cart-local-repository';
import { GetShoppingCart } from './application/shopping-cart/get-shopping-cart';
import { CreateArticle } from "./application/shopping-cart/create-article";
import { RemoveArticle } from "./application/shopping-cart/remove-article";

export class Container {
  private static _instance: Container | null = null
  private readonly _container: interfaces.Container

  private constructor() {
    container
      .bind<Logger>(TYPES.LOGGER)
      .to(ConsoleLogger)
      .inSingletonScope()
    container.bind<Window>(TYPES.WINDOW).toConstantValue(window)
    container
      .bind<StateManager>(TYPES.STATE_MANAGER)
      .to(VueStateManager)
      .inSingletonScope()
    container
      .bind<Runner>(TYPES.RUNNER)
      .to(Runner)
      .inSingletonScope()
    container
      .bind<ExecutorLink>(TYPES.EXECUTOR_LINK)
      .to(ExecutorLink)
      .inSingletonScope()
    container
      .bind<LoggerLink>(TYPES.LOGGER_LINK)
      .to(LoggerLink)
      .inSingletonScope()
    container
      .bind<ShoppingCartRepository>(TYPES.SHOPPING_CART_REPOSITORY)
      .to(ShoppingCartLocalRepository)
      .inSingletonScope()
    container
      .bind<GetShoppingCart>(TYPES.GET_SHOPPING_CART)
      .to(GetShoppingCart)
      .inSingletonScope()
    container
      .bind<CreateArticle>(TYPES.CREATE_ARTICLE)
      .to(CreateArticle)
      .inSingletonScope()
    container
      .bind<RemoveArticle>(TYPES.REMOVE_ARTICLE)
      .to(RemoveArticle)
      .inSingletonScope()

    this._container = container
  }

  static instance() {
    if (this._instance === null) {
      Container._instance = new Container()
    }

    return this._instance!._container
  }
}

export const getShoppingCart = Container.instance().get<GetShoppingCart>(TYPES.GET_SHOPPING_CART);

export const createArticle = Container.instance().get<CreateArticle>(TYPES.CREATE_ARTICLE);

export const removeArticle = Container.instance().get<RemoveArticle>(TYPES.REMOVE_ARTICLE);