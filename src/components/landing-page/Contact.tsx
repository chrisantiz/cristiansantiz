import React from 'react';

interface Props {
  id: string;
}

const Contact: React.FC<Props> = ({ id }) => {
  return (
    <section className="bg-blue-300 landing-full-screen" id={id}>
      <h1>Contact page</h1>
    </section>
  );
};

export default Contact;
