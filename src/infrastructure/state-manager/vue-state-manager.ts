import { Injectable } from '@/domain/di/injectable'
import { State } from '@/application/state/state'
import { StateManager } from '@/application/state/state-manager'
import { Ref, ref } from 'vue'

@Injectable()
export class VueStateManager implements StateManager {
  private _state: Ref<State> = ref({} as any)

  public get state(): State {
    return this._state.value
  }

  public set state(value: State) {
    this._state.value = value
  }
}
