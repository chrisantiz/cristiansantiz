import React from 'react';

interface Props {
  id: string;
}

export const Home: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item home-section" id={id}>
      <h1>Home page</h1>
    </section>
  );
};
