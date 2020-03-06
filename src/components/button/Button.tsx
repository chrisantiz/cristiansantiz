import React, { useContext, useState } from 'react';
import { RootContext } from '../../libs/context/root/root.context';
import { navigate } from 'gatsby';

interface Props {
  children: string;
  outlined?: boolean;
  className?: string;
  to?: string;
}

export const Button = ({ children, outlined, className, to }: Props) => {
  const locale = useContext(RootContext).getState(s => s.locale);
  let classes = 'bg-warning hover:bg-orange-800 text-white';

  if (outlined) {
    classes = 'text-warning hover:bg-orange-800 border border-warning bg-transparent hover:border-transparent hover:text-white';
  }

  function redirect() {
    if (!to) return;

    navigate(locale === 'es' ? to : `/${locale}${to}`);
  }

  return (
    <button
      className={`uppercase font-semibold py-1 px-4 rounded ${classes} ${className}`} onClick={redirect}>
      {children}
    </button>
  );
};
