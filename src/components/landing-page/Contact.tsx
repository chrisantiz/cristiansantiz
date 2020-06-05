import React from 'react';

interface Props {
  id: string;
}

const Contact: React.FC<Props> = ({ id }) => {
  return (
    <section className="landing-item contact-section" id={id}>
      <h1>Contact page</h1>
    </section>
  );
};

export default Contact;
