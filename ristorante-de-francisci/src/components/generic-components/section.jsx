import styled from "styled-components";
import { theme } from "../../style/theme";

const SectionContainer = styled.div`
  padding: 16px;
  width: ${({ $width }) => $width || '50%'};

  @media (max-width: 878px) {
    width: ${({ $minorWidth }) => $minorWidth || '100%'};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TextSection = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-family: ${theme.fonts.playfair};
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: 2.4rem;
  margin-bottom: 24px;

  @media (max-width: 1160px) {
    font-size: ${({ $fontSize }) => $fontSize || '2rem'};
  }
`;

const SectionP = styled.p`
  font-family: ${theme.fonts.roboto};
  margin-bottom: 32px;
  white-space: normal;
`;

function Section({sectionTitle, sectionP, children, $width, $minorWidth, $fontSize}) {
  return (
    <>
      <SectionContainer $width={$width} $minorWidth={$minorWidth}>
        <TextSection>
          <SectionTitle $fontSize= {$fontSize}>{sectionTitle}</SectionTitle>
          <SectionP>{sectionP}</SectionP>
          {children}
        </TextSection>
      </SectionContainer>
    </>
  );
}

export default Section;
