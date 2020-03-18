import React, { useState, useEffect } from 'react';
import { SkillItem } from './SkillItem';

import javascript from '@/assets/images/svg-skills/javascript.svg';
import typescript from '@/assets/images/svg-skills/typescript.svg';
import nodejs from '@/assets/images/svg-skills/nodejs.svg';
import expressjs from '@/assets/images/svg-skills/expressjs.svg';
import nestjs from '@/assets/images/svg-skills/nestjs.svg';
import mysql from '@/assets/images/svg-skills/mysql.svg';
import vue from '@/assets/images/svg-skills/vue.svg';
import angular from '@/assets/images/svg-skills/angular.svg';
import react from '@/assets/images/svg-skills/react.svg';
import flux from '@/assets/images/svg-skills/flux.svg';
import gatsby from '@/assets/images/svg-skills/gatsby.svg';
import electronjs from '@/assets/images/svg-skills/electronjs.svg';
import html from '@/assets/images/svg-skills/html.svg';
import css from '@/assets/images/svg-skills/css.svg';
import php from '@/assets/images/svg-skills/php.svg';
import ubuntu from '@/assets/images/svg-skills/ubuntu.svg';

import './skills-progress-bar.scss';
import { useGlobalState } from '@/libs/hooks/use-global-state';

interface Props {}

interface Skills {
  javascript: string;
  typescript: string;
  nodejs: string;
  expressjs: string;
  nestjs: string;
  mysql: string;
  vue: string;
  angular: string;
  react: string;
  flux: string;
  gatsby: string;
  electronjs: string;
  html: string;
  css: string;
  php: string;
  ubuntu: string;
}

export const SkillsProgressBar: React.FC<Props> = () => {
  const {
    state: { skillSectionVisited },
  } = useGlobalState();

  const [skillProgress, setSkillProgress] = useState<Skills>({
    javascript: '',
    typescript: '',
    nodejs: '',
    expressjs: '',
    nestjs: '',
    mysql: '',
    vue: '',
    angular: '',
    react: '',
    flux: '',
    gatsby: '',
    electronjs: '',
    html: '',
    css: '',
    php: '',
    ubuntu: '',
  });

  const lang = {
    javascript: ['75%', javascript],
    typescript: ['85%', typescript],
    nodejs: ['70%', nodejs],
    expressjs: ['80%', expressjs],
    nestjs: ['75%', nestjs],
    mysql: ['40%', mysql],
    vue: ['80%', vue],
    angular: ['45%', angular],
    react: ['45%', react],
    flux: ['75%', flux],
    gatsby: ['40%', gatsby],
    electronjs: ['35%', electronjs],
    html: ['80%', html],
    css: ['40%', css],
    php: ['35%', php],
    ubuntu: ['35%', ubuntu],
  };

  let multiply = 4;

  useEffect(() => {
    if (!skillSectionVisited) return;

    // update on this temporal object
    const temp: any = skillProgress;

    Object.entries(lang).forEach(([language, [percent]]) => {
      const delay = 700;

      setTimeout(() => {
        temp[language] = percent;

        setSkillProgress({ ...temp });
      }, delay * multiply);

      multiply++;
    });
  }, [skillSectionVisited]);

  function generateSkills() {
    const skills: JSX.Element[] = [];

    Object.entries(lang).forEach(([language, [, icon]]) => {
      const title =
        language !== 'ubuntu'
          ? language !== 'css'
            ? language
            : 'css/sass'
          : 'gnu/linux (ubuntu based)';
      skills.push(
        <SkillItem
          key={language}
          title={title.toUpperCase()}
          percent={(skillProgress as any)[language]}
          classNameAnimation={
            !!(skillProgress as any)[language] ? 'magictime slideUpReturn' : ''
          }
          classNameProgress={`progress-${language}`}
          classNameBarContent={`bar-content-${language}`}>
          {/* <FacebookIcon className="h-10 w-10" /> */}
          <img src={icon} alt={language} />
        </SkillItem>,
      );
    });

    return skills;
  }

  return (
    <ul
      className={`skills-bar-container ${
        skillSectionVisited ? 'start-animation' : ''
      }`} data-wow-delay="500ms">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2">
          {generateSkills().map((element, index) => {
            if (index < 8) {
              return element;
            } else {
              return null;
            }
          })}
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          {generateSkills().map((element, index) => {
            if (index >= 8) {
              return element;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </ul>
  );
};
