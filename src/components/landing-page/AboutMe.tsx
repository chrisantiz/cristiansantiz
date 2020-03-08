import React from 'react';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <section
      className="wow landing-item aboutme-section overflow-hidden"
      id={id}>
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
