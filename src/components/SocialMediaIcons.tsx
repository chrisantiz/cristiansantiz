import React from 'react';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from '@components/svg-icons';
import { useLang } from '@libs/hooks/use-language';
import { useGlobalState } from '@/libs/hooks/use-global-state';

export const SocialMediaIcons = () => {
  const { selector } = useLang();
  const { labels } = selector(d => d.pages.home);
  const {
    state: { myData },
  } = useGlobalState();

  return (
    <div className="flex items-center">
      {/* email */}
      <a
        href={`mailto:${myData.socialMediaLinks.email}`}
        target="_blank"
        className="mr-1"
        title={labels.email}>
        <EmailIcon className="svg-icon" />
      </a>
      {/* whatsapp */}
      <a
        href={myData.socialMediaLinks.whatsapp}
        target="_blank"
        className="mr-1"
        title={labels.whatsapp}>
        <WhatsappIcon className="svg-icon" />
      </a>
      {/* linkedin */}
      <a
        href={myData.socialMediaLinks.linkedin}
        target="_blank"
        title="Linkedin">
        <LinkedinIcon className="svg-icon" />
      </a>
    </div>
  );
};
