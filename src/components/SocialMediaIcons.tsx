import React from 'react';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from '@components/icons';
import { useLang } from '../libs/hooks/use-language';

interface Props {
  className?: string;
}

export const SocialMediaIcons = ({ className }: Props) => {
  const {
    lang: {
      pages: {
        home: { labels },
      },
    },
  } = useLang();
  return (
    <div className={`flex ${className}`}>
      {/* email */}
      <a
        href="mailto:crisantizan@gmail.com"
        target="_blank"
        className="mr-1"
        title={labels.email}>
        <EmailIcon />
      </a>
      {/* whatsapp */}
      <a
        href="https://api.whatsapp.com/send?phone=573016206425"
        target="_blank"
        className="mr-1"
        title={labels.whatsapp}>
        <WhatsappIcon />
      </a>
      {/* linkedin */}
      <a
        href="https://linkedin.com/in/crisantizan"
        target="_blank"
        title="Linkedin">
        <LinkedinIcon />
      </a>
    </div>
  );
};
