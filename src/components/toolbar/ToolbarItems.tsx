import React, { useContext, useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { RootContext } from '@libs/context/root/root.context';
import { toggleSideDrawer } from '@libs/context/root/root.actions';
import { LocaleType } from '@libs/i18n/languages';
import { PagesToolbarData } from '../../models/locale.model';
import { useLanguage } from '../../libs/hooks/use-language';

export const ToolbarItems = React.memo(({ className, inDrawer }: any) => {
  const { getState, dispatch } = useContext(RootContext);

  const { locale, openSideDrawer: isOpen } = getState(state => state);
  const { lang: data } = useLanguage();
  // const [data, setData] = useState(lang);
  // const [localeLinks, setLocaleLinks] = useState<PagesToolbarData[]>([]);
  // const { allFile } = useStaticQuery(query);

  // useEffect(() => {
  //   setLocaleLinks(
  //     allFile.nodes
  //       .filter(({ name }: any) => {
  //         return name === locale;
  //       })
  //       .map((node: any) => node.childLocalesJson.pages)[0],
  //   );
  // }, [locale]);

  // useEffect(() => {
  //   console.log('DATA: ', localeLinks);
  // }, [localeLinks]);

  // console.log(lang);

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
            {data.pages.home.linkLabel}
          </Link>
        </li>
        <li>
          <Link to="/sobre-mi" activeClassName="active" partiallyActive>
            {data.pages.aboutMe.linkLabel}
          </Link>
        </li>
        <li>
          <Link to="/proyectos" activeClassName="active" partiallyActive>
            {data.pages.projects.linkLabel}
          </Link>
        </li>
        <li>
          <Link to="/contacto" activeClassName="active" partiallyActive>
            {data.pages.contact.linkLabel}
          </Link>
        </li>
      </ul>
    </div>
    // Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
  );
});
