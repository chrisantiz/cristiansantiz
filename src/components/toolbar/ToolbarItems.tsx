import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { RootContext } from '@libs/context/root/root.context';
import { toggleSideDrawer } from '@libs/context/root/root.actions';
import { LocaleType } from '@libs/i18n/languages';

export const ToolbarItems = React.memo(({ className, inDrawer }: any) => {
  const { getState, dispatch } = useContext(RootContext);

  const { locale, openSideDrawer: isOpen } = getState(state => state);

  const [localeLinks, setLocaleLinks] = useState<string[]>([]);
  const { allFile } = useStaticQuery(query);

  console.log('Render toolbar items en', inDrawer ? 'drawer' : 'toolbar');

  useEffect(() => {
    setLocaleLinks(
      allFile.nodes
        .filter(({ name }: any) => {
          return name === locale;
        })
        .map((node: any) => node.childLocalesJson.pages)[0],
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
        {/* {localeLinks.map(link => (
          <li key={link}>
            <Link to={link} activeClassName="active">
              {link}
            </Link>
          </li>
        ))} */}
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
});

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "locales" } }) {
      nodes {
        name
        childLocalesJson {
          pages {
            home {
              linkLabel
            }
            aboutMe {
              linkLabel
            }
            projects {
              linkLabel
            }
            contact {
              linkLabel
            }
          }
        }
      }
    }
  }
`;
