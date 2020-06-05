import React, { useState } from 'react';
import PageContainer from '../PageContainer';
import Title from './util/Title';
import { useLang } from '@/libs/hooks/use-language';
import Paragraph from './util/Paragraph';
import SimpleCard from '../simple-card/SimpleCard';
import { ProjectsCardId } from '@/models/locale.model';
import { graphql, useStaticQuery } from 'gatsby';
import { getImageFluid } from '@/helpers/get-image-fluid.helper';
import Img from 'gatsby-image';
import Dialog from '../dialog/Dialog';

interface Props {
  id: string;
}

const Projects: React.FC<Props> = ({ id }) => {
  const {
    lang: {
      pages: { projects },
    },
  } = useLang();

  const { allFile: imagesData } = useStaticQuery(query);

  const images = (imagesData.edges as any[]).map((edge: any) =>
    getImageFluid(edge),
  );

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{ title: string } | null>(null);

  function openModal(cardId: ProjectsCardId) {
    const data = projects.cards.find(card => card.cardId === cardId)!;

    setModalData({ title: data.title });
    setShowModal(true);
  }

  function generateCards() {
    const { cards } = projects;

    return cards.map((card, index) => {
      const image = images.filter(img => {
        const name = (img.fluid as any).originalName.split('.')[0];
        return card.cardId === name;
      })[0];

      return (
        <SimpleCard
          key={`card_${index}`}
          coverIsSvg={false}
          title={
            <span
              className="cursor-pointer hover:underline"
              onClick={() => openModal(card.cardId as ProjectsCardId)}>
              {card.title}
            </span>
          }>
          <Img fluid={image.fluid} key={image.id} className="w-full" />
          {card.description}
        </SimpleCard>
      );
    });
  }

  return (
    <PageContainer id={id} className="py-3 min-h-screen">
      <Title>{projects.linkLabel}</Title>

      <Paragraph>{projects.text}</Paragraph>

      {/* cards */}
      <section className="card-container mt-3">{generateCards()}</section>

      {!!modalData && (
        <Dialog
          show={showModal}
          title={modalData.title}
          onHide={() => setShowModal(false)}>
          {/* content */}
          <>The new content in Dialog</>
          {/* footer */}
          <>The dialog footer</>
        </Dialog>
      )}
    </PageContainer>
  );
};

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`;

export default Projects;
