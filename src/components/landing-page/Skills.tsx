import React from 'react';
import { SkillsProgressBar } from '../skills-progress-bar/SkillsProgressBar';
import { useLang } from '@/libs/hooks/use-language';
import { PageContainer } from '../PageContainer';

interface Props {
  id: string;
}

export const Skills: React.FC<Props> = ({ id }) => {
  const {
    lang: {
      pages: { skills },
    },
  } = useLang();

  return (
    <div className="landing-item skills-section" id={id}>
      <PageContainer id={id}>
        <h2 className="pt-8 mb-4 text-2xl text-center text-warning font-semibold">
          {skills.linkLabel}
        </h2>

        <SkillsProgressBar />
        <p className="text-justify">{skills.text}</p>
      </PageContainer>
    </div>
  );
};
