import styled from "styled-components";
import { theme } from "../../style/theme";
import Pictureframe from "../generic-components/section-picture-frame";
import chiliImage from "../../assets/chili-icon.svg";
import asterisk from "../../assets/asterisk_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import star from "../../assets/star-icon.svg";

const LeggendTitle = styled.h2`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const LeggendItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  justify-items: center;
`;

const LeggendItems = styled.div`
  text-align: center;
  margin: 8px;
`;

const LeggendSubtitle = styled.h3`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 8px;
`;

const LeggendImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 8px;
`;

const renderChiliIcons = (level) => {
  const chilies = Array(level).fill(0);

  return chilies.map((_, index) => (
    <LeggendImage key={index} src={chiliImage} alt={`piccantezza livello ${index + 1}`} />
  ));
};

function LeggendComponent() {
  return (
    <>
      <Pictureframe $sectionWidth={"900px"} $flexDirection={"column"} $backgroundColor={"#fbfbc7"}>
        <LeggendTitle>Leggenda</LeggendTitle>
        <LeggendItemsContainer>
        <LeggendItems>
            <LeggendSubtitle>Disponibile solo a cena:</LeggendSubtitle>
            <LeggendImage src={star} alt="stellina" />
          </LeggendItems>
          <LeggendItems>
            <LeggendSubtitle>Presenti allergeni:</LeggendSubtitle>
            <LeggendImage src={asterisk} alt="asterisco" />
          </LeggendItems>
          <LeggendItems>
            <LeggendSubtitle>Piccantezza bassa:</LeggendSubtitle>
            {renderChiliIcons(1)}
          </LeggendItems>
          <LeggendItems>
            <LeggendSubtitle>Piccantezza media:</LeggendSubtitle>
            {renderChiliIcons(2)}
          </LeggendItems>
          <LeggendItems>
            <LeggendSubtitle>Piccantezza alta:</LeggendSubtitle>
            {renderChiliIcons(3)}
          </LeggendItems>
        </LeggendItemsContainer>
      </Pictureframe>
    </>
  );
}

export default LeggendComponent;
