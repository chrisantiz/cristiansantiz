import React, { useContext } from 'react';
import { RootContext } from '../context/root/root.context';

export const useStore = () => {
  return useContext(RootContext);
};
