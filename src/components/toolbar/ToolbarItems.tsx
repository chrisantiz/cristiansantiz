import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { RootContext } from '@libs/context/root/root.context';
import { toggleSideDrawer } from '@libs/context/root/root.actions';
import { useLanguage } from '../../libs/hooks/use-language';

export const ToolbarItems = React.memo(({ className }: any) => {
  const { getState, dispatch } = useContext(RootContext);

  const { locale, openSideDrawer: isOpen, activePath } = getState(s => s);
  const { lang: data } = useLanguage();

  /** generate path according to language selected */
  function genPath(path: string): string {
    return locale === 'es' ? path : `/en${path}`;
  }

  /** close side drawer if its open when change page */
  function handleClick() {
    if (isOpen) {
      dispatch(toggleSideDrawer());
    }
  }

  function homePartiallyActive(): boolean {
    return locale === 'en' && activePath === '/en';
  }

  return (
    <div className={className}>
      <ul onClick={handleClick}>
        <li>
          <Link
            to={genPath('')}
            activeClassName="active"
            partiallyActive={homePartiallyActive()}>
            {data.pages.home.linkLabel}
          </Link>
        </li>
        <li>
          <Link
            to={genPath('/sobre-mi')}
            activeClassName="active"
            partiallyActive>
            {data.pages.aboutMe.linkLabel}
          </Link>
        </li>
        <li>
          <Link
            to={genPath('/proyectos')}
            activeClassName="active"
            partiallyActive>
            {data.pages.projects.linkLabel}
          </Link>
        </li>
        <li>
          <Link
            to={genPath('/contacto')}
            activeClassName="active"
            partiallyActive>
            {data.pages.contact.linkLabel}
          </Link>
        </li>
        <li>
          <Link to={genPath('/blog')} activeClassName="active" partiallyActive>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
});
