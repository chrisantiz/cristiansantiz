import React from 'react';
import './simple-card.scss';

interface Props {
  icon: JSX.Element;
  title: string;
  children: string;
}

export const SimpleCard: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <div className="w-full">
      <div className="h-40 border-t border-l border-r border-gray-400 rounded-t rounded-r rounded-l text-center overflow-hidden flex justify-center items-center px-1">
        {icon}
      </div>
      <div className="border-r border-b border-l border-grey-light -mt-1 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="text-black font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base text-justify">{children}</p>
        </div>
      </div>
    </div>
  );
};
