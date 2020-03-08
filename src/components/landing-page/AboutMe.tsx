import React from 'react';

interface Props {
  id: string;
}

export const AboutMe: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item aboutme-section" id={id}>
      <h1>About me page</h1>
    </section>
  );
};
