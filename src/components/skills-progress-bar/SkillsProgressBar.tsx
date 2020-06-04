import React, { useState, useEffect } from 'react';
import { SkillItem } from './SkillItem';

// import {
//   JavascriptIcon,
//   TypescriptIcon,
//   NodejsIcon,
//   ExpressIcon,
//   NestjsIcon,
//   MySqlIcon,
//   VueIcon,
//   AngularIcon,
//   ReactIcon,
//   FluxIcon,
//   GatsbyIcon,
//   ElectronIcon,
//   HtmlIcon,
//   SassIcon,
//   PhpIcon,
//   LinuxIcon,
// } from '@components/svg-icons';
import AngularIcon from '@/assets/svg/skills/angularjs-icon.svg';
import ElectronIcon from '@/assets/svg/skills/electronjs-icon.svg';
import ExpressIcon from '@/assets/svg/skills/expressjs-icon.svg';
import FluxIcon from '@/assets/svg/skills/flux-icon.svg';
import GatsbyIcon from '@/assets/svg/skills/gatsby-icon.svg';
import HtmlIcon from '@/assets/svg/skills/html-icon.svg';
import JavascriptIcon from '@/assets/svg/skills/javascript-icon.svg';
import MySqlIcon from '@/assets/svg/skills/mysql-icon.svg';
import NestjsIcon from '@/assets/svg/skills/nestjs-icon.svg';
import NodejsIcon from '@/assets/svg/skills/nodejs-icon.svg';
import PhpIcon from '@/assets/svg/skills/php-icon.svg';
import ReactIcon from '@/assets/svg/skills/reactjs-icon.svg';
import SassIcon from '@/assets/svg/skills/sass-icon.svg';
import TypescriptIcon from '@/assets/svg/skills/typescript-icon.svg';
import LinuxIcon from '@/assets/svg/skills/linux-icon.svg';
import VueIcon from '@/assets/svg/skills/vuejs-icon.svg';

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
  // console.log({ AngularIcon });
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
    javascript: ['75%', JavascriptIcon],
    typescript: ['85%', TypescriptIcon],
    nodejs: ['70%', NodejsIcon],
    expressjs: ['80%', ExpressIcon],
    nestjs: ['75%', NestjsIcon],
    mysql: ['40%', MySqlIcon],
    vue: ['80%', VueIcon],
    angular: ['45%', AngularIcon],
    react: ['50%', ReactIcon],
    flux: ['75%', FluxIcon],
    gatsby: ['55%', GatsbyIcon],
    electronjs: ['35%', ElectronIcon],
    html: ['80%', HtmlIcon],
    css: ['45%', SassIcon],
    php: ['30%', PhpIcon],
    linux: ['35%', LinuxIcon],
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
          <img src={icon as string} alt={language} />
          {/* {icon} */}
        </SkillItem>,
      );
    });

    return skills;
  }

  return (
    <ul
      className={`skills-bar-container ${
        skillSectionVisited ? 'start-animation' : ''
      }`}
      data-wow-delay="500ms">
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
