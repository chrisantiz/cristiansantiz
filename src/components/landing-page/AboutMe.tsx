import React from 'react';
import { PageContainer } from '../PageContainer';
import { useGlobalState } from '@/libs/hooks/use-global-state';
import { useDate } from '@/libs/hooks/use-date';
import { CompetitivenessIcon, IdeasIcon, ConstantIcon } from '../icons';
import { SimpleCard } from '../simple-card/SimpleCard';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  const {
    state: { myData },
  } = useGlobalState();

  const age = useDate().getYearsFromNow(myData.birthdate);

  return (
    <PageContainer id={id}>
      <section className="py-3">
        {/* section 1 */}
        <h2 className="text-2xl text-center text-warning font-semibold">
          Yo brevemente
        </h2>

        <p className="text-justify">
          Me presento, mi nombre es Cristian Santiz, tengo {age} años y soy
          oriundo de Colombia, más específico de un pequeño pueblo ubicado al
          norte del país...{' '}
          <a
            href="https://es.wikipedia.org/wiki/Sinc%C3%A9"
            target="_blank"
            rel="noopener noreferrer">
            Sincé
          </a>
          , le dicen.
        </p>

        <p className="text-justify mt-2">
          Soy un tipo común y corriente enamorado del desarrollo web. Tan
          autodidacta como curioso, siempre intento estar al tanto de las cosas
          que pasan alrededor del mundo, no solo tecnológicas; pues, tal cual
          citó Bacon: «el conocimiento es poder».
        </p>

        <p className="text-justify mt-2">
          Filosofía, astronomía, ciencia y ortografía son otros temas que me
          atraen y de los cuales me declaro fánatico (no más que eso).
        </p>

        <p className="text-justify mt-2">
          En resumen, soy del tipo de persona que le gusta saber el porqué de
          las cosas solo para dejar de nutrir su ignorancia.
        </p>
        {/* end section 1 */}

        {/* section 2 */}
        <h2 className="mt-8 mb-4 text-2xl text-center text-warning font-semibold">
          Por qué deberías contratarme y/o trabajar conmigo
        </h2>

        {/* cards */}
        <section className="flex flex-wrap md:flex-no-wrap">
          <div className="w-full md:mr-3">
            <SimpleCard
              title="Competitividad"
              icon={<CompetitivenessIcon className="w-32 h-32" />}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div>

          <div className="w-full md:mr-3 mt-3 md:mt-0">
            <SimpleCard
              title="Constancia"
              icon={<ConstantIcon className="w-32 h-32" />}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div>

          <div className="w-full mt-3 md:mt-0">
            <SimpleCard
              title="Productividad e ideas"
              icon={<IdeasIcon className="w-32 h-32" />}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </SimpleCard>
          </div>
        </section>
        {/* end section 2 */}
      </section>
    </PageContainer>
  );
};
