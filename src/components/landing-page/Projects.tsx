import React, { useState, useEffect } from 'react';
import { Modal } from '../modal/Modal';
import { PageContainer } from '../PageContainer';
import { Title } from './util/Title';
import { useLang } from '@/libs/hooks/use-language';
import { Paragraph } from './util/Paragraph';
import { SimpleCard } from '../simple-card/SimpleCard';
import { CompetitivenessIcon } from '../icons';
import { ProjectsCardId } from '@/models/locale.model';
import { graphql, useStaticQuery } from 'gatsby';
import { getImageFluid } from '@/helpers/get-image-fluid.helper';
import { ChildImageSharp } from '@/models/graphql.model';
// import { Video } from '../video/Video';
import Img from 'gatsby-image';
import { Dialog } from '../modal/Dialog';

interface Props {
  id: string;
}

export const Projects: React.FC<Props> = ({ id }) => {
  const {
    lang: {
      pages: { projects },
    },
  } = useLang();

  const { allFile: imagesData } = useStaticQuery(query);

  const images = (imagesData.edges as any[]).map((edge: any) =>
    getImageFluid(edge),
  );

  useEffect(() => {
    console.log(images);
    // console.log(imagesData);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{ title: string } | null>(null);

  function openModal(cardId: ProjectsCardId) {
    const data = projects.cards.find(card => card.cardId === cardId)!;

    setModalData({ title: data.title });
    setShowModal(true);
  }

  function generateCards() {
    const { cards } = projects;
    let wowDelayTime = 100;

    return cards.map((card, index) => {
      wowDelayTime += 100;

      return (
        <div
          data-wow-delay={`${wowDelayTime}ms`}
          key={`card_${index}`}
          /* className={card.classes} */
        >
          <SimpleCard
            title={
              <span
                className="cursor-pointer hover:underline"
                onClick={() => openModal(card.cardId)}>
                {card.title}
              </span>
            }>
            <CompetitivenessIcon className="w-32 h-32" />
            {card.description}
          </SimpleCard>
        </div>
      );
    });
  }

  return (
    <PageContainer id={id} className="pt-2 md:pt-6 min-h-screen">
      <Title animation="swashIn">{projects.linkLabel}</Title>

      <Paragraph animation="swashIn" animationDelay="100ms">
        {projects.text}
      </Paragraph>

      {/* cards */}
      <section
        /* className="flex flex-wrap md:flex-no-wrap mb-4 mt-3" */ className="card-grid mt-3">
        {generateCards()}
      </section>

      <div>
        {/* <Img fluid={images[0]} /> */}
        {images.map(image => (
          <Img fluid={image.fluid} key={image.id} />
        ))}
      </div>

      {/* <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Video
          id="vp-01"
          src="https://res.cloudinary.com/crisantizan/video/upload/v1584503745/cristiansantiz.com/kishas_clip_t2xujd.mp4"
          options={{ fluid: true, controls: true, muted: true }}
        />
      </div> */}

      {!!modalData && (
        // <Modal
        //   show={showModal}
        //   title={modalData.title}
        //   onHide={() => setShowModal(false)}>
        //   {/* content */}
        //   <div>The content</div>
        //   {/* footer */}
        //   <div>The footer</div>
        // </Modal>
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
