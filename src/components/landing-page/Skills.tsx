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
    <PageContainer className="pt-2 md:pt-6 min-h-screen" id={id}>
      <h2 className="mb-2 md:mb-5 text-2xl text-center text-warning font-semibold">
        {skills.linkLabel}
      </h2>

      <SkillsProgressBar />
      <p
        className="wow magictime vanishIn my-5 text-justify"
        data-wow-delay="600ms">
        {skills.text}
      </p>
    </PageContainer>
  );
};
