import styled from "styled-components";
import { theme } from "../../style/theme";
import Card from "react-bootstrap/Card";
import DishName from "./dish-name-component";
import ButtonComponent from "../generic-components/button";
import LeggendComponent from "./leggend-component";
import menuData from "../../models/menuData";
import DishImage from "./dish-image-component";
import chiliImage from "../../assets/chili-icon.svg";
import asterisk from "../../assets/asterisk_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import star from "../../assets/star-icon.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

const DishesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  justify-items: center;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryTitle = styled.h2`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin: 24px;
`;

const CustomCard = styled(Card)`
  width: 18rem;
  margin: 8px;
  background-color: #fbfbc7;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  position: absolute;
  top: 67%;
  left: 70%;
  width: 60px;
  height: 25px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
`;

const PriceText = styled.p`
  font-family: ${theme.fonts.roboto};
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: ${({ $top }) => $top || "0"};
  left: ${({ $left }) => $left || "0"};
  width: ${({ $width }) => $width || "0"};
`;

const Svg = styled.img`
  width: 24px;
`;

function DishComponent() {
  return (
    <>
      <MainContainer>
        <LeggendComponent />
        {menuData.map((category, index) => (
          <CategoryContainer id={category.category.toLowerCase()} key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <DishesGrid>
              {category.dishes.map((dish, dishIndex) => (
                <CustomCard style={{ width: "18rem" }} key={dishIndex}>
                  <CardBody>
                    <DishName>{dish.name}</DishName>
                    {dish.onlyDinner === true && (
                      <SvgContainer $top={"1%"} $left={"3%"} $width={"24px"}>
                        <Svg src={star} alt="Stella disponibilità" />
                      </SvgContainer>
                    )}
                    {dish.allergens.length > 0 && (
                      <SvgContainer $top={"1%"} $left={"90%"} $width={"24px"}>
                        <Svg src={asterisk} alt="Asterisco allergeni" />
                      </SvgContainer>
                    )}
                    <DishImage
                      src={dish.imageSrc}
                      alt={dish.imageAlt}
                      $width={"100%"}
                    />
                    <PriceContainer>
                      <PriceText>{dish.price}</PriceText>
                    </PriceContainer>
                    <SvgContainer $top={"67%"} $left={"8%"} $width={"80px"}>
                      {Array.from({ length: dish.spicy }).map((_, i) => (
                        <Svg src={chiliImage} alt="Piccantezza" key={i} />
                      ))}
                    </SvgContainer>
                    <ButtonComponent
                      width={"120px"}
                      fontSize={"0.8rem"}
                      to={`/menù/${dish.id}`}
                      buttonText={"Clicca"}
                    />
                  </CardBody>
                </CustomCard>
              ))}
            </DishesGrid>
          </CategoryContainer>
        ))}
      </MainContainer>
    </>
  );
}

export default DishComponent;
