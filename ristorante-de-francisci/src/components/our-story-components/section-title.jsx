import styled from "styled-components";
import { theme } from "../../style/theme";

const TitleText = styled.h2`
  font-size: 3.4rem;
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  text-align: center;
  text-transform: uppercase;
  margin-top: ${({ $marginTop }) => $marginTop || "8px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "8px"};

  @media(max-width: 580px){
    font-size: 2.5rem;
  }

  @media(max-width: 480px){
    font-size: 2rem;
  }
`;

const TitleContainer = styled.div`
  width: 65%;
  background-color: ${theme.colors.primary};
  border-radius: 15px;
  margin: auto;
  margin-top: ${({ $marginTop }) => $marginTop || "40px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "24px"};
  padding: 16px;
  box-shadow: inset 0px -10px 10px rgba(0, 0, 0, 0.4),
    inset 0px 10px 10px rgba(0, 0, 0, 0.4);

    @media(max-width: 1160px){
      width: 75%;
  }

    @media(max-width: 400px){
      width: 90%;
  }
`;

function Title( {title} ){
    return(
        <>
        <TitleContainer>
            <TitleText>{ title }</TitleText>
        </TitleContainer>
        </>
    )
}

export default Title;