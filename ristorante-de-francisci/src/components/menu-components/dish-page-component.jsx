import styled from "styled-components";
import { theme } from "../../style/theme";
import { useParams } from "react-router-dom";
import DishName from "./dish-name-component";
import DishImage from "./dish-image-component";
import menuData from "../../models/menuData";
import Pictureframe from "../generic-components/section-picture-frame";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-family: ${theme};
  color: ${theme.colors.secondary};
  margin-bottom: 24px;
  margin-top: 8px;

  @media (max-width: 645px) {
    font-size: 1.5rem;
  }
`;

const AllergenList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 16px;
  padding: 0;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AllergenItem = styled.li`
  font-family: ${theme.fonts.manrope};
  font-size: 1.3rem;
  background-color: #fbfbc7;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 15px;
  margin: 8px;
  padding: 8px;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ParagraphContainer = styled.div`
  width: 600px;

  @media (max-width: 830px) {
    width: 90%;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 500;
  font-family: ${theme.fonts.manrope};
  text-align: center;

  @media (max-width: 830px) {
    font-size: 1rem;
  }
`;

function DishPageComponent() {
  const { idName } = useParams();

  const id = parseInt(idName);

  const dish = menuData
    .flatMap((category) => category.dishes)
    .find((dish) => dish.id === id);

  if (!dish) {
    return <p>Piatto non trovato</p>;
  }

  return (
    <>
      <MainContainer>
        <Pictureframe
          $sectionWidth={"850px"}
          $flexDirection={"column"}
          $marginTop={"80px"}
          $marginBottom={"80px"}
          $midWidth={"80%"}
          $minWidth={"80%"}
        >
          <DishName
            $textAlign={"justify"}
            $fontSize={"3rem"}
            $marginTop={"16px"}
            $maxWidth={"550px"}
            $midFontSize={"1.8rem"}
          >
            {dish.name}
          </DishName>
          <DishImage
            src={dish.imageSrc}
            alt={dish.imageAlt}
            $width={"350px"}
            $height={"300px"}
            $margin={"32px"}
            $mediaWidth={"200px"}
            $mediaHeight={"200px"}
            $enableHover={false}
          />
          <SubTitle>Descrizione del piatto</SubTitle>
          <ParagraphContainer>
            <Paragraph>{dish.info}</Paragraph>
          </ParagraphContainer>
          {dish.allergens.length > 0 && (
            <>
              <SubTitle>Lista degli allergeni:</SubTitle>
              <AllergenList>
                {dish.allergens.map((allergen, index) => (
                  <AllergenItem key={index}>{allergen}</AllergenItem>
                ))}
              </AllergenList>
            </>
          )}
        </Pictureframe>
      </MainContainer>
    </>
  );
}

export default DishPageComponent;
