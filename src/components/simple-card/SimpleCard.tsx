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
    <article className="Simple-card">
      <div
        className="Simple-card__header flex justify-center items-center"
        style={{ padding: coverIsSvg ? '.5rem' : '0' }}>
        {icon}
      </div>
      <div className="Simple-card__content">
        <div className="Simple-card__title font-bold">{title}</div>
        <p className="Simple-card__text">{text}</p>
      </div>
    </article>
  );
};
