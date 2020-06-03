import React from 'react';
import { PageContainer } from '../PageContainer';
import { useGlobalState } from '@/libs/hooks/use-global-state';
import { CompetitivenessIcon, IdeasIcon, ConstancyIcon } from '../svg-icons';
import { SimpleCard } from '../simple-card/SimpleCard';
import { useLang } from '@/libs/hooks/use-language';
import { Title } from './util/Title';
import { Paragraph } from './util/Paragraph';
import { getYearsFromNow } from '@/helpers/date.helper';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  const {
    state: {
      myData: { birthdate },
    },
  } = useGlobalState();

  const {
    lang: {
      pages: { aboutMe },
    },
  } = useLang();

  const age = getYearsFromNow(birthdate);

  function getIconByIndex(index: number): JSX.Element {
    switch (index) {
      case 0:
        return <CompetitivenessIcon className="w-32 h-32 ma-2" />;
      case 1:
        return <ConstancyIcon className="w-32 h-32 ma-2" />;
      default:
        return <IdeasIcon className="w-32 h-32 ma-2" />;
    }
  }

  function generateCards(): JSX.Element[] {
    const { cards } = aboutMe.whyHireMe;

    return cards.map((card, index) => {
      const icon = getIconByIndex(index);

      return (
        <SimpleCard title={card.title} key={`card_${index}`}>
          {icon}
          {card.text}
        </SimpleCard>
      );
    });
  }

  return (
    <PageContainer id={id} className="py-3 min-h-screen">
      {/* section 1 */}
      <Title>{aboutMe.title}</Title>

      <Paragraph>
        {aboutMe.paragraphs.one.partOne} {age} {aboutMe.paragraphs.one.partTwo}
      </Paragraph>

      <Paragraph className="mt-2">{aboutMe.paragraphs.two}</Paragraph>

      <Paragraph className="mt-2">{aboutMe.paragraphs.three}</Paragraph>

      <Paragraph className="mt-2">{aboutMe.paragraphs.four}</Paragraph>
      {/* end section 1 */}

      {/* section 2 */}
      <Title className="mt-8 mb-4">{aboutMe.whyHireMe.title}</Title>

      {/* cards */}
      <div className="card-container">{generateCards()}</div>
      {/* end section 2 */}
    </PageContainer>
  );
};
