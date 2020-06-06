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
  // const [animation, setAnimation] = useState(false);

  /** close dropdown clicking outside */
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current?.firstChild!.contains(event.target)) return;

      close();
      // if (event.target?.tagName !== 'DIALOG') {
      //   return;
      // }

      // const rect = event.target?.getBoundingClientRect();

      // const clickedInDialog =
      //   rect.top <= event.clientY &&
      //   event.clientY <= rect.top + rect.height &&
      //   rect.left <= event.clientX &&
      //   event.clientX <= rect.left + rect.width;

      // if (!clickedInDialog && !persistent) {
      //   // onHide();
      //   // modalRef.current?.close();
      //   close();
      // }

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
    // let transition!: NodeJS.Timeout;

    if (show) {
      open();
      // modalRef.current?.showModal();
      // display animation
      // transition = setTimeout(() => setAnimation(true), 0.5);
    } // else {
    // modalRef.current?.close();
    // !!transition && clearTimeout(transition);
    // setAnimation(false);
    // }
  }, [show]);

  // listen dialog events
  // useEffect(() => {
  //   function onClose() {
  //     onHide();
  //   }

  //   modalRef.current!.onclose = onClose;

  //   return () => modalRef.current!.removeEventListener('close', onClose);
  // }, []);

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
          <span className="Modal__close-button" onClick={() => close()}>
            x
          </span>
          {title}
        </header>

        <section className="Modal__content">
          {/* {children.length > 0 ? children[0] : children} */}
          Este es el contenido
        </section>

        <footer>Este es el footer</footer>
        {/* {children[1] && <footer className="Modal__footer">{children[1]}</footer>} */}
      </div>
    </div>
  );
};

export default Dialog;
