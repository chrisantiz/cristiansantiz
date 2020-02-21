import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RootContext } from '../../context/root/root.context';
import { toggleSideDrawer } from '../../context/root/root.actions';

export const ToolbarItems = ({ className }: any) => {
  const { getState, dispatch } = useContext(RootContext);

  const isOpen = getState(state => state.openSideDrawer);

  // close side drawer if its open when change page
  function handleClick() {
    if (isOpen) {
      dispatch(toggleSideDrawer());
    }
  }

  return (
    <div className={className}>
      <ul onClick={handleClick}>
        <li>
          <Link to="/" activeClassName="active">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/sobre-mi" activeClassName="active" partiallyActive>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/proyectos" activeClassName="active" partiallyActive>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/contacto" activeClassName="active" partiallyActive>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
    // Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
  );
};
