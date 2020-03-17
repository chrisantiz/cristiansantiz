import React, { useState } from 'react';
import { Modal } from '../modal/Modal';

interface Props {
  id: string;
}

export const Projects: React.FC<Props> = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="landing-item" id={id}>
      
    </section>
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