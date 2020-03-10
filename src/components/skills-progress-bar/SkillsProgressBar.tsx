import React, { useState, useEffect } from 'react';
import { SkillItem } from './SkillItem';

import javascript from '@/images/svg-skills/javascript.svg';
import typescript from '@/images/svg-skills/typescript.svg';
import nodejs from '@/images/svg-skills/nodejs.svg';
import expressjs from '@/images/svg-skills/expressjs.svg';
import nestjs from '@/images/svg-skills/nestjs.svg';
import mysql from '@/images/svg-skills/mysql.svg';
import vue from '@/images/svg-skills/vue.svg';
import angular from '@/images/svg-skills/angular.svg';
import react from '@/images/svg-skills/react.svg';
import flux from '@/images/svg-skills/flux.svg';
import gatsby from '@/images/svg-skills/gatsby.svg';
import html from '@/images/svg-skills/html.svg';
import css from '@/images/svg-skills/css.svg';
import php from '@/images/svg-skills/php.svg';
import ubuntu from '@/images/svg-skills/ubuntu.svg';

import './skills-progress-bar.scss';

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
  html: string;
  css: string;
  php: string;
  ubuntu: string;
}

export const SkillsProgressBar: React.FC<Props> = () => {
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
    html: '',
    css: '',
    php: '',
    ubuntu: '',
  });

  const lang= {
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
    html: ['80%', html],
    css: ['40%', css],
    php: ['35%', php],
    ubuntu: ['35%', ubuntu],
  };

  let multiply = 4;

  useEffect(() => {
    console.log(expressjs);
    // update on this temporal object
    const temp: any = skillProgress;

    Object.entries(lang).forEach(([language, [percent]]) => {
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

    Object.entries(lang).forEach(([language,[, icon]]) => {
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
          <img src={icon} alt={language}/>
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
