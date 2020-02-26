import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { RootContext } from '@libs/context/root/root.context';
import { toggleSideDrawer } from '@libs/context/root/root.actions';

export const ToolbarItems = React.memo(({ className }: any) => {
  const { getState, dispatch } = useContext(RootContext);

  const { openSideDrawer: isOpen, locale } = getState(state => state);

  const [localeLinks, setLocaleLinks] = useState<string[]>([]);
  const { allSitePage } = useStaticQuery(query);

  useEffect(() => {
    setLocaleLinks(
      allSitePage.edges
        .filter((edge: any) => {
          const { context } = edge.node;
          return context.isLinkRoute && context.locale === locale;
        })
        .map((edge: any) => edge.node.path),
    );
  }, [locale]);

  // close side drawer if its open when change page
  function handleClick() {
    if (isOpen) {
      dispatch(toggleSideDrawer());
    }
  }

  return (
    <div className={className}>
      <ul onClick={handleClick}>
        {localeLinks.map(link => (
          <li key={link}>
            <Link to={link} activeClassName="active">
              {link}
            </Link>
          </li>
        ))}
        {/* <li>
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
        </li> */}
      </ul>
    </div>
    // Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
  );
});

const query = graphql`
  {
    allSitePage(
      filter: {
        isCreatedByStatefulCreatePages: { eq: true }
        context: { isLinkRoute: { eq: true } }
      }
    ) {
      edges {
        node {
          isCreatedByStatefulCreatePages
          path
          context {
            locale
            isLinkRoute
          }
        }
      }
    }
  }
`;
