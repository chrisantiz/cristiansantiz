import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import { NotFoundIcon } from '@components/icons';
import '@/styles/components/_not-found.scss';

const NotFoundPage = (props: any) => {
  console.log(props);
  return (
    <PageContainer>
      <SEO title="404: Not found" />
      <div className="not-found">
        <h1>NOT FOUND</h1>
        <NotFoundIcon width="200px" height="200px" />
        <p>The page you were loooking for does't exists</p>

        <Link to={'es' === 'es' ? '/' : `/en`}>GO TO HOME</Link>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
