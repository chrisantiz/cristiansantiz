import React, { useState } from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import RadioGroup from '../html/radio-group/RadioGroup';
import TelephonePrefixes from '../telephone-prefixes/TelephonePrefixes';

interface Props {
  id: string;
}

type ClientContact = 'phone' | 'email';

const Contact: React.FC<Props> = ({ id }) => {
  const [clientContact, setClientContact] = useState<ClientContact>('phone');

  function radioChange(value: string) {
    setClientContact(value as ClientContact);

    console.log(clientContact);
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
          <RadioGroup
            name="contact"
            checked={clientContact}
            onChange={radioChange}
            items={[
              { label: 'Whatsapp/Telegram', value: 'phone' },
              { label: 'Email', value: 'email' },
            ]}
          />
          <div>
            <TelephonePrefixes onChange={v => console.log(v)} />
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
