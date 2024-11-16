import styled from "styled-components";
import { theme } from "../../style/theme";

const Name = styled.h3`
  font-family: ${theme.fonts.playfair};
  color: ${theme.colors.secondary};
  font-size: ${({$fontSize}) => $fontSize || "1.3rem"};
  text-align: ${({$textAlign}) => $textAlign || "center"};
  text-transform: uppercase;
  margin-top: ${({$marginTop}) => $marginTop || "0"};

  @media (max-width: ${({ $maxWidth }) => $maxWidth }) {
    font-size: ${({ $midFontSize }) => $midFontSize};
  }
`;

function DishName( {children, $textAlign, $fontSize, $marginTop, $maxWidth ,$midFontSize } ){
    return(
        <>
        <Name $textAlign={$textAlign} $fontSize={$fontSize} $marginTop={$marginTop} $maxWidth={$maxWidth} $midFontSize ={$midFontSize }>{ children }</Name>
        </>
    )
}

export default DishName;