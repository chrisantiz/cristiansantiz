import React from 'react';
import './backdrop.scss';

export const Backdrop = ({ onClick }: any) => (
  <div role="button" tabIndex={0} className="backdrop" onClick={onClick} />
);
