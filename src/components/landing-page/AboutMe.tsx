import React from 'react';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item aboutme-section" id={id}>
      <h1 className="magictime swap">About me page</h1>
      <h3>Contenido del sobre mí</h3>
      <p>hola mundo</p>
    </section>
  );
};
