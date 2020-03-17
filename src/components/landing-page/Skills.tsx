import React from 'react';
import { SkillsProgressBar } from '../skills-progress-bar/SkillsProgressBar';
import { useLang } from '@/libs/hooks/use-language';
import { PageContainer } from '../PageContainer';
import { Title } from './Title';

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
      <Title animation="vanishIn" className="mb-2 md:mb-5">
        {skills.linkLabel}
      </Title>

      <SkillsProgressBar />
      <p
        className="wow magictime vanishIn my-5 text-justify"
        data-wow-delay="500ms">
        {skills.text}
      </p>
    </PageContainer>
  );
};
