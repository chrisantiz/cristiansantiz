/** data to return when useing the «useContext» hook */
export interface ContextModel<T> {
  getState<TState = T, TSelected = unknown>(
    selector: (state: TState) => TSelected,
  ): TSelected;
  dispatch: React.Dispatch<any>;
}
