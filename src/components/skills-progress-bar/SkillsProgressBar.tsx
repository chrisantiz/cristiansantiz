import React, { useState, useEffect } from 'react';
import { SkillItem } from './SkillItem';
import { FacebookIcon } from '../icons';

import './skills-progress-bar.scss';

interface Props {}

export const SkillsProgressBar: React.FC<Props> = () => {
  const [skillProgress, setSkillProgress] = useState({
    javascript: '',
    typescript: '',
    nodejs: '',
    expressjs: '',
    nestjs: '',
    vue: '',
    angular: '',
    react: '',
    flux: '',
    gatsby: '',
    html: '',
    css: '',
    php: '',
    ubuntu: '',
  });

  const lang = {
    javascript: '75%',
    typescript: '85%',
    nodejs: '70%',
    expressjs: '80%',
    nestjs: '75%',
    mysql: '40%',
    vue: '80%',
    angular: '45%',
    react: '45%',
    flux: '75%',
    gatsby: '40%',
    html: '80%',
    css: '40%',
    php: '35%',
    ubuntu: '35%',
  };

  let multiply = 4;

  useEffect(() => {
    // update on this temporal object
    const temp: any = skillProgress;

    Object.entries(lang).forEach(([language, percent]) => {
      const delay = 700;

      setTimeout(() => {
        temp[language] = percent;

        setSkillProgress({ ...temp });
        console.log({ language, percent });
      }, delay * multiply);

      multiply++;
    });
  }, []);

  function generateSkills() {
    const skills: JSX.Element[] = [];

    Object.entries(lang).forEach(([language]) => {
      const title =
        language !== 'ubuntu'
          ? language !== 'css'
            ? language
            : 'css/sass'
          : 'gnu/linux (ubuntu based)';
      skills.push(
        <SkillItem
          title={title.toUpperCase()}
          percent={(skillProgress as any)[language]}
          classNameAnimation={
            !!(skillProgress as any)[language] ? 'magictime slideUpReturn' : ''
          }
          classNameProgress={`progress-${language}`}
          classNameBarContent={`bar-content-${language}`}>
          <FacebookIcon className="h-10 w-10" />
        </SkillItem>,
      );
    });

    return skills;
  }

  return (
    <ul className="skills-bar-container">
      {generateSkills().map(element => element)}
    </ul>
  );
};
