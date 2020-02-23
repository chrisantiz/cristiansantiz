import { useContext } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { changeToolbarColor } from '@libs/context/root/root.actions';

interface Props {
  /** set transparent style in toolbar */
  isTransparent: boolean;
}

export const toolbarChangeStyle = ({ isTransparent }: Props) => {
  const { getState, dispatch } = useContext(RootContext);
  const toolbarIsTransparent = getState(state => state.toolbarTransparent);

  if (toolbarIsTransparent !== isTransparent) {
    dispatch(changeToolbarColor(isTransparent));
  }
};
