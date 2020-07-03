import React, { useState, useCallback } from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import RadioGroup from '../html/radio-group/RadioGroup';
import TelephonePrefixes from '../telephone-prefixes/TelephonePrefixes';
import InputNumber from '../InputNumber';

interface Props {
  id: string;
}

type ClientContact = 'phone' | 'email';

const Contact: React.FC<Props> = ({ id }) => {
  const [clientContact, setClientContact] = useState<ClientContact>('phone');
  const [phone, setPhone] = useState('');

  function radioChange(value: string) {
    setClientContact(value as ClientContact);

    console.log(value);
  }

  const onInput = useCallback((value: string) => {
    setPhone(value);
  }, []);

  return (
    <PageContainer id={id} className="landing-full-screen py-3">
      <Title>Contact me</Title>
      <h2>{phone}</h2>
      <p className="text-center">
        We could make a great team! Complete the following form and I will
        contact you shortly.
      </p>

      <div className="flex flex-col md:flex-row md:justify-start mt-4">
        <div className="w-full md:w-1/2 px-2">
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
          <div className="flex -mx-2 items-center">
            <div className="flex px-2 sm:justify-start w-4/12">
              <TelephonePrefixes onChange={v => console.log(v)} />
            </div>
            <div className="px-2 w-8/12">
              <InputNumber placeholder="Phone number" onChange={onInput} />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h1>Right</h1>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
