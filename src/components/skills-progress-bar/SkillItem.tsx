import React from 'react';

interface Props {
  classNameAnimation: string;
  classNameProgress: string;
  percent: string;
  title: string;
  children: JSX.Element;
}

export const SkillItem: React.FC<Props> = props => (
  <li>
    <div className="bar-icon">{props.children}</div>
    <div className="bar-content">
      <div className="progressbar-title">
        <h3>{props.title}</h3>
        <span className={`percent ${props.classNameAnimation}`}>
          {props.percent}
        </span>
      </div>
      <div className="bar-container">
        <span className={`progressbar progressred ${props.classNameProgress}`}></span>
      </div>
    </div>
  </li>
);
