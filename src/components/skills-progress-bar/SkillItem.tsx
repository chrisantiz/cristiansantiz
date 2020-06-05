import React, { useEffect, useState } from 'react';

interface Props {
  language: string;
  percent: string;
  time: number;
  displayPercent: boolean;
  children: any;
}

export const SkillItem: React.FC<Props> = ({
  language,
  percent,
  time,
  displayPercent,
  children,
}) => {
  const [getPercent, setPercent] = useState<string>('');

  useEffect(() => {
    if (!displayPercent) return;

    const interval = setTimeout(() => {
      setPercent(percent);
    }, time);

    return () => clearInterval(interval);
  }, [displayPercent]);

  const title =
    language !== 'linux'
      ? language !== 'css'
        ? language
        : 'css/sass'
      : 'gnu/linux';
  return (
    <li>
      <div className="bar-icon">{children}</div>
      <div className={`bar-content bar-content-${language}`}>
        <div className="progressbar-title">
          <h3>{title.toUpperCase()}</h3>
          <span className="percent">{getPercent}</span>
        </div>
        <div className="bar-container">
          <span className={`progressbar progress-${language}`}></span>
        </div>
      </div>
    </li>
  );
};
