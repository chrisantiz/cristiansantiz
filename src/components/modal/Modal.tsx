import React, { useEffect, useRef, useState } from 'react';

import './modal.scss';
import { useConditionalString } from '@/libs/hooks/use-conditional-string';

interface Props {
  show: boolean;
  onHide(): void;
  title: string;
  children: any[];
  persistent?: boolean;
}

export const Modal: React.FC<Props> = ({
  show,
  onHide,
  children,
  title,
  persistent = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // display to card
  const [displayFlex, setDisplayFlex] = useState(false);

  const { conditionalString } = useConditionalString({ condition: show });

  /** close dropdown clicking outside */
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // clicked outside
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLElement) &&
        !persistent
      ) {
        console.log({ persistent });
        onHide();
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
    if (show) {
      // show card
      setDisplayFlex(true);
    } else {
      // hide card: give the animation time to finish
      setTimeout(() => setDisplayFlex(false), 800);
    }
  }, [show]);

  return (
    <div
      className="modal-container"
      /* style={{ display: displayFlex ? 'flex' : 'none' }} */>
      <div
        ref={modalRef}
        className={conditionalString({
          onTrue: 'open',
          onFalse: '',
          always: 'modal',
        })}>
        <div className="modal-header">
          <span className="close-button" onClick={() => onHide()}>
            x
          </span>
          {title}
        </div>

        <div className="modal-content">
          {children.length > 0 ? children[0] : children}
        </div>

        {children[1] && <div className="modal-footer">{children[1]}</div>}
      </div>
    </div>
  );
};
