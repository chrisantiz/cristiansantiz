import React from 'react';
// import { Link } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '../libs/hooks/use-language';

const IndexPage = (props: any) => {
  const { lang: { pages: { home } } } = useLanguage();
  return (
    <>
      <SEO title={home.linkLabel} />
      <PageContainer>
        {/* <ChangeLangButton /> */}
        {/* <button className="bg-red-300" onClick={() => toggleLang()}>
          Toggle language
        </button> */}
        {/* <Link to="/en">English</Link>
        <p>{lang.pages.aboutMe.text}</p> */}
      </PageContainer>
    </>
  );
};

export default IndexPage;
