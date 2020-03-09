import React from 'react';
import { PageContainer } from '../PageContainer';
import { useGlobalState } from '@/libs/hooks/use-global-state';
import { useDate } from '@/libs/hooks/use-date';

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
        <h1 className="text-2xl text-center">¿Quién soy yo?</h1>

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
          Qué tanto podría decir de mí, soy un tipo común y corriente enamorado
          del desarrollo web. Tan autodidacta como curioso, siempre intento
          estar al tanto de las cosas que pasan alrededor del mundo, no solo
          tecnológicas; pues, tal cual citó Bacon: «el conocimiento es poder», y
          hay mucha razón en ello. Es la mejor herramienta que tenemos como
          individuos para aportar a la sociedad cosas de valor.
        </p>

        <p className="text-justify mt-2">
          Filosofía, astronomía, ciencia y ortografía son otros temas que me
          atraen y de los cuales me declaro fánatico (no más que eso).
        </p>

        <p className="text-justify mt-2">
          En resumidas, soy del tipo de persona que le gusta saber el porqué de
          las cosas solo para dejar de nutrir su ignorancia.
        </p>

        <h1 className="mt-4 text-2xl text-center">
          ¿Por qué deberías contratarme y/o trabajar conmigo?
        </h1>
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
