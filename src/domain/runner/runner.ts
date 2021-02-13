import { Injectable } from '../di/injectable'
import { LoggerLink } from './logger-link'
import { ExecutorLink } from './executor-link'
import { UseCase } from '../use-cases/use-case'
import { Inject } from '../di/inject'
import { TYPES } from '../../types'
import { Link } from './link'

@Injectable()
export class Runner {
  private chain: Link

  constructor(
    @Inject(TYPES.EXECUTOR_LINK) private readonly executorLink: ExecutorLink,
    @Inject(TYPES.LOGGER_LINK) private readonly loggerLink: LoggerLink
  ) {
    this.chain = this.executorLink.setNext(this.loggerLink)
  }

  run(useCase: UseCase<unknown, unknown>, param: unknown): unknown {
    const context = { useCase, result: undefined, param }
    this.chain.next(context)
    return context.result
  }
}
