import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { PageContainer } from '../PageContainer';
import { Title } from './util/Title';
import { useLang } from '@/libs/hooks/use-language';

interface Props {
  id: string;
}

export const Projects: React.FC<Props> = ({ id }) => {
  const {
    lang: {
      pages: { projects },
    },
  } = useLang();
  const [showModal, setShowModal] = useState(false);

  return (
    <PageContainer id={id} className="pt-2 md:pt-6 min-h-screen">
      <Title animation="swashIn">{projects.linkLabel}</Title>
    </PageContainer>
  );
};

// <button onClick={() => setShowModal(true)}>toggle modal</button>
// <Modal
//   show={showModal}
//   title="this is a title"
//   onHide={() => setShowModal(false)}>
//   {/* content */}
//   <div>The content</div>
//   {/* footer */}
//   <div>The footer</div>
// </Modal>
