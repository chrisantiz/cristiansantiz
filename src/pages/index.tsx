import React from 'react';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';

import '@styles/indexPage.scss';
import { Home } from '../components/landing-page/Home';
import { AboutMe } from '../components/landing-page/AboutMe';
import { Projects } from '../components/landing-page/Projects';
import { Contact } from '../components/landing-page/Contact';

import { Link } from 'react-scroll';

const IndexPage = () => {
  return (
    <>
      <SEO title="Landing page" />
      <div style={{ position: 'fixed', height: '52px', backgroundColor: 'black', color: 'white' }}>
          <Link
            activeClass="active"
            to="home"
            spy
            smooth
            hashSpy
            duration={500}>
            Home
          </Link>
          <Link
            activeClass="active"
            to="aboutMe"
            spy
            hashSpy
            smooth
            duration={500}>
            AboutMe
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy
            hashSpy
            smooth
            duration={500}>
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy
            hashSpy
            smooth
            duration={500}>
            Contact
          </Link>
      </div>
      <div>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default IndexPage;
