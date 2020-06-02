import React from 'react';
import './simple-card.scss';

interface Props {
  title: string | JSX.Element;
  coverIsSvg?: boolean;
  children: [JSX.Element | Element, string];
}

export const SimpleCard: React.FC<Props> = ({
  title,
  coverIsSvg = true,
  children: [icon, text],
}) => {
  return (
    <div className="simple-card-container">
      <div
        className="simple-card-header text-center overflow-hidden flex justify-center items-center"
        style={{ padding: coverIsSvg ? '.5rem' : '0' }}>
        {icon}
      </div>
      <div className="simple-card-content p-4">
        <div className="font-bold mb-2">{title}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};
