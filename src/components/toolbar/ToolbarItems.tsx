import React from 'react';
import { Link } from 'gatsby';

export const ToolbarItems = ({ className }: any) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/" activeClassName="active">Inicio</Link>
      </li>
      <li>
        <Link to="/sobre-mi" activeClassName="active">Sobre mí</Link>
      </li>
      <li>
        <Link to="#" activeClassName="active">Proyectos</Link>
      </li>
      <li>
        <Link to="#" activeClassName="active">Contacto</Link>
      </li>
    </ul>
  </div>
);
