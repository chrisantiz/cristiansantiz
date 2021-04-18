import React from 'react';
import {
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
  TwitterIcon,
} from '@components/svg-icons';
import { useLang } from '@libs/hooks/use-language';
import { useSelector } from '@/libs/context/global/context';

const SocialMediaIcons = () => {
  const { selector } = useLang();

  const { labels } = selector(d => d.pages.home);
  const myData = useSelector(s => s.myData);

  return (
    <div className="flex items-center">
      {/* email */}
      <a
        href={`mailto:${myData.socialMediaLinks.email}`}
        target="_blank"
        className="mr-2"
        title={labels.email}>
        <EmailIcon className="svg-icon" />
      </a>
      {/* whatsapp */}
      <a
        href={myData.socialMediaLinks.whatsapp}
        target="_blank"
        className="mr-2"
        title={labels.whatsapp}>
        <WhatsappIcon className="svg-icon" />
      </a>
      {/* linkedin */}
      <a
        href={myData.socialMediaLinks.linkedin}
        className="mr-2"
        target="_blank"
        title="Linkedin">
        <LinkedinIcon className="svg-icon" />
      </a>
      {/* Twitter */}
      <a href={myData.socialMediaLinks.twitter} target="_blank" title="Twitter">
        <TwitterIcon className="svg-icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
