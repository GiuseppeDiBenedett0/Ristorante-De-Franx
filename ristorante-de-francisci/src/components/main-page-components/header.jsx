import styled from "styled-components";
import { theme } from "../../style/theme";
import { fadeInImage } from "../../style/animation";
import { fadeIn } from "../../style/animation";
import { useEffect, useState } from "react";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $heightVh }) => $heightVh || "80vh"};
  overflow: hidden;
  border-bottom: 2px solid ${theme.colors.secondary};

  @media (max-width: 1150px) {
    margin-bottom: 130px;
  }

  @media (max-width: 757px) {
    margin-bottom: 160px;
  }

  @media (max-width: 553px) {
    margin-bottom: 200px;
  }
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeInImage} 2s linear;
  filter: brightness(50%);
`;

const HeaderTitle = styled.h1`
  font-family: ${theme.fonts.playfair};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.text};
  text-transform: uppercase;
  font-size: 6rem;
  text-align: center;
  letter-spacing: 8px;
  white-space: nowrap;
  animation: ${fadeIn} 2s linear;
  animation-delay: 1s;
  animation-fill-mode: backwards;
  line-height: 1.3;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;

    @media (max-width: 1030px) {
    font-size: 4rem;
  }

  @media (max-width: 972px) {
    font-size: 3.7rem;
  }

  @media (max-height: 700px) {
    top: 30%;
  }

  @media (max-width: 690px) {
    font-size: 3.5rem;
    line-height: 1.5;
  }
`;

const HeaderSubTitle = styled.h3`
  font-family: "Playfair Display", sans-serif;
  font-size: 2.2rem;
  font-style: italic;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.text};
  text-align: center;
  letter-spacing: 4px;
  white-space: nowrap;
  animation: ${fadeIn} 2s linear;
  animation-delay: 3s;
  animation-fill-mode: backwards;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
  line-height: 1.5;

  @media (max-width: 780px) {
    font-size: 1.5rem;
  }

  @media (max-width: 624px) {
    font-size: 1.4rem;
  }
`;

const HeaderSubContainer = styled.div`
  position: absolute;
  top: 81%;
  left: 50%;
  width: 1140px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${theme.colors.primary};
  box-shadow: 0px 0px 10px 15px rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
  animation: ${fadeIn} 2s linear;
  animation-delay: 1s;
  animation-fill-mode: backwards;

  @media (max-width: 1150px) {
    width: 900px;
  }

  @media (max-width: 904px) {
    width: 750px;
  }

  @media (max-width: 757px) {
    width: 550px;
  }

  @media (max-width: 553px) {
    width: 350px;
  }
`;

const SubHeaderP = styled.p`
  font-family: "Playfair Display", sans-serif;
  color: ${theme.colors.text};
  text-align: center;
  font-size: 1.5rem;
  animation: ${fadeIn} 2s linear;
  animation-delay: 1s;
  animation-fill-mode: backwards;

  @media (max-width: 904px) {
    font-size: 1.3rem;
  }

  @media (max-width: 553px) {
    font-size: 1.2rem;
  }
`;

function HeaderComponent({
  heightVh,
  src,
  alt,
  title,
  titleBr,
  subTitle,
  subTitleBr,
  paragraph,
  showSubContainer = true,
}) {

  //Regolazione della posizione del titolo e sottotitolo in base alla grandezza dello schermo.
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let resizeTimeout;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 625);
    };

    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debounceResize);
    handleResize();

    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  return (
    <>
      <HeaderContainer heightVh={heightVh}>
        <HeaderImage src={src} alt={alt} />
        <HeaderTitle>
          {title} {isSmallScreen && <br />} {titleBr}
        </HeaderTitle>
        <HeaderSubTitle>
          {subTitle}
          {isSmallScreen && <br />} {subTitleBr}
        </HeaderSubTitle>
      </HeaderContainer>
      {showSubContainer && (
        <HeaderSubContainer>
          <SubHeaderP>{paragraph}</SubHeaderP>
        </HeaderSubContainer>
      )}
    </>
  );
}

export default HeaderComponent;
