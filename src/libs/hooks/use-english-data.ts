import { graphql, useStaticQuery } from 'gatsby';
import { DataLocale } from '@models/locale.model';

/** get data in english */
export const useEnglishData = () => {
  const { file } = useStaticQuery(query);

  return file.nodes[0].childLocalesJson as DataLocale;
};

const query = graphql`
  {
    file: allFile(filter: { name: { eq: "en" } }) {
      nodes {
        name
        childLocalesJson {
          labels {
            darkModeBtn
            githubBtn
          }
          pages {
            home {
              text
              linkLabel
            }
            aboutMe {
              text
              linkLabel
            }
            projects {
              text
              linkLabel
            }
            contact {
              text
              linkLabel
            }
          }
        }
      }
    }
  }
`;
