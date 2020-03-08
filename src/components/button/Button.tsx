import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  children: string;
  outlined?: boolean;
  className?: string;
  to?: string;
  size?: 'xs' | 'sm' | 'md' | 'xl';
}

export const Button = ({
  children,
  outlined,
  className,
  to,
  size = 'md',
}: Props) => {
  let classes = 'bg-warning hover:bg-orange-800 text-white';

  if (outlined) {
    classes =
      'text-warning hover:bg-orange-800 border border-warning bg-transparent hover:border-transparent hover:text-white';
  }

  return !!to ? (
    <Link
      to={to as string}
      smooth
      offset={-56}
      className={`cursor-pointer uppercase font-semibold py-1 px-4 rounded text-${size} ${classes} ${className}`}>
      {children}
    </Link>
  ) : (
    <button
      className={`uppercase font-semibold py-1 px-4 rounded text-${size} ${classes} ${className}`}>
      {children}
    </button>
  );
};
