import React from 'react';

interface Props {
  id: string;
}

export const Projects: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item projects-section" id={id}>
      <h1>Projects page</h1>
    </section>
  );
};
