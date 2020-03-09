import { state, dispatch } from '@libs/context/global/context';
import { GlobalStateModel } from '../context/global/model';
import { GlobalActionTypes } from '../context/global/action-types';

/** data to return when useing the «useContext» hook */
export interface ContextModel<T> {
  selectState<TState = T, TSelected = unknown>(
    selector: (state: TState) => TSelected,
  ): TSelected;
  dispatch: React.Dispatch<GlobalActionTypes>;
  state: T;
}

export const useGlobalState = (): ContextModel<GlobalStateModel> => {
  function selectState(cb: any) {
    return cb(state());
  }

  return { state: state(), dispatch: dispatch(), selectState };
};
