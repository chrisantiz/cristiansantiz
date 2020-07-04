import React, { useState, useCallback, useEffect, useRef, createRef } from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import RadioGroup from '../html/radio-group/RadioGroup';
import TelephonePrefixes from '../telephone-prefixes/TelephonePrefixes';
import InputNumber from '../html/InputNumber';
import Textarea from '../html/Textarea';
import Input from '../html/Input';

interface Props {
  id: string;
}

type ClientContact = 'phone' | 'email';

const Contact: React.FC<Props> = ({ id }) => {
  const [clientContact, setClientContact] = useState<ClientContact>('phone');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');

  const [disabledBtn, setDisabledBtn] = useState(true);

  const phoneRef = useRef(null);
  const emailRef = useRef<HTMLInputElement>(null);
  // const emailRef = createRef<HTMLInputElement>()

  function radioChange(value: string) {
    setClientContact(value as ClientContact);

    if (!!contact) {
      setContact('');
    }

    setTimeout(() => {
      emailRef.current?.focus();
    }, 100)
  }

  const onChangeContact = useCallback((value: string) => {
    setContact(value);
  }, []);

  const onChangeMessage = useCallback((value: string) => {
    setMessage(value);
  }, []);

  useEffect(() => {
    setDisabledBtn(!contact || !message);
  }, [contact, message]);

  return (
    <PageContainer id={id} className="landing-full-screen py-3">
      <Title>Contact me</Title>
      <p className="text-center">
        We could make a great team! Complete the following form and I will
        contact you shortly.
      </p>

      <div className="flex flex-col md:flex-row md:justify-start mt-4">
        <div className="w-full md:w-1/2 px-2">
          <Textarea onChange={onChangeMessage} />

          <p className="my-2">How to contact you?</p>
          <RadioGroup
            name="contact"
            checked={clientContact}
            onChange={radioChange}
            items={[
              { label: 'WhatsApp/Telegram', value: 'phone' },
              { label: 'Email', value: 'email' },
            ]}
          />

          {clientContact === 'phone' ? (
            <div className="flex -mx-2 items-center">
              <div className="flex px-2 sm:justify-start w-4/12">
                <TelephonePrefixes onChange={v => console.log(v)} />
              </div>
              <div className="px-2 w-8/12">
                <InputNumber
                  placeholder="Phone number"
                  onChange={onChangeContact}
                />
              </div>
            </div>
          ) : (
            <div className="flex">
              <Input placeholder="Type your email" onType={onChangeContact} ref={emailRef} />
            </div>
          )}

          <div className="flex justify-end pt-3">
            <button className={`Button ${disabledBtn && 'Button--disabled'}`}>
              send message
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">{/* <h1>Right</h1> */}</div>
      </div>
    </PageContainer>
  );
};

export default Contact;
