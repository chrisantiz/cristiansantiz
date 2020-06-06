import React, { useEffect, useState, useRef } from 'react';
import './dialog.scss';

interface Props {
  show: boolean;
  onHide(): void;
  title: string;
  children: any[];
  persistent?: boolean;
}

const Dialog: React.FC<Props> = ({
  show,
  onHide,
  children,
  title,
  persistent = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /** close dropdown clicking outside */
  useEffect(() => {
    function handleClickOutside({ target }: any) {
      if (persistent) return;

      // click in card
      const outside = !modalRef.current?.firstChild!.contains(target);

      outside && close();
    }

    // add event only when the dropdown is open
    if (show) {
      document.addEventListener('click', handleClickOutside);
    }

    // remove event
    return () => document.removeEventListener('click', handleClickOutside);
  }, [show]);

  useEffect(() => {
    show ? open() : close();
  }, [show]);

  const close = () => {
    modalRef.current?.classList.add('Modal--hide');
    modalRef.current?.classList.remove('Modal--show');
    onHide();
  };

  const open = () => {
    modalRef.current?.classList.remove('Modal--hide');
    modalRef.current?.classList.add('Modal--show');
  };

  return (
    <div ref={modalRef} className="Modal">
      <div className="Modal__card">
        <header className="Modal__header">
          <span className="Modal__close-button" onClick={() => onHide()}>
            x
          </span>
          {title}
        </header>

        <section className="Modal__content">
          {children.length > 0 ? children[0] : children}
        </section>

        {children[1] && (
          <footer className="Modal__footer">{children[1]}</footer>
        )}
      </div>
    </div>
  );
};

export default Dialog;
