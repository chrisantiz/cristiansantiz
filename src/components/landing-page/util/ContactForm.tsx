import React, { useState, useRef, useCallback, useEffect } from 'react';
import Textarea from '@/components/html/Textarea';
import RadioGroup from '@/components/html/radio-group/RadioGroup';
import TelephonePrefixes from '@/components/telephone-prefixes/TelephonePrefixes';
import InputNumber from '@/components/html/InputNumber';
import Input from '@/components/html/Input';
import { Rule } from '@/models/shared.model';
import { Validator } from '@/helpers/validators.helper';
import { useLang } from '@/libs/hooks';

type ClientContact = 'phone' | 'email';

const ContactForm = () => {
  const [clientContact, setClientContact] = useState<ClientContact>('phone');
  const [message, setMessage] = useState('');
  const [prefix, setPrefix] = useState('');
  const [contact, setContact] = useState('');

  const [disabledBtn, setDisabledBtn] = useState(true);

  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const { contact: lang } = useLang().lang.pages;

  const [rules, setRules] = useState<Rule[]>([]);

  useEffect(() => {
    setRules([
      { handler: Validator.required, message: lang.validators.email.required },
      { handler: v => v === 'hola', message: lang.validators.email.match },
    ]);
  }, [lang.validators.email]);

  function radioChange(value: string) {
    setClientContact(value as ClientContact);

    if (!!contact) {
      setContact('');
    }

    const timeout = setTimeout(() => {
      if (value === 'email') {
        emailRef.current?.focus();
      } else {
        phoneRef.current?.focus();
      }

      clearTimeout(timeout);
    }, 200);
  }

  function onChangePrefix(value: string) {
    setPrefix(value);
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

  function onSubmit() {
    if (disabledBtn) return;

    console.log(`+${prefix} ${contact}`);
  }
  return (
    <>
      <Textarea
        rows={4}
        placeholder="Type a message"
        onType={onChangeMessage}
      />

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
            <TelephonePrefixes onChange={onChangePrefix} />
          </div>
          <div className="px-2 w-8/12">
            <InputNumber
              type="text"
              placeholder="Phone number"
              onType={onChangeContact}
              ref={phoneRef}
            />
          </div>
        </div>
      ) : (
        <div className="flex">
          <Input
            type="text"
            placeholder="Type your email"
            onType={onChangeContact}
            ref={emailRef}
            rules={rules}
          />
        </div>
      )}

      <div className="flex justify-end pt-3">
        <button
          className={`Button ${disabledBtn && 'Button--disabled'}`}
          onClick={() => onSubmit()}>
          send message
        </button>
      </div>
    </>
  );
};

export default ContactForm;
