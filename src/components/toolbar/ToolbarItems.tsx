import React, { useContext, useEffect, useState } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { toggleSideDrawer } from '@libs/context/root/root.actions';
import { useLang } from '../../libs/hooks/use-language';
import {
  HomeIcon,
  UserIcon,
  ProjectsIcon,
  ContactIcon,
  EditIcon,
} from '../icons';
import { PagesLinkLabel } from '../../models/locale.model';
import { pagesLinkLabelSelector } from '../../helpers/selectors.helper';
import {
  Link as LinkScroll,
} from 'react-scroll';
import { SEO } from '../Seo';

interface Props {
  className?: string;
  icons?: boolean;
}

type PageItems = 'inicio' | 'sobre-mi' | 'proyectos' | 'contacto';
export const ToolbarItems = React.memo(
  ({ className, icons = false }: Props) => {
    const { getState, dispatch } = useContext(RootContext);
    const [title, setTitle] = useState('Inicio');

    const { locale, openSideDrawer: isOpen } = getState(s => s);
    const { selector } = useLang();
    const [pageItem, setPageItem] = useState<PageItems>('' as PageItems);

    /** link labels */
    const labels: PagesLinkLabel = selector(pagesLinkLabelSelector);

    /** close side drawer if its open when change page */
    function handleClick() {
      if (isOpen) {
        dispatch(toggleSideDrawer());
      }
    }

    /** show icon if prefer */
    function getIcon(
      name: 'home' | 'aboutMe' | 'projects' | 'contact' | 'blog',
    ) {
      if (!icons) {
        return null;
      }

      switch (name) {
        case 'home':
          return <HomeIcon />;
        case 'aboutMe':
          return <UserIcon />;
        case 'projects':
          return <ProjectsIcon />;
        case 'contact':
          return <ContactIcon />;
        case 'blog':
          return <EditIcon />;
      }
    }

    // update title when "page" is changed
    useEffect(() => {
      if (!!pageItem) {
        setTitle(getPageSelected(pageItem));
      }
    }, [pageItem]);

    // update title when locale is changed
    useEffect(() => {
      if (!!pageItem) {
        setTitle(getPageSelected(pageItem));
      }
    }, [locale]);

    function handleActive(to: PageItems) {
      setPageItem(to);

      if (isOpen) {
        dispatch(toggleSideDrawer());
      }
    }

    function getPageSelected(item: PageItems): string {
      switch (pageItem) {
        case 'inicio':
          return labels.home;

        case 'contacto':
          return labels.contact;

        case 'proyectos':
          return labels.projects;

        case 'sobre-mi':
          return labels.aboutMe;
      }
    }

    return (
      <div className={className}>
        <SEO title={title} />
        <ul onClick={handleClick}>
          <li>
            <LinkScroll
              to="inicio"
              activeClass="active"
              className="cursor-pointer"
              onSetActive={handleActive}
              offset={-56}
              spy
              smooth
              duration={700}>
              {getIcon('home')}
              {labels.home}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="sobre-mi"
              activeClass="active"
              onSetActive={handleActive}
              spy
              smooth
              offset={-56}
              className="cursor-pointer"
              duration={700}>
              {getIcon('aboutMe')}
              {labels.aboutMe}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="proyectos"
              activeClass="active"
              onSetActive={handleActive}
              spy
              smooth
              offset={-56}
              className="cursor-pointer"
              duration={700}>
              {getIcon('projects')}
              {labels.projects}
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="contacto"
              activeClass="active"
              onSetActive={handleActive}
              spy
              smooth
              offset={-56}
              className="cursor-pointer"
              duration={700}>
              {getIcon('contact')}
              {labels.contact}
            </LinkScroll>
          </li>
          {/* <li>
            <Link
              to={locale === 'es' ? '/blog' : `/en/blog`}
              getProps={isPartiallyActive}>
              {getIcon('blog')}
              Blog
            </Link>
          </li> */}
        </ul>
      </div>
    );
  },
);
