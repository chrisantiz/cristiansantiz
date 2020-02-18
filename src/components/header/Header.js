import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

/** application header */
const Header = ({ siteTitle }) => {
  const [hidden, setHidden] = useState(false);
  const [classes, setClasses] = useState([
    'opacity-0',
    'w-full',
    'block',
    'flex-grow',
    'md:block',
    'md:flex',
    'md:items-center',
    'md:w-auto',
    'md:block',
    'md:opacity-100',
    'font-semibold',
    'md:bg-transparent',
    'md:text-white',
    'text-blue-700',
    'bg-white',
    'z-10',
    'md:text-right',
    'text-center',
    'p-1',
    'rounded',
    // 'hidden',
  ]);

  const controls = useAnimation();

  const changeClasses = () => {
    if (hidden) {
      controls.start({
        opacity: 0,
        visibility: 'hidden',
        transition: { duration: 0.5 },
      });
      // setTimeout(() => {
      //   setClasses([...classes, 'hidden']);
      // }, 500);
    } else {
      // setClasses(classes.filter(v => v !== 'hidden'));
      controls.start({
        opacity: 1,
        visibility: 'visible',
        transition: { duration: 0.5 },
      });
    }

    setHidden(!hidden);
  };

  return (
    <header
      style={{
        background: 'transparent',
      }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
            onClick={changeClasses}>
            <svg
              className="h-4 w-4"
              style={{ color:'#fff' }}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* here */}
        <motion.div className={classes.join(' ')} animate={controls}>
          <div className="text-sm md:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
              Inicio
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
              Sobre mí
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white mr-4">
              Proyectos
            </a>

            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-teal-lighter hover:text-white">
              Contacto
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
