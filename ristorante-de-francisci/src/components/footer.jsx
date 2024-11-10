import styled from "styled-components";
import { theme } from "../style/theme";
import xIcon from "../assets/x-social-media-round-icon.svg";
import facebookIcon from "../assets/facebook-app-round-icon.svg";
import instagramIcon from "../assets/black-instagram-icon.svg";

const FooterBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  width: 100%;
  height: 320px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fonts.roboto};
  width: 500px;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a`
  width: 32px;
  height: 32px;
  margin: 16px;
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterSubTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid ${theme.colors.text};
  margin: 8px;
`;

const FooterP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 16px;
`;

const Separetor = styled.div`
  width: 250px;
  height: 5px;
  border-top: 1px solid ${theme.colors.text};
  margin: 16px;
`;

function FooterComponent() {
  return (
    <>
      <FooterBody>
        <FooterSection>
          <FooterTitle>Seguici sui nostri social</FooterTitle>
          <IconContainer>
            <IconLink
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="Seguici su X" />
            </IconLink>
            <IconLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Seguici su Facebook" />
            </IconLink>
            <IconLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Seguici su Instagram" />
            </IconLink>
          </IconContainer>
          <FooterSubTitle>Come disse il saggio</FooterSubTitle>
          <FooterP>Lorem ipsum dolor sit amet consectetur adipisicing.</FooterP>
          <FooterP>Lorem ipsum dolor sit amet consectetur adipisicing.</FooterP>
          <Separetor></Separetor>
          <FooterP>© 2024 Lorem ipsum dolor sit amet.</FooterP>
        </FooterSection>
      </FooterBody>
    </>
  );
}

export default FooterComponent;
