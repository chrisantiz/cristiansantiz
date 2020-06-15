import React from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import RadioGroup from '../html/radio-group/RadioGroup';

interface Props {
  id: string;
}

const Contact: React.FC<Props> = ({ id }) => {
  function radioChange(value: string) {
    console.log(value);
  }
  return (
    <PageContainer id={id} className="landing-full-screen py-3">
      <Title>Contact me</Title>
      <p className="text-center">
        We could make a great team! Complete the following form and I will
        contact you shortly.
      </p>

      <div className="flex mt-4">
        <div className="w-1/2 px-2">
          <textarea
            rows={3.5}
            placeholder="Type a message"
            className="textarea"></textarea>
          <p className="my-2">How to contact you?</p>
          <div>
            {/* <Radio name="pruebita" label="Whatsapp" />
            <Radio name="pruebita" label="Whatsapp" checked /> */}
            <RadioGroup
              name="contact"
              onChange={radioChange}
              items={[
                { label: 'Whatsapp', checked: true, value: 'phone' },
                { label: 'Email', value: 'email' },
              ]}
            />
          </div>
        </div>
        <div className="w-1/2">
          <h1>Right</h1>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
