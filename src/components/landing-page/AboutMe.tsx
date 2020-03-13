import React from 'react';
import { PageContainer } from '../PageContainer';
import { useGlobalState } from '@/libs/hooks/use-global-state';
import { useDate } from '@/libs/hooks/use-date';
import { CompetitivenessIcon, IdeasIcon, ConstantIcon } from '../icons';
import { SimpleCard } from '../simple-card/SimpleCard';
import { useLang } from '@/libs/hooks/use-language';

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
        return <CompetitivenessIcon className="w-32 h-32" />;
      case 1:
        return <IdeasIcon className="w-32 h-32" />;
      default:
        return <ConstantIcon className="w-32 h-32" />;
    }
  }

  function generateCards(): JSX.Element[] {
    const { cards } = aboutMe.whyHireMe;
    let wowDelayTime = 600;

    return cards.map((card, index) => {
      const icon = getIconByIndex(index);
      wowDelayTime += 100;

      return (
        <div className={card.classes} data-wow-delay={`${wowDelayTime}ms`}>
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
        <h2
          className="wow magictime boingInUp text-2xl text-center text-warning font-semibold"
          data-wow-delay="100ms">
          {aboutMe.title}
        </h2>

        <p
          className="wow magictime boingInUp text-justify"
          data-wow-delay="200ms">
          {aboutMe.paragraphs.one.partOne} {age}{' '}
          {aboutMe.paragraphs.one.partTwo}
        </p>

        <p
          className="wow magictime boingInUp text-justify mt-2"
          data-wow-delay="300ms">
          {aboutMe.paragraphs.two}
        </p>

        <p
          className="wow magictime boingInUp text-justify mt-2"
          data-wow-delay="400ms">
          {aboutMe.paragraphs.three}
        </p>

        <p
          className="wow magictime boingInUp text-justify mt-2"
          data-wow-delay="500ms">
          {aboutMe.paragraphs.four}
        </p>
        {/* end section 1 */}

        {/* section 2 */}
        <h2
          className="wow magictime boingInUp mt-8 mb-4 text-2xl text-center text-warning font-semibold"
          data-wow-delay="600ms">
          {aboutMe.whyHireMe.title}
        </h2>

        {/* cards */}
        <section className="flex flex-wrap md:flex-no-wrap mb-4">
          {generateCards()}
          {/* <div
            className="wow magictime spaceInLeft w-full md:mr-3"
            data-wow-delay="700ms">
            <SimpleCard title="Competitividad">
              <CompetitivenessIcon className="w-32 h-32" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div>

          <div
            className="wow magictime spaceInDown w-full md:mr-3 mt-3 md:mt-0"
            data-wow-delay="800ms">
            <SimpleCard title="Constancia">
              <ConstantIcon className="w-32 h-32" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div>

          <div
            className="wow magictime spaceInRight w-full mt-3 md:mt-0"
            data-wow-delay="900ms">
            <SimpleCard title="Productividad e ideas">
              <IdeasIcon className="w-32 h-32" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div> */}
        </section>
        {/* end section 2 */}
      </section>
    </PageContainer>
  );
};
