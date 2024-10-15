import styled from "styled-components";
import { theme } from "../../style/theme";

const SectionContainer = styled.div`
  padding: 16px;
  width: ${({ $width }) => $width || '50%'};

  @media (max-width: 878px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-family: ${theme.fonts.playfair};
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: ${({ $fontSize }) => $fontSize || '2.4rem'};
  margin-bottom: 24px;
`;

const SectionP = styled.p`
  font-family: ${theme.fonts.roboto};
  margin-bottom: 32px;
  white-space: normal;
`;

const SecondTitle = styled.h3`
  font-family: ${theme.fonts.playfair};
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: ${({ $fontSize }) => $fontSize || '2rem'};
  margin-bottom: 24px;

  @media (max-width: 1160px) {
    font-size: 1.8rem;
  }
`;

const SecondP = styled.p`
  font-family: ${theme.fonts.roboto};
  margin-bottom: 32px;
  white-space: normal;
`;

function Section({sectionTitle, sectionP, secondTitle, secondP, children, $width, $minorWidth, $fontSize, imageElement}) {
  return (
    <>
      <SectionContainer $width={$width} $minorWidth={$minorWidth}>
        <TextSection>
          <SectionTitle $fontSize= {$fontSize}>{sectionTitle}</SectionTitle>
          {imageElement}
          <SectionP>{sectionP}</SectionP>
          {children}
          <SecondTitle>{ secondTitle }</SecondTitle>
          <SecondP>{ secondP }</SecondP>
        </TextSection>
      </SectionContainer>
    </>
  );
}

export default Section;
