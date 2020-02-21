import React from 'react';
import { Link } from 'gatsby';

export const ToolbarItems = ({ className }: any) => (
  <div className={className}>
    <ul>
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
