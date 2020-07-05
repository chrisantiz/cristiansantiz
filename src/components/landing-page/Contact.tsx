import React from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import ContactForm from './util/ContactForm';

interface Props {
  id: string;
}

const Contact: React.FC<Props> = ({ id }) => {
  return (
    <PageContainer id={id} className="landing-full-screen py-3">
      <Title>Contact me</Title>
      <p className="text-center">
        We could make a great team! Complete the following form and I will
        contact you shortly.
      </p>

      <div className="flex flex-col md:flex-row md:justify-start mt-4">
        <div className="w-full md:w-1/2 px-2">
          <ContactForm />
        </div>
        <div className="w-full sm:w-1/2">{/* <h1>Right</h1> */}</div>
      </div>
    </PageContainer>
  );
};

export default Contact;
