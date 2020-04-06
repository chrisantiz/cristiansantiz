import React, { useEffect, useRef, useState } from 'react';
import './dialog.scss';

interface Props {
  show: boolean;
  onHide(): void;
  title: string;
  children: any[];
  persistent?: boolean;
}

export const Dialog: React.FC<Props> = ({
  show,
  onHide,
  children,
  title,
  persistent = false,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [animation, setAnimation] = useState(false);

  /** close dropdown clicking outside */
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (event.target?.tagName !== 'DIALOG') {
        return;
      }

      const rect = event.target?.getBoundingClientRect();

      const clickedInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!clickedInDialog && !persistent) {
        // onHide();
        modalRef.current?.close();
      }

      return false;
    }

    // add event only when the dropdown is open
    if (show) {
      document.addEventListener('click', handleClickOutside);
    }

    // remove event
    return () => document.removeEventListener('click', handleClickOutside);
  }, [show]);

  useEffect(() => {
    let transition!: NodeJS.Timeout;

    if (show) {
      modalRef.current?.showModal();
      // display animation
      transition = setTimeout(() => setAnimation(true), 0.5);
    } else {
      modalRef.current?.close();
      !!transition && clearTimeout(transition);
      setAnimation(false);
    }
  }, [show]);

  // listen dialog events
  useEffect(() => {
    function onClose() {
      onHide();
    }

    modalRef.current!.onclose = onClose;

    return () => modalRef.current!.removeEventListener('close', onClose);
  }, []);

  return (
    <dialog ref={modalRef} className={`modal ${animation && 'open'}`}>
      <header className="modal-header">
        <span
          className="close-button"
          onClick={() => modalRef.current?.close()}>
          x
        </span>
        {title}
      </header>

      <section className="modal-content">
        {children.length > 0 ? children[0] : children}
      </section>

      {children[1] && <footer className="modal-footer">{children[1]}</footer>}
    </dialog>
  );
};
