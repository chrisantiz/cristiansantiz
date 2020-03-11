import React, { useEffect, useState } from 'react';
import {
  toggleSideDrawer,
  setSkillSectionAsVisited,
} from '@libs/context/global/actions';
import { useLang } from '@libs/hooks/use-language';
import {
  HomeIcon,
  UserIcon,
  ProjectsIcon,
  ContactIcon,
  ToolsIcon,
} from '../icons';
import { PagesLinkLabel } from '@models/locale.model';
import { pagesLinkLabelSelector } from '@helpers/selectors.helper';
import { Link as LinkScroll } from 'react-scroll';
import { SEO } from '../Seo';
import { useGlobalState } from '@libs/hooks/use-global-state';

interface Props {
  className?: string;
  icons?: boolean;
}

type PageItems =
  | 'inicio'
  | 'sobre-mi'
  | 'habilidades'
  | 'proyectos'
  | 'contacto';

export const ToolbarItems = ({ className, icons = false }: Props) => {
  const {
    dispatch,
    state: { locale, openSideDrawer: isOpen, skillSectionVisited },
  } = useGlobalState();

  const [title, setTitle] = useState('Inicio');

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
  function getIcon(name: keyof PagesLinkLabel) {
    if (!icons) {
      return null;
    }

    switch (name) {
      case 'home':
        return <HomeIcon />;
      case 'aboutMe':
        return <UserIcon />;
      case 'skills':
        return <ToolsIcon />;
      case 'projects':
        return <ProjectsIcon />;
      case 'contact':
        return <ContactIcon />;
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

  /** set active item */
  function handleActive(to: PageItems) {
    if (to === 'habilidades' && !skillSectionVisited) {
      dispatch(setSkillSectionAsVisited());
    }
    setPageItem(to);
  }

  function getPageSelected(item: PageItems): string {
    switch (pageItem) {
      case 'inicio':
        return labels.home;

      case 'sobre-mi':
        return labels.aboutMe;

      case 'habilidades':
        return labels.skills;

      case 'proyectos':
        return labels.projects;

      case 'contacto':
        return labels.contact;
    }
  }

  return (
    <div className={className}>
      <SEO title={title} />
      <ul>
        <li>
          <LinkScroll
            to="inicio"
            activeClass="active"
            className="cursor-pointer"
            onSetActive={handleActive}
            onClick={handleClick}
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
            onClick={handleClick}
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
            to="habilidades"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
            spy
            smooth
            offset={-56}
            className="cursor-pointer"
            duration={700}>
            {getIcon('skills')}
            {labels.skills}
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="proyectos"
            activeClass="active"
            onSetActive={handleActive}
            onClick={handleClick}
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
            onClick={handleClick}
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
};
