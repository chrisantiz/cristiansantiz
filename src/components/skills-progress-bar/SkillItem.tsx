import React, { useEffect, useState } from 'react';
import { useGlobalState } from '@/libs/hooks';

interface Props {
  language: string;
  percent: string;
  time: number;
  children: any;
}

export const SkillItem: React.FC<Props> = ({
  language,
  percent,
  time,
  children,
}) => {
  const {
    state: { skillSectionVisited },
  } = useGlobalState();

  const [getPercent, setPercent] = useState<string>('');

  useEffect(() => {
    if (!skillSectionVisited) return;

    const interval = setTimeout(() => {
      setPercent(percent);
    }, time);

    return () => clearInterval(interval);
  }, [skillSectionVisited]);

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
