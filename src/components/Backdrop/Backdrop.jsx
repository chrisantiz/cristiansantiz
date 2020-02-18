import React from 'react';
import './backdrop.scss';

export const Backdrop = ({ onClick }) => (
  <div className="backdrop" onClick={onClick} />
);
