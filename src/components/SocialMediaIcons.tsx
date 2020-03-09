import React from 'react';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from '@components/icons';
import { useLang } from '@libs/hooks/use-language';
import { useGlobalState } from '@/libs/hooks/use-global-state';

interface Props {
  className?: string;
}

export const SocialMediaIcons = ({ className }: Props) => {
  const { selector } = useLang();
  const { labels } = selector(d => d.pages.home);
  const {
    state: { myData },
  } = useGlobalState();

  return (
    <div className={`flex ${className}`}>
      {/* email */}
      <a
        href={`mailto:${myData.socialMediaLinks.email}`}
        target="_blank"
        className="mr-1"
        title={labels.email}>
        <EmailIcon />
      </a>
      {/* whatsapp */}
      <a
        href={myData.socialMediaLinks.whatsapp}
        target="_blank"
        className="mr-1"
        title={labels.whatsapp}>
        <WhatsappIcon />
      </a>
      {/* linkedin */}
      <a
        href={myData.socialMediaLinks.linkedin}
        target="_blank"
        title="Linkedin">
        <LinkedinIcon />
      </a>
    </div>
  );
};
