import React from 'react';
import '@styles/indexPage.scss';

import { Home } from '@components/landing-page/Home';
import { AboutMe } from '@components/landing-page/AboutMe';
import { Projects } from '@components/landing-page/Projects';
import { Contact } from '@components/landing-page/Contact';
import { Skills } from '@/components/landing-page/Skills';

interface Props {
  path: string;
}

const Index: React.FC<Props> = () => (
  <>
    <Home id="inicio" />
    <AboutMe id="sobre-mi" />
    <Skills id="habilidades" />
    <Projects id="proyectos" />
    <Contact id="contacto" />
  </>
);

export default Index;
