import React, { useMemo } from 'react';
import './toolbar.scss';
import Img from 'gatsby-image';
import { Link } from 'react-scroll';
import { DrawerToggleButton } from '@components/side-drawer/DrawerToggleButton';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { GithubIcon } from '@components/icons';
import { DropdownLanguages } from '../dropdown-languages/DropdownLanguages';
import { useLang } from '@libs/hooks/use-language';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  isSmallScreen: boolean;
}

export const Toolbar = ({ isSmallScreen }: Props) => {
  const staticClasses = 'toolbar toolbar-invert';

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-black-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    lang: { labels },
  } = useLang();

  const items = useMemo(() => {
    return !isSmallScreen ? (
      <ToolbarItems className="toolbar-navigation-items invert" />
    ) : (
      <></>
    );
  }, [isSmallScreen]);

  return (
    <header className={staticClasses}>
      <nav className="toolbar-navigation container">
        <div className="toolbar-button">
          <DrawerToggleButton />
        </div>
        <div className="toolbar-logo">
          <Link
            to="inicio"
            offset={-56}
            smooth
            duration={700}
            className="cursor-pointer"
            title="logo">
            <Img fluid={logo.file.childImageSharp.fluid} alt="logo" />
          </Link>
        </div>
        <div className="spacer"></div>
        {items}
        {/* dark mode button */}
        <DarkModeButton className="ml-2" title={labels.darkModeBtn} />
        <DropdownLanguages className="ml-2" title={labels.i18nButton} />
        {/* go to Github account */}
        <a
          target="_blank"
          className="ml-2"
          title={labels.githubBtn}
          href="https://github.com/crisantizan">
          <GithubIcon width="20px" height="20px" />
        </a>
      </nav>
    </header>
  );
};
