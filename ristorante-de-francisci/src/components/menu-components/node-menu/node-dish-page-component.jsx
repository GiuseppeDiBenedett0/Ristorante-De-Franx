import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useParams } from "react-router-dom";
import DishName from "../dish-name-component";
import DishImage from "../dish-image-component";
import Pictureframe from "../../generic-components/section-picture-frame";

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
`;

const AllergenList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 16px;
  padding: 0;
`;

const AllergenItem = styled.li`
  font-family: ${theme.fonts.manrope};
  font-size: 1.3rem;
  background-color: #fbfbc7;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 15px;
  margin: 8px;
  padding: 8px;
`;

const ParagraphContainer = styled.div`
  width: 600px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 500;
  font-family: ${theme.fonts.manrope};
  text-align: center;
`;

function NodeDishPageComponent() {
  //Estrae l'ID del piatto dalla URL tramite useParams per caricare i dati specifici di quel piatto.
  const { dishId } = useParams();
  const id = parseInt(dishId);
  const [dishData, setDishData] = useState({});

  //Carica i dati del piatto dall'API all'avvio del componente.
  useEffect(() => {
    const fetchDishById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/dish/${id}`
        );
        setDishData(response.data);
      } catch (err) {
        console.error("Errore durante il caricamento dei dati", err);
      }
    };
    fetchDishById();
  }, [id]);

  console.log(dishData);

  return (
    <>
      <MainContainer>
        <Pictureframe
          $sectionWidth={"1000px"}
          $flexDirection={"column"}
          $marginTop={"80px"}
          $marginBottom={"80px"}
        >
          <DishName
            $textAlign={"justify"}
            $fontSize={"3rem"}
            $marginTop={"16px"}
          >
            {dishData.name}
          </DishName>
          <DishImage
            src={dishData.imgSrc}
            alt={dishData.imgAlt}
            $width={"350px"}
            $height={"300px"}
            $margin={"32px"}
            $enableHover={false}
          />
          <SubTitle>Descrizione del piatto</SubTitle>
          <ParagraphContainer>
            <Paragraph>{dishData.info}</Paragraph>
          </ParagraphContainer>
          {dishData.allergens && dishData.allergens.length > 0 && (
            <>
              <SubTitle>Lista degli allergeni:</SubTitle>
              <AllergenList>
                {Array.isArray(dishData.allergens) ? (
                  dishData.allergens.map((allergen, index) => (
                    <AllergenItem key={index}>{allergen}</AllergenItem>
                  ))
                ) : (
                  <AllergenItem>{dishData.allergens}</AllergenItem>
                )}
              </AllergenList>
            </>
          )}
        </Pictureframe>
      </MainContainer>
    </>
  );
}

export default NodeDishPageComponent;
