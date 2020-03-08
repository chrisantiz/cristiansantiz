import React from 'react';
import { useGlobalState } from '../../libs/hooks/use-global-state';
import { changeLocale } from '../../libs/context/global/actions';
import { dispatch } from '../../libs/context/global/context';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  const { selectState, dispatch } = useGlobalState();

  const locale = selectState(s => s.locale);

  function handleChangeLocale() {
    console.log('Holi');
    dispatch(changeLocale(locale === 'es' ? 'en' : 'es'))
  }

  return (
    <section className="landing-item aboutme-section overflow-hidden" id={id}>
      <h1 className="text-black">LOCALE: {locale.toUpperCase()}</h1>
      <button onClick={() => handleChangeLocale()}>CHANGE LOCALE</button>
      <h1 className="wow magictime swap" data-wow-delay="700ms">
        About me page
      </h1>
      <h3 className="wow magictime swap" data-wow-delay="700ms">
        Contenido del sobre mí
      </h3>
      <p className="wow magictime swap" data-wow-delay="700ms">
        hola mundo
      </p>
    </section>
  );
};
