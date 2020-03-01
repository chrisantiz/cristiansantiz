import React from 'react';
// import { graphql } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
// import { useDate } from '../libs/hooks/use-date';
// import Img from 'gatsby-image';

// interface BlogItem {
//   id: string;
//   title: string;
//   date: string;
//   author: string;
//   cover: any;
//   path: string;
// }

const BlogPage = ({ pageContext: { locale } }: any) => {
  // const { dateFromNow } = useDate();

  // const blogs: BlogItem[] = data.allMdx.edges.map((edge: any) => {
  //   return {
  //     id: edge.node.id,
  //     ...edge.node.frontmatter,
  //     cover: edge.node.frontmatter.cover.childImageSharp.fluid,
  //     path: `${path}/${edge.node.parent.relativeDirectory}`,
  //   };
  // });

  const message = locale === 'es' ? 'Muy pronto' : 'Coming soon';

  return (
    <>
      <SEO title="Blog" />
      <PageContainer>
        <div
          className="text-4xl sm:text-6xl"
          style={{
            width: '100%',
            height: '80.5vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'rgba(0,0,0,.3)',
          }}>
          {message}
          <div>:D</div>
        </div>
        {/* {blogs.map(blog => (
          <div key={blog.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
              <Img className="w-full" fluid={blog.cover} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>

            <Link className="text-red-500" to={blog.path}>
              {blog.title}
            </Link>
            <p>{dateFromNow(blog.date)}</p>
          </div>
        ))} */}
      </PageContainer>
    </>
  );
};

// export const query = graphql`
//   query MyQuery($locale: String!) {
//     allMdx(
//       filter: { fields: { locale: { eq: $locale } } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             author
//             cover {
//               sourceInstanceName
//               childImageSharp {
//                 fluid(maxWidth: 400, maxHeight: 200) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           parent {
//             ... on File {
//               relativeDirectory
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogPage;
