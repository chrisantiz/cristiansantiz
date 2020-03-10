import React, { useState } from 'react';
import '@styles/indexPage.scss';

import { Home } from '@components/landing-page/Home';
import { AboutMe } from '@components/landing-page/AboutMe';
import { Projects } from '@components/landing-page/Projects';
import { Contact } from '@components/landing-page/Contact';
import { Skills } from '@/components/landing-page/Skills';

interface Props {
  path: string;
}

const Index: React.FC<Props> = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{ transition: 'opacity .2s ease-in' }}
      className={`${!loaded ? 'opacity-0' : 'opacity-1'}`}>
      <Home id="inicio" imageLoaded={() => setLoaded(true)} />
      <AboutMe id="sobre-mi" />
      <Skills id="habilidades" />
      <Projects id="proyectos" />
      <Contact id="contacto" />
    </div>
  );
};

export default Index;
