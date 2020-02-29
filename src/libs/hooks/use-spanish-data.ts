import { graphql, useStaticQuery } from 'gatsby';
import { DataLocale } from '../../models/locale.model';

/** get data in english */
export const useSpanishData = () => {
  const {file} = useStaticQuery(query);
  return file.nodes[0].childLocalesJson as DataLocale;
};

const query = graphql`
  {
    file: allFile(filter: { name: { eq: "es" } }) {
      nodes {
        name
        childLocalesJson {
          labels {
            darkModeBtn
            githubBtn
            i18nButton
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
