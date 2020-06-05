import React, { useEffect, useState } from 'react';

interface Props {
  language: string;
  percent: string;
  time: number;
  displayPercent: boolean;
  children: any;
}

const SkillItem: React.FC<Props> = ({
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
    <li className="Skill-item">
      <div className="Skill-item__icon">{children}</div>
      {/* bar-content-${language} */}
      <div className={`Skill-item__content Skill-item__content--${language}`}>
        <div className="Skill-item__labels">
          <h3 className="Skill-item__language">{title.toUpperCase()}</h3>
          {/* percent */}
          <span className="Skill-item__percent">{getPercent}</span>
        </div>

        <div className="Skill-item__progressbar-container">
          <span
            className={`Skill-item__progressbar Skill-item__progressbar--${language}`}></span>
        </div>
      </div>
    </li>
  );
};

export default SkillItem;
