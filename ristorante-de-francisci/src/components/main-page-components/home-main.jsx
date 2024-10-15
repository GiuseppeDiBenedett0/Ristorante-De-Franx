import styled from "styled-components";
import { theme } from "../../style/theme";
import HeaderComponent from "./header";
import Section from "../generic-components/section";
import ImageComponent from "../generic-components/images";
import ButtonComponent from "../generic-components/button";
import announcementImage from "../../assets/nadine-primeau--ftWfohtjNw-unsplash.jpg";
import ratingStars from "../../assets/rating-stars.svg";
import ContainerComponent from "../generic-components/container";
import headerImage from "../../assets/negley-stockman-w7i5Jt7W9T0-unsplash.jpg";
import HomeData from "../../models/homeData";

const WorkAnnouncementSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 90%;
  margin: 64px auto;
  background-image: url(${announcementImage});
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  @media (max-width: 800px) {
    width: 90%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f0f0;
  height: 80%;
  width: 500px;
  margin-top: 16px;
  margin-bottom: 16px;
  z-index: 2;
  border-radius: 25px;
  padding: 16px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const CardTitle = styled.h3`
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.playfair};
  font-weight: 600;
  font-size: 2rem;
  margin: 8px;

  @media (max-height: 940px) {
    font-size: 1.7rem;
  }

  @media (max-width: 436px) {
    font-size: 1.5rem;
  }
`;

const CardP = styled.p`
  font-family: ${theme.fonts.roboto};
  margin: 16px;
  font-size: 1.2rem;

  @media (max-height: 940px) {
    font-size: 1rem;
  }

  @media (max-width: 436px) {
    font-size: 0.8rem;
  }
`;

const RatingSction = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 94px;
  width: 100%;
  height: 400px;
`;

const RatingText = styled.h4`
  font-family: ${theme.fonts.playfair};
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: 1.8rem;
  margin-bottom: 12px;
  font-style: italic;

  &.rating-value {
    margin-top: 40px;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const RatingStars = styled.img`
  height: 13%;
  margin: auto;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    height: 10%;
  }
`;

function HomeMainComponent() {
  
  return (
    <>
      <HeaderComponent
        src={headerImage}
        alt={"Tavolata"}
        title={"La pirri"}
        titleBr={"gentile"}
        subTitle={"Solo il meglio"}
        subTitleBr={"per i capitani di domani"}
        paragraph={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dignissimos, molestias animi provident reiciendis
            laudantium labore officiis.
          </>
        }
      />
      {HomeData.map((data, index) => {
        return (
          <div key={index}>
            <ContainerComponent $flexDirection={data.containerFlexDirection}>
              <Section
                sectionTitle={data.sectionTitle}
                sectionP={data.sectionP}
                $sectionWidth={data.sectionWidth}
              >
                <ButtonComponent buttonText={data.buttonText} to={data.buttonLink} />
              </Section>
              <ImageComponent
                images={data.images}
                hoverImages={data.hoverImage}
                $imgWidth={data.imgWidth}
                $imgHeight={data.imgHeight}
                $sectionWidth={data.imageSectionWidth}
              />
            </ContainerComponent>
          </div>
        );
      })}
      <WorkAnnouncementSection>
        <WorkCard>
          <CardTitle>
            Vieni a lavorare a <br /> Pirri!
          </CardTitle>
          <CardP>
            Reprehenderit dignissimos, molestias animi provident reiciendis
            laudantium labore officiis laborum amet consequuntur voluptatum
            sequi ullam ratione doloremque blanditiis, odit hic voluptas non!
            Reprehenderit dignissimos, molestias animi provident reiciendis
            laudantium labore officiis laborum amet consequuntur voluptatum
            sequi ullam ratione doloremque blanditiis, odit hic voluptas non!
          </CardP>
          <ButtonComponent buttonText={"Visita"} to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} width={"100%"}/>
        </WorkCard>
      </WorkAnnouncementSection>

      <RatingSction>
        <RatingText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </RatingText>
        <RatingText className="rating-value">
          Valutazione finale: 5/5
        </RatingText>
        <RatingStars src={ratingStars} alt="rating" />
        <RatingText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </RatingText>
      </RatingSction>
    </>
  );
}

export default HomeMainComponent;