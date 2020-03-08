import React from 'react';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item aboutme-section" id={id}>
      <h1 className="wow magictime swap">About me page</h1>
      <h3 className="wow magictime swap">Contenido del sobre mí</h3>
      <p className="wow magictime swap">hola mundo</p>
    </section>
  );
};
