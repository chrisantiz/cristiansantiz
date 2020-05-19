import React from 'react';
import { PageContainer } from '../PageContainer';
import { useGlobalState } from '@/libs/hooks/use-global-state';
import { useDate } from '@/libs/hooks/use-date';
import { CompetitivenessIcon, IdeasIcon, ConstantIcon } from '../icons';
import { SimpleCard } from '../simple-card/SimpleCard';
import { useLang } from '@/libs/hooks/use-language';
import { Title } from './util/Title';
import { Paragraph } from './util/Paragraph';

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

  const age = useDate().getYearsFromNow(birthdate);

  function getIconByIndex(index: number): JSX.Element {
    switch (index) {
      case 0:
        return <CompetitivenessIcon className="w-32 h-32 ma-2" />;
      case 1:
        return <IdeasIcon className="w-32 h-32 ma-2" />;
      default:
        return <ConstantIcon className="w-32 h-32 ma-2" />;
    }
  }

  function generateCards(): JSX.Element[] {
    const { cards } = aboutMe.whyHireMe;

    return cards.map((card, index) => {
      const icon = getIconByIndex(index);

      return (
        <div key={`card_${index}`}>
          <SimpleCard title={card.title}>
            {icon}
            {card.text}
          </SimpleCard>
        </div>
      );
    });
  }

  return (
    <PageContainer id={id}>
      <section className="py-3">
        {/* section 1 */}
        <Title>{aboutMe.title}</Title>

        <Paragraph>
          {aboutMe.paragraphs.one.partOne} {age}{' '}
          {aboutMe.paragraphs.one.partTwo}
        </Paragraph>

        <Paragraph className="mt-2">{aboutMe.paragraphs.two}</Paragraph>

        <Paragraph className="mt-2">{aboutMe.paragraphs.three}</Paragraph>

        <Paragraph className="mt-2">{aboutMe.paragraphs.four}</Paragraph>
        {/* end section 1 */}

        {/* section 2 */}
        <Title className="mt-8 mb-4">{aboutMe.whyHireMe.title}</Title>

        {/* cards */}
        <section
          className="card-grid"
          /* className="flex flex-wrap md:flex-no-wrap mb-4" */
        >
          {generateCards()}
        </section>
        {/* end section 2 */}
      </section>
    </PageContainer>
  );
};
