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
        <h1 className="text-2xl text-center">Quién soy</h1>

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
          En resumidas, soy del tipo de persona que le gusta saber el porqué de
          las cosas solo para dejar de nutrir su ignorancia.
        </p>

        <h1 className="mt-8 mb-4 text-2xl text-center">
          Por qué deberías contratarme y/o trabajar conmigo
        </h1>

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
        {/* <div className="max-w-md w-full lg:flex">
          <div className="h-40 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-warning flex items-center px-1">
            <CompetitivenessIcon className="w-40 h-40" />
          </div>
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              <div className="text-black font-bold text-xl mb-2">
                Competitividad
              </div>
              <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </PageContainer>
    // <section className="landing-item aboutme-section overflow-hidden" id={id}>
    //   <h1 className="wow magictime swap" data-wow-delay="700ms">
    //     About me page
    //   </h1>
    //   <h3 className="wow magictime swap" data-wow-delay="700ms">
    //     Contenido del sobre mí
    //   </h3>
    //   <p className="wow magictime swap" data-wow-delay="700ms">
    //     hola mundo
    //   </p>
    // </section>
  );
};
